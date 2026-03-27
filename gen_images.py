import requests
import base64
import os
import time

API_KEY = "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"
OUTPUT_DIR = "C:/Users/PC/site-web/basstrading/images"
MODEL = "google/gemini-2.5-flash-image"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def generate_image(prompt, filename):
    url = "https://openrouter.ai/api/v1/chat/completions"
    headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}
    payload = {"model": MODEL, "messages": [{"role": "user", "content": f"Generate a high-quality photorealistic image (no text, no watermarks): {prompt}"}]}
    try:
        resp = requests.post(url, headers=headers, json=payload, timeout=120)
        data = resp.json()
        if "choices" in data:
            images = data["choices"][0]["message"].get("images", [])
            if images:
                url_data = images[0].get("image_url", {}).get("url", "")
                if url_data.startswith("data:"):
                    with open(os.path.join(OUTPUT_DIR, filename), "wb") as f:
                        f.write(base64.b64decode(url_data.split(",", 1)[1]))
                    print(f"  OK: {filename}")
                    return True
        print(f"  FAIL: {filename}")
        return False
    except Exception as e:
        print(f"  ERROR {filename}: {e}")
        return False

images = [
    ("Ultra-clean premium trading desk setup with 3 curved monitors showing financial charts and market profile analysis, dark screens with green/blue data, minimalist white desk, soft ambient lighting, Apple-style product photography on white background, extremely clean and premium", "trading-setup.png"),
    ("Close-up of a trading screen showing Market Profile TPO chart with value area highlighted, professional financial data visualization, dark mode interface, clean modern UI, Sierra Chart style, high resolution screenshot look", "market-profile.png"),
    ("Close-up of a trading screen showing footprint chart with volume delta, green and red cells showing buying and selling pressure, dark mode professional trading interface, high resolution", "footprint.png"),
    ("Professional minimalist photo of a confident man in his 30s-40s, dark t-shirt, sitting at a trading desk with multiple screens behind him slightly blurred, warm natural lighting, premium portrait style like Apple executive photo, white/light background", "trader-portrait.png"),
    ("Abstract minimal geometric composition with thin black lines and circles on pure white background, very subtle gold accent, clean modern art style, could be used as a premium brand texture, Apple-inspired minimalism", "abstract-geo.png"),
]

print(f"Generating {len(images)} images...\n")
for i, (prompt, filename) in enumerate(images):
    print(f"[{i+1}/{len(images)}] {filename}")
    if not generate_image(prompt, filename):
        time.sleep(2)
        generate_image(prompt, filename)
    time.sleep(1)

print(f"\nFiles: {os.listdir(OUTPUT_DIR)}")
