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
    new_lines = []
    changed = False

    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped == "<a" and new_lines:
            prev = new_lines[-1].strip()
            if prev == "<Link" or prev.endswith("<Link"):
                changed = True
                continue
        new_lines.append(line)

    if changed:
        file.write_text("\n".join(new_lines), encoding="utf-8")
        fixed_files.append(str(file))

if fixed_files:
    print("Removed bad <a> insertions from:")
    for f in fixed_files:
        print(" -", f)
else:
    print("No bad insertions found.")
