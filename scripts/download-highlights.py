import pathlib
import ssl
import urllib.request

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

IMAGES = {
    "wheel-rush": "https://sites.google.com/sitesv-images-rt/AMxu72tHVSZi8AMKjfwzT1zVB9FnAaXfkY0GENrc_FlWJUQZ673fRXHdzIF6ebimriy8Fm70SA0xkhZFiSDrusIqFSha2o8sh7Sz-Eyj9PKVNOTMG87ZP0fHTHKCSPdQP4mODQdm4L8B0iZqwaYfRKJiIfTYWozsj-onijZ0oqK63ku9Z66KdjP8d5nYcv5m8O8v5K0uB_TtOC49__jtY4tgLzbouyj1keqB1VglT82L=w1280",
    "headlight-restoration": "https://sites.google.com/sitesv-images-rt/AMxu72smtnZ5EFXSDF0zQ2FRV5c9dtw1aBuqm7Erro53w1RK5ef_0S-QNHzHhWUjgs2T3XM_w2Y4Jhqpp7yA75VUtMRvZmdOI-hjnxkXZxi0Q4ZtK6YVuINsrlNZH21nxn8Qd7i_2Dr_Ac3fpb8vRQwk-BmPmIQvzUR5yzD9ApftLYq0IF3odVqDZgszKuXbdSeZqs2WeC-OBb7-9ThR3YqFsBgjDL4hXSyMTZm5fug29HU=w1280",
    "home-theater": "https://sites.google.com/sitesv-images-rt/AMxu72tefcilbJheRjoKsQM8aPNKAk93LLiaOhyYVn7-cuuw8OyV1xe5hQWJ5OdprIi5jnOJFCevkaP3p2H4_YY-gjiEBaKG3_XW4v66er6T1P_byG7W2PnIePYxaTrqvNA4QugGdHEmo9PadhGnKyxsMcRcLt8gKbHLTP2VdMaHKo6-PTZ6L9tJh09rkz2zhI3QudQIGtKF-EBgFk0q19w4l_WLpeHwVdZ_u-ubGxDgwpc=w1280",
    "pressure-washing": "https://sites.google.com/sitesv-images-rt/AMxu72sBsxnNanboECMu90jc_xpY6bqJQgJ0W6Gt_0e4WwkjtIz7yrGXvKCViGwZAUIZLUQ5AcjDIl3JY7HfQNGQi4ouSKKQJLxEP1zaZmi8v08J483jyst3gDTcniuQiYBCgfqTpz6oDAcYtqk8swONzjGfd_yNm50DHcWGllRhsdQktQzLDqrAQ3340q0epQO8dDHyV0KC_JQcx-3JI4FEuDBtt1oupeBqntLDxE5-IPs=w1280",
    "king-fence": "https://sites.google.com/sitesv-images-rt/AMxu72uKSiPbsQ-ZvyKC_bdV9LGNWvrYUvdN4fyRcDEOaTxugT-aWTzWXqQvMs0RU6BfHS1bcwL5uT6-pvDKL-jcgljOAYyzs2aWySDjCBnt6astxgEaXdRk88xGmy2wsRuMb4kXoNgx5ai_0bAStUMXmpK6e9-z93xF0JLLieBxW-WGBryzfC7oXwlXj1VPQ-C3apEuTwxkyYqP_z294hR7rWqmo1pn1-wbdIEjcXa96GA=w1280",
    "freedom-construction": "https://sites.google.com/sitesv-images-rt/AMxu72uOtiq26EEAy2mcjZ4YylmZ590Vfr6MCLhRjdvmIQNe7HgPSyL6hMIuWswQrj_3EIIT9zclwm-zDF367GYbwnlYfn89oHZtE5opSV3rdnzWb1Q4Reqhiu1HkNa1t8-aLiuDkC87XO3sydZwiZVYU8m7gB5KXcbKu-BZPk243G334-bmflssLBsSnHB77O_3GNN6igqi_JCuhokesbGsjbhsxdVGo1YEEzYWUfmWlA4=w1280",
}

out_dir = pathlib.Path(__file__).resolve().parent.parent / "public" / "highlights"
out_dir.mkdir(parents=True, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Referer": "https://sites.google.com/view/talibong-mane/portfolio/website-developed",
}

for name, url in IMAGES.items():
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, context=ctx, timeout=60) as resp:
        data = resp.read()
    path = out_dir / f"{name}.png"
    path.write_bytes(data)
    print(name, len(data), "bytes ->", path)
