// Compresse les images lourdes de /public/images/ pour réduire LCP.
// Stratégie:
//   - JPG: re-encode qualité 82, mozjpeg, resize max 1920px largeur
//   - PNG: re-encode (compression niveau 9), resize max 1920px largeur
//   - Génère une version .webp à côté pour les navigateurs modernes
//
// Idempotent: ne re-compresse pas les fichiers déjà sous le seuil.
// Les originaux sont remplacés (backup possible via git).
//
// Usage: node scripts/compress-images.mjs

import sharp from "sharp";
import { readdir, stat, readFile, writeFile, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve, extname, basename } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = resolve(__dirname, "..", "public", "images");

const SIZE_THRESHOLD = 250 * 1024; // 250 KB — sous ce seuil, on ne touche pas
const MAX_WIDTH = 1920;
const JPG_QUALITY = 82;
const WEBP_QUALITY = 78;

function fmtKB(bytes) {
  return (bytes / 1024).toFixed(0) + " KB";
}

async function processFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return null;

  const stats = await stat(filePath);
  if (stats.size < SIZE_THRESHOLD) return null;

  const before = stats.size;
  const data = await readFile(filePath);
  const meta = await sharp(data).metadata();

  // Pipeline base: resize si nécessaire
  let pipeline = sharp(data);
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
  }

  // Re-encode dans le même format
  let outputBuffer;
  if (ext === ".png") {
    outputBuffer = await pipeline
      .png({ compressionLevel: 9, palette: true })
      .toBuffer();
  } else {
    outputBuffer = await pipeline
      .jpeg({ quality: JPG_QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();
  }

  // Ne remplace que si gain significatif (> 15 %)
  const gain = (before - outputBuffer.length) / before;
  if (gain < 0.15 && outputBuffer.length > before * 0.95) {
    return { filePath, skipped: "no significant gain", before, after: outputBuffer.length };
  }

  await writeFile(filePath, outputBuffer);

  // Génère version .webp à côté (toujours utile pour les CDN modernes)
  const webpPath = filePath.replace(/\.(jpe?g|png)$/i, ".webp");
  const webpBuffer = await sharp(data)
    .resize(meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : meta.width, null, {
      withoutEnlargement: true,
    })
    .webp({ quality: WEBP_QUALITY, effort: 6 })
    .toBuffer();
  await writeFile(webpPath, webpBuffer);

  return {
    filePath,
    before,
    after: outputBuffer.length,
    webpSize: webpBuffer.length,
    saved: before - outputBuffer.length,
  };
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await walk(fullPath)));
    } else if (entry.isFile()) {
      results.push(fullPath);
    }
  }
  return results;
}

async function main() {
  console.log(`Scanning ${imagesDir} (threshold: ${fmtKB(SIZE_THRESHOLD)})\n`);

  const files = await walk(imagesDir);
  let totalBefore = 0;
  let totalAfter = 0;
  let touched = 0;

  for (const file of files) {
    try {
      const result = await processFile(file);
      if (!result) continue;
      if (result.skipped) {
        console.log(
          `[skip] ${basename(result.filePath)} (${fmtKB(result.before)}) — ${result.skipped}`
        );
        continue;
      }
      const ratio = (((result.before - result.after) / result.before) * 100).toFixed(1);
      console.log(
        `[ok]   ${basename(result.filePath)} ${fmtKB(result.before)} → ${fmtKB(result.after)} (-${ratio}%)  + webp ${fmtKB(result.webpSize)}`
      );
      totalBefore += result.before;
      totalAfter += result.after;
      touched++;
    } catch (err) {
      console.error(`[err]  ${file}: ${err.message}`);
    }
  }

  console.log(`\nDone. ${touched} files touched.`);
  if (totalBefore > 0) {
    const ratio = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
    console.log(`Total: ${fmtKB(totalBefore)} → ${fmtKB(totalAfter)} (-${ratio}%)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
