import { access, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const indexPath = join(root, "index.html");
const html = await readFile(indexPath, "utf8");

const required = ["./styles.css", "./script.js"];
const missing = [];

for (const asset of required) {
  try {
    await access(join(root, asset));
  } catch {
    missing.push(asset);
  }
}

const externalReferences = html.match(/https?:\/\//g) || [];
const requiredText = [
  "Later Wittgenstein / language games",
  "Night Market for Meaning",
  "No quotations, audio, covers, or third-party images.",
];

const absentText = requiredText.filter((text) => !html.includes(text));

if (missing.length || externalReferences.length || absentText.length) {
  if (missing.length) console.error(`Missing required assets: ${missing.join(", ")}`);
  if (externalReferences.length) console.error("External HTTP references found in index.html.");
  if (absentText.length) console.error(`Missing required theme text: ${absentText.join(", ")}`);
  process.exit(1);
}

console.log("Static site check passed: required assets, theme copy, and no external HTTP references.");
