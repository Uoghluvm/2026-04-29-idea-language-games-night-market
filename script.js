const chapters = [
  {
    mode: "threshold",
    count: "00 / 07",
    title: "准备入场",
    thesis: "先放下“词必须指向某物”的冲动，看它在活动里做什么。",
    accent: "#d8a23c",
  },
  {
    mode: "games",
    count: "01 / 07",
    title: "语言游戏",
    thesis: "语言和行动织在一起；不同活动有不同规则、期待和纠错方式。",
    accent: "#be3f32",
  },
  {
    mode: "use",
    count: "02 / 07",
    title: "意义即使用",
    thesis: "同一个词换一个场景，就换一份工作；理解是会参与用法。",
    accent: "#d8a23c",
  },
  {
    mode: "family",
    count: "03 / 07",
    title: "家族相似性",
    thesis: "概念未必有共同本质；它们常靠交叠、斜接、亲缘式相似连成一族。",
    accent: "#5faf7d",
  },
  {
    mode: "rules",
    count: "04 / 07",
    title: "规则遵循",
    thesis: "规则不会凭空决定每个下一步；公共训练和共同判断让继续成为可能。",
    accent: "#6f8fa3",
  },
  {
    mode: "private",
    count: "05 / 07",
    title: "私人语言批判",
    thesis: "完全私有的符号缺少可校准的正确性标准；这不是否认内心，而是追问判准。",
    accent: "#8f6aa7",
  },
  {
    mode: "forms",
    count: "06 / 07",
    title: "生活形式",
    thesis: "语言住在制度、身体、习惯和场景里；这些地面让一句话可被接住。",
    accent: "#d06e4b",
  },
  {
    mode: "therapy",
    count: "07 / 07",
    title: "哲学治疗",
    thesis: "把词送回日常工作岗位，让被语言迷住的思想松开一点。",
    accent: "#efe7d0",
  },
];

const practices = [
  ["命令", "“把这个递过来”依赖姿势、工具、训练和可见的完成。"],
  ["报告", "“门开了”不是贴标签，而是在共同场景里改变别人的行动。"],
  ["提问", "问题要求可回答的场面，也要求别人知道什么算回答。"],
  ["玩笑", "同一句话若无人共享语气和场合，就不会落地。"],
  ["祈祷", "词在仪式、身体姿态和共同沉默中承担另一种工作。"],
  ["道歉", "不是内心字幕，而是一套修复关系的公共动作。"],
];

const uses = {
  right: [
    ["方向", "出站后靠右走，别挡住换乘的人流。"],
    ["许可", "你有权先不回答，规则在这里保护沉默。"],
    ["正确", "这次量得对，木板终于能合上。"],
    ["让步", "你说得对，窗户昨晚确实没关紧。"],
  ],
  proof: [
    ["票据", "保留付款凭证，直到闸门外的灯变绿。"],
    ["证成", "一张照片还不够，故事必须经得起追问。"],
    ["发酵", "面团在暖处醒着，厨师用手判断它是否好了。"],
    ["校样", "最后一版校样决定今晚能不能开印。"],
  ],
  game: [
    ["比赛", "规则、胜负、犯规和观众一起规定了这局。"],
    ["策略", "牌桌上的游戏不是运气，而是耐心和读人。"],
    ["儿童活动", "孩子突然改规则，大家却仍然知道在玩。"],
    ["语言问题", "概念之间没有单一骨架，却能互相认亲。"],
  ],
};

const familyNodes = [
  ["棋", 48, 45, ["规则", "胜负", "轮流"]],
  ["追逐", 30, 36, ["身体", "胜负", "儿童"]],
  ["赌局", 64, 34, ["规则", "风险", "胜负"]],
  ["独奏练习", 42, 65, ["技巧", "重复", "无观众"]],
  ["文字游戏", 67, 62, ["规则", "玩笑", "语言"]],
  ["仪式游戏", 52, 52, ["重复", "共同场景", "边界"]],
];

const traits = ["规则", "胜负", "轮流", "身体", "风险", "技巧", "重复", "玩笑", "语言", "共同场景"];
const ruleNumbers = [2, 4, 6, 8, 10, 12, 14, 16, "?", "?", "?", "?"];
const diaryMarks = ["S", "S", "S?", "S", "?", "S", "S!"];
const forms = [
  ["厨房", "请求、递物、尝味、纠正盐量"],
  ["诊室", "疼痛报告、检查、用药、公共判准"],
  ["工地", "命令、工具、训练、可见完成"],
  ["牌桌", "规则、诈唬、风险、默认理解"],
  ["课堂", "示范、练习、答错、继续同样做"],
  ["神龛", "祈愿、姿态、沉默、共同仪式"],
  ["地铁", "标识、票据、人流、禁止与许可"],
  ["饭桌", "玩笑、暗示、道歉、家庭记忆"],
];

const root = document.documentElement;
const canvas = document.querySelector("#field");
const ctx = canvas.getContext("2d");
const hudCount = document.querySelector("#hudCount");
const hudTitle = document.querySelector("#hudTitle");
const hudThesis = document.querySelector("#hudThesis");
const globalPercent = document.querySelector("#globalPercent");
const practiceBoard = document.querySelector("#practiceBoard");
const useWord = document.querySelector("#useWord");
const useList = document.querySelector("#useList");
const familyMap = document.querySelector("#familyMap");
const traitLedger = document.querySelector("#traitLedger");
const ruleTrack = document.querySelector("#ruleTrack");
const ruleVerdict = document.querySelector("#ruleVerdict");
const diaryStrip = document.querySelector("#diaryStrip");
const formGrid = document.querySelector("#formGrid");
const sectionEls = Array.from(document.querySelectorAll(".hero, .chapter"));

let width = 0;
let height = 0;
let dpr = 1;
let tick = 0;
let active = chapters[0];
let localProgress = 0;
let points = [];
let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

function populateStaticPanels() {
  practiceBoard.replaceChildren(
    ...practices.map(([title, text]) => {
      const cell = createEl("article", "practice-cell");
      cell.append(createEl("b", "", title), createEl("span", "", text));
      return cell;
    }),
  );

  familyMap.replaceChildren(
    ...familyNodes.map(([name, x, y], index) => {
      const node = createEl("button", `family-node ${index === 0 ? "is-core" : ""}`, name);
      node.type = "button";
      node.style.left = `${x}%`;
      node.style.top = `${y}%`;
      node.style.setProperty("--angle", `${index * 1.07}rad`);
      node.style.setProperty("--dx", "0px");
      node.style.setProperty("--dy", "0px");
      return node;
    }),
  );

  traitLedger.replaceChildren(...traits.map((trait) => createEl("span", "", trait)));

  ruleTrack.replaceChildren(...ruleNumbers.map((number) => createEl("span", "rule-cell", String(number))));
  diaryStrip.replaceChildren(...diaryMarks.map((mark) => createEl("span", "diary-mark", mark)));

  formGrid.replaceChildren(
    ...forms.map(([title, text]) => {
      const tile = createEl("article", "form-tile");
      tile.append(createEl("b", "", title), createEl("span", "", text));
      return tile;
    }),
  );
}

function updateUseList(progress) {
  const words = Object.keys(uses);
  const word = words[Math.min(words.length - 1, Math.floor(progress * words.length))];
  useWord.textContent = word;
  useList.replaceChildren(
    ...uses[word].map(([label, text]) => {
      const item = createEl("li");
      item.append(createEl("small", "", label), createEl("p", "", text));
      return item;
    }),
  );
}

function updateChapterUI(chapter, progress) {
  hudCount.textContent = chapter.count;
  hudTitle.textContent = chapter.title;
  hudThesis.textContent = chapter.thesis;
  root.style.setProperty("--accent", chapter.accent);
  root.style.setProperty("--chapter-progress", String(progress));

  const hotIndex = Math.min(practices.length - 1, Math.floor(progress * practices.length));
  document.querySelectorAll(".practice-cell").forEach((cell, index) => {
    cell.classList.toggle("is-hot", active.mode === "games" && index <= hotIndex);
  });

  updateUseList(active.mode === "use" ? progress : 0);

  const spread = active.mode === "family" ? 12 + progress * 92 : 0;
  document.querySelectorAll(".family-node").forEach((node) => {
    const angle = Number.parseFloat(node.style.getPropertyValue("--angle")) || 0;
    node.style.setProperty("--dx", `${Math.cos(angle) * spread}px`);
    node.style.setProperty("--dy", `${Math.sin(angle) * spread}px`);
  });
  document.querySelectorAll(".trait-ledger span").forEach((trait, index) => {
    trait.classList.toggle("is-lit", active.mode === "family" && index / traits.length < progress);
  });

  const ruleIndex = Math.floor(progress * ruleNumbers.length);
  document.querySelectorAll(".rule-cell").forEach((cell, index) => {
    cell.classList.toggle("is-active", active.mode === "rules" && index <= ruleIndex);
  });
  ruleVerdict.textContent =
    progress < 0.68 ? "继续：2, 4, 6, 8..." : "分叉：解释太多，实践把它拉回同一条路";

  document.querySelectorAll(".diary-mark").forEach((mark, index) => {
    mark.classList.toggle("is-public", active.mode === "private" && index / diaryMarks.length < progress);
  });
}

function findActiveChapter() {
  const anchor = window.innerHeight * 0.48;
  let chosen = sectionEls[0];
  let smallestDistance = Number.POSITIVE_INFINITY;

  for (const section of sectionEls) {
    const rect = section.getBoundingClientRect();
    const middle = rect.top + rect.height * 0.5;
    const distance = Math.abs(middle - anchor);
    if (rect.top < window.innerHeight * 0.82 && rect.bottom > window.innerHeight * 0.18 && distance < smallestDistance) {
      chosen = section;
      smallestDistance = distance;
    }
  }

  const mode = chosen.dataset.mode || chosen.dataset.scene || "threshold";
  const chapter = chapters.find((item) => item.mode === mode) || chapters[0];
  const rect = chosen.getBoundingClientRect();
  const progress = clamp((window.innerHeight * 0.68 - rect.top) / Math.max(1, rect.height - window.innerHeight * 0.24));
  return { chapter, progress };
}

function updateScrollState() {
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const global = clamp(window.scrollY / maxScroll);
  const percent = Math.round(global * 100);
  const { chapter, progress } = findActiveChapter();

  active = chapter;
  localProgress = progress;
  root.style.setProperty("--progress-width", `${global * 100}%`);
  root.style.setProperty("--grid-shift", `${global * -60}px`);
  root.style.setProperty("--orbit-rotation", `${global * 180}deg`);
  globalPercent.textContent = `${percent}%`;
  updateChapterUI(chapter, progress);
}

function resizeCanvas() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  points = Array.from({ length: Math.max(80, Math.floor((width * height) / 12000)) }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    phase: Math.random() * Math.PI * 2,
    speed: 0.2 + Math.random() * 0.7,
  }));
}

function clearField() {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#050606");
  gradient.addColorStop(0.56, "#0b0e0d");
  gradient.addColorStop(1, "#050606");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.globalAlpha = 0.16;
  ctx.fillStyle = active.accent;
  ctx.beginPath();
  ctx.arc(width * (0.22 + localProgress * 0.48), height * 0.34, Math.min(width, height) * 0.32, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
}

function drawDust() {
  ctx.save();
  for (const point of points) {
    const x = point.x + Math.sin(tick * 0.012 * point.speed + point.phase) * 18;
    const y = point.y + Math.cos(tick * 0.01 * point.speed + point.phase) * 18;
    ctx.globalAlpha = 0.12 + Math.sin(point.phase + tick * 0.02) * 0.04;
    ctx.fillStyle = active.accent;
    ctx.fillRect(x, y, 1.4, 1.4);
  }
  ctx.restore();
}

function drawLabel(text, x, y, size = 14, color = "rgba(239,231,208,0.72)") {
  ctx.font = `800 ${size}px "Noto Sans SC", system-ui, sans-serif`;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

function drawGames() {
  const verbs = ["命令", "报告", "提问", "玩笑", "祈祷", "道歉"];
  const cx = width * 0.5;
  const cy = height * 0.52;
  const radius = Math.min(width, height) * (0.18 + localProgress * 0.12);
  ctx.strokeStyle = "rgba(239,231,208,0.16)";
  ctx.lineWidth = 1;
  verbs.forEach((verb, index) => {
    const angle = index / verbs.length * Math.PI * 2 + tick * 0.003;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillStyle = index / verbs.length < localProgress ? active.accent : "rgba(239,231,208,0.56)";
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();
    drawLabel(verb, x - 15, y + 5, 13, "#050606");
  });
  drawLabel("language + activity", cx - 78, cy + 5, 16, "rgba(239,231,208,0.8)");
}

function drawUse() {
  const lanes = ["许可", "方向", "正确", "让步", "证据", "校样"];
  const top = height * 0.18;
  const gap = height * 0.1;
  lanes.forEach((lane, index) => {
    const y = top + index * gap;
    ctx.strokeStyle = index / lanes.length < localProgress ? active.accent : "rgba(239,231,208,0.14)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.15, y);
    ctx.bezierCurveTo(width * 0.34, y - 30, width * 0.62, y + 30, width * 0.86, y);
    ctx.stroke();
    drawLabel(lane, width * (0.18 + localProgress * 0.56), y - 9, 13);
  });
  drawLabel("right / proof / game", width * 0.38, height * 0.52, 34, active.accent);
}

function drawFamily() {
  const cx = width * 0.5;
  const cy = height * 0.52;
  const names = familyNodes.map(([name]) => name);
  names.forEach((name, index) => {
    const angle = index / names.length * Math.PI * 2 + localProgress * 1.5;
    const radius = Math.min(width, height) * (0.12 + (index % 3) * 0.055 + localProgress * 0.14);
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    ctx.strokeStyle = "rgba(239,231,208,0.13)";
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillStyle = index / names.length < localProgress ? active.accent : "rgba(239,231,208,0.56)";
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
    drawLabel(name, x - 18, y + 5, 12, "#050606");
  });
  ctx.strokeStyle = active.accent;
  ctx.globalAlpha = 0.35;
  ctx.beginPath();
  ctx.ellipse(cx, cy, Math.min(width, height) * 0.22, Math.min(width, height) * 0.12, localProgress, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;
}

function drawRules() {
  const startX = width * 0.15;
  const y = height * 0.52;
  const step = width * 0.065;
  ctx.strokeStyle = "rgba(239,231,208,0.18)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(startX, y);
  for (let i = 1; i < 12; i += 1) {
    ctx.lineTo(startX + i * step, y + Math.sin(i * 0.8) * 18);
  }
  ctx.stroke();

  const limit = Math.floor(localProgress * 12);
  for (let i = 0; i < 12; i += 1) {
    const x = startX + i * step;
    const py = y + Math.sin(i * 0.8) * 18;
    ctx.fillStyle = i <= limit ? active.accent : "rgba(239,231,208,0.42)";
    ctx.beginPath();
    ctx.arc(x, py, 10, 0, Math.PI * 2);
    ctx.fill();
    drawLabel(String(i < 8 ? 2 + i * 2 : "?"), x - 6, py - 18, 12);
  }
  drawLabel("same? interpreted? trained?", width * 0.34, height * 0.36, 20, active.accent);
}

function drawPrivate() {
  const marks = ["S", "S", "S?", "S", "?", "S", "S!"];
  marks.forEach((mark, index) => {
    const x = width * (0.18 + index * 0.1);
    const y = height * (0.45 + Math.sin(index + tick * 0.02) * 0.06);
    ctx.strokeStyle = index / marks.length < localProgress ? active.accent : "rgba(239,231,208,0.16)";
    ctx.strokeRect(x - 22, y - 28, 44, 56);
    drawLabel(mark, x - 9, y + 6, 18, index / marks.length < localProgress ? active.accent : "rgba(239,231,208,0.62)");
  });
  if (localProgress > 0.45) {
    ctx.strokeStyle = active.accent;
    ctx.globalAlpha = (localProgress - 0.45) * 0.9;
    ctx.beginPath();
    ctx.moveTo(width * 0.22, height * 0.68);
    ctx.lineTo(width * 0.78, height * 0.68);
    ctx.stroke();
    drawLabel("public criteria enter", width * 0.39, height * 0.72, 16, active.accent);
    ctx.globalAlpha = 1;
  }
}

function drawForms() {
  const cols = 8;
  const rows = 5;
  const cellW = width / cols;
  const cellH = height / rows;
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      const lit = (x + y * cols) / (cols * rows) < localProgress;
      ctx.strokeStyle = "rgba(239,231,208,0.09)";
      ctx.strokeRect(x * cellW, y * cellH, cellW, cellH);
      if (lit) {
        ctx.fillStyle = active.accent;
        ctx.globalAlpha = 0.16 + ((x + y) % 3) * 0.06;
        ctx.fillRect(x * cellW + 4, y * cellH + 4, cellW - 8, cellH - 8);
        ctx.globalAlpha = 1;
      }
    }
  }
  drawLabel("kitchen / clinic / shrine / metro / classroom", width * 0.26, height * 0.5, 22, active.accent);
}

function drawTherapy() {
  const cx = width * 0.5;
  const cy = height * 0.5;
  for (let i = 0; i < 8; i += 1) {
    const r = Math.min(width, height) * (0.08 + i * 0.028 + localProgress * 0.02);
    ctx.strokeStyle = i % 2 ? "rgba(239,231,208,0.16)" : active.accent;
    ctx.globalAlpha = 0.28 + localProgress * 0.42;
    ctx.beginPath();
    ctx.arc(cx, cy, r, i * 0.2 + tick * 0.004, Math.PI * 1.35 + localProgress * Math.PI + i * 0.2);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  drawLabel("return words to use", width * 0.37, height * 0.51, 24, "rgba(239,231,208,0.86)");
}

function drawThreshold() {
  const text = ["name", "ask", "count", "joke", "pray", "repair"];
  text.forEach((item, index) => {
    const x = width * (0.16 + index * 0.12);
    const y = height * (0.45 + Math.sin(tick * 0.015 + index) * 0.09);
    ctx.strokeStyle = "rgba(239,231,208,0.16)";
    ctx.strokeRect(x - 34, y - 24, 68, 48);
    drawLabel(item, x - 22, y + 5, 13, index / text.length < localProgress ? active.accent : "rgba(239,231,208,0.62)");
  });
}

function drawScene() {
  clearField();
  drawDust();
  if (active.mode === "games") drawGames();
  else if (active.mode === "use") drawUse();
  else if (active.mode === "family") drawFamily();
  else if (active.mode === "rules") drawRules();
  else if (active.mode === "private") drawPrivate();
  else if (active.mode === "forms") drawForms();
  else if (active.mode === "therapy") drawTherapy();
  else drawThreshold();
}

function animate() {
  tick += reducedMotion ? 0.1 : 1;
  drawScene();
  requestAnimationFrame(animate);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  },
  { threshold: 0.24 },
);

sectionEls.forEach((section) => observer.observe(section));
window.addEventListener("resize", resizeCanvas);
window.addEventListener("scroll", updateScrollState, { passive: true });

populateStaticPanels();
resizeCanvas();
updateScrollState();
animate();
