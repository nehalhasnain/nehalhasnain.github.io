import re
with open("index.html", "r") as f:
    html = f.read()

# Remove the window.addEventListener('error' block using regex
html = re.sub(r"// Error sink persists across replaceWith since it's on window, not the DOM\.\n\s*window\.addEventListener\('error'.*?}, true\);\n", "", html, flags=re.DOTALL)

with open("index.html", "w") as f:
    f.write(html)
print("Regex replace done!")
