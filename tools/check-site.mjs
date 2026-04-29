import { access, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const indexPath = join(root, "index.html");
const html = await readFile(indexPath, "utf8");

const requiredAssets = ["./styles.css", "./script.js"];
const missingAssets = [];

for (const asset of requiredAssets) {
  try {
    await access(join(root, asset));
  } catch {
    missingAssets.push(asset);
  }
}

const externalReferences = html.match(/https?:\/\//g) || [];
const requiredText = [
  "后期维特根斯坦",
  "语言游戏",
  "家族相似性",
  "规则遵循",
  "私人语言",
  "《哲学研究》§2",
  "《哲学研究》§258",
  "《哲学研究》§293",
  "不含书页引文、影像、音频或第三方图片",
];

const absentText = requiredText.filter((text) => !html.includes(text));

if (missingAssets.length || externalReferences.length || absentText.length) {
  if (missingAssets.length) console.error(`Missing required assets: ${missingAssets.join(", ")}`);
  if (externalReferences.length) console.error("External HTTP references found in index.html.");
  if (absentText.length) console.error(`Missing required concept text: ${absentText.join(", ")}`);
  process.exit(1);
}

console.log("Static site check passed: assets, Wittgenstein concepts, copyright guardrails, and no external HTTP references.");
