import re
from pathlib import Path

root = Path(".")
files = list(root.rglob("*.tsx")) + list(root.rglob("*.ts"))
fixed_files = []

for file in files:
    if "node_modules" in str(file):
        continue
    text = file.read_text(encoding="utf-8")
    lines = text.split("\n")
    changed = False

    for i, line in enumerate(lines):
        m = re.match(r'^(\s*)href=', line)
        if not m:
            continue
        indent = m.group(1)
        window = lines[max(0, i - 3):i]
        if any(re.search(r"<a(\s|$)", w) for w in window):
            continue
        if any(re.search(r"<Link(\s|$)", w) for w in window):
            continue
        lines.insert(i, f"{indent}<a")
        changed = True

    if changed:
        file.write_text("\n".join(lines), encoding="utf-8")
        fixed_files.append(str(file))

if fixed_files:
    print("Fixed missing <a> tags in:")
    for f in fixed_files:
        print(" -", f)
else:
    print("No broken anchor tags found.")
