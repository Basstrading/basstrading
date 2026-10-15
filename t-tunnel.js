// Pages de tunnels rapatriées de Systeme.io (15/10/2026) : formulaires et paiements rebranchés sur basstrading.fr.
(() => {
  const R = window.BT_TUNNEL || {};
  const COMMANDE = ["offer-form", "upsell", "downsell"].includes(R.type);
  const champs = zone => {
    const c = {};
    zone.querySelectorAll("input, select, textarea").forEach(i => {
      const n = (i.name || i.getAttribute("data-name") || i.type || "").toLowerCase();
      if (!i.value || ["hidden", "submit", "button", "checkbox", "radio", "password"].includes(i.type)) return;
      if (i.type === "email" || n.includes("email")) c.email = i.value.trim();
      else if (/first|prenom|prénom/.test(n)) c.first_name = i.value.trim();
      else if (/surname|last|nom/.test(n)) c.surname = i.value.trim();
      else if (/phone|tel/.test(n)) c.phone_number = i.value.trim();
      else if (n) c[n] = i.value.trim();
    });
    return c;
  };
  const visible = i => !!(i.offsetWidth || i.offsetHeight || i.getClientRects().length);
  const zoneFormulaire = el => {
    for (let z = el, k = 0; z && k < 10; z = z.parentElement, k++) {
      const i = z.querySelector && [...z.querySelectorAll("input[type=email], input[name*=email i]")].find(visible);
      if (i) return z;
    }
    return null;
  };
  const message = (zone, txt, ok) => {
    let m = zone.querySelector(".bt-msg");
    if (!m) { m = document.createElement("div"); m.className = "bt-msg"; m.style.cssText = "margin:10px 0;font:15px sans-serif;text-align:center"; zone.appendChild(m); }
    m.style.color = ok ? "#1f9d55" : "#d64545"; m.textContent = txt;
  };
  let enCours = false;
  const envoyer = async (zone, bouton) => {
    if (enCours) return;
    const c = champs(zone);
    if (!c.email) { message(zone, "Indique ton adresse email.", false); return; }
    enCours = true; if (bouton) bouton.style.opacity = ".6";
    try {
      const r = await fetch(R.api + "/t/formulaire", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({etape: R.etape, champs: c})});
      if (!r.ok) throw await r.json().catch(() => ({}));
      const lien = bouton && bouton.closest("a[href]") && bouton.closest("a[href]").getAttribute("href");
      location.href = lien && lien.startsWith("/t/") || (lien || "").includes("/t/") ? lien : (R.suite || "/");
    } catch (e) { message(zone, (e && e.detail) || "Oups, réessaie dans un instant.", false); enCours = false; if (bouton) bouton.style.opacity = ""; }
  };
  const payer = () => {
    const c = champs(document.body);
    if (R.offre && R.offre.lien) location.href = R.offre.lien + (R.suite ? "&suite=" + encodeURIComponent(R.suite) : "")
      + (c.email ? "&email=" + encodeURIComponent(c.email) : "") + (c.first_name ? "&prenom=" + encodeURIComponent(c.first_name) : "");
    else alert("Le paiement de cette offre se fait désormais en me contactant : contact@basstrading.fr");
  };
  document.addEventListener("click", e => {
    const b = e.target.closest("button, [role=button], input[type=submit], a");
    if (!b || /show-popup|close-popup/.test(b.getAttribute("data-test-id") || "")) return; // ouvrir/fermer une fenêtre : Systeme.io s'en charge
    const href = b.getAttribute && b.getAttribute("href");
    if (b.tagName === "A" && href && !href.startsWith("#") && !href.startsWith("javascript")) return; // vrai lien : on laisse
    if (COMMANDE && b.tagName !== "A") { e.preventDefault(); e.stopImmediatePropagation(); payer(); return; } // bon de commande → notre paiement
    const z = zoneFormulaire(b);
    if (!z) return;
    e.preventDefault(); e.stopImmediatePropagation();
    envoyer(z, b);
  }, true);
  // Bons de commande : le bloc carte bancaire/PayPal de Systeme.io (branché sur leur compte) est remplacé par notre paiement.
  if (COMMANDE) {
    const remplacer = () => {
      const blocs = document.querySelectorAll('[data-test-id^="payment-method"]');
      if (!blocs.length || document.querySelector(".bt-paiement")) return;
      let z = blocs[0].parentElement;
      while (z && [...blocs].some(b => !z.contains(b))) z = z.parentElement;
      if (!z) return;
      z.style.display = "none";
      const n = document.createElement("div"); n.className = "bt-paiement";
      n.style.cssText = "border:1px solid #d9e2ec;border-radius:8px;padding:16px;margin:10px 0;font:15px/1.5 sans-serif;color:#1d2433;background:#f7fafc";
      n.innerHTML = R.offre ? "🔒 <b>Paiement sécurisé par PayPal</b> — carte bancaire acceptée, même sans compte PayPal. Clique sur le bouton ci-dessous pour finaliser."
                            : "Cette offre n'est plus disponible en ligne. Écris-moi à <a href='mailto:contact@basstrading.fr'>contact@basstrading.fr</a>.";
      z.parentElement.insertBefore(n, z);
    };
    const obs = new MutationObserver(remplacer); obs.observe(document.documentElement, {childList: true, subtree: true});
    setTimeout(() => obs.disconnect(), 15000); remplacer();
  }
  document.addEventListener("submit", e => {
    e.preventDefault(); e.stopImmediatePropagation();
    COMMANDE ? payer() : envoyer(e.target, e.target.querySelector("button, input[type=submit]"));
  }, true);
})();
