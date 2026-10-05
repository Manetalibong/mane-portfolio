import json
import re
import ssl
import urllib.request
from urllib.parse import unquote

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

PAGE = "https://sites.google.com/view/talibong-mane/portfolio/website-developed"

html = urllib.request.urlopen(PAGE, context=ctx, timeout=30).read().decode("utf-8", errors="ignore")
urls = sorted(
    set(
        unquote(m.group(1))
        for m in re.finditer(r'href="https://www\.google\.com/url\?q=([^&"]+)', html)
    )
)


def check(url: str):
    url = url.rstrip("/")
    headers = {"User-Agent": "Mozilla/5.0"}
    for method in ("HEAD", "GET"):
        try:
            req = urllib.request.Request(url, method=method, headers=headers)
            with urllib.request.urlopen(req, context=ctx, timeout=20) as r:
                return True, r.status, r.geturl()
        except Exception as e:
            last = str(e)
    return False, None, last[:120]


results = []
for u in urls:
    ok, status, info = check(u)
    results.append({"url": u, "ok": ok, "status": status, "final": info})
    print(("OK" if ok else "FAIL"), status, u)

out = __file__.replace("verify-live-urls.py", "verified-urls.json")
with open(out, "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)
print("wrote", out, "count", len(results))
