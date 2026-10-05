import re
import ssl
import urllib.request
from urllib.parse import unquote

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

html = urllib.request.urlopen(
    "https://sites.google.com/view/talibong-mane/portfolio/website-developed",
    context=ctx,
    timeout=30,
).read().decode("utf-8", errors="ignore")

# Google Sites: decode redirect links
links = re.findall(r'href="https://www\.google\.com/url\?q=([^&"]+)', html)
links = [unquote(u) for u in links]

# Find image srcs from sites CDN
images = re.findall(r'src="(https://sites\.google\.com/sitesv-images[^"]+)"', html)
images += re.findall(r'src="(/images/[^"]+)"', html)

titles = [
    "Wheel Rush",
    "Headlight Restoration",
    "Texas Elegant",
    "Clear Cut",
    "Construction",
    "Pressure Washing",
    "Home Theater",
    "King OF Fence",
]

for t in titles:
    idx = html.find(t)
    snippet = html[idx : idx + 2500] if idx >= 0 else ""
    local_links = [
        unquote(m.group(1))
        for m in re.finditer(r'href="https://www\.google\.com/url\?q=([^&"]+)', snippet)
    ]
    local_imgs = re.findall(r'src="(https://[^"]+)"', snippet[:2000])
    print("===", t, "===")
    print("links:", local_links[:2])
    print("imgs:", [i for i in local_imgs if "sites" in i or "googleusercontent" in i][:2])

print("\nall links count", len(links))
for u in links:
    print(u)
