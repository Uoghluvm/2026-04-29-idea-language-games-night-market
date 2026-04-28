const contexts = [
  {
    id: "canteen",
    label: "canteen",
    scene: "late counter, steam, coins, repeated orders",
    color: "#d9a441",
    rule: "shared appetite",
  },
  {
    id: "metro",
    label: "metro gate",
    scene: "last train signage, ticket glass, platform echo",
    color: "#617c8a",
    rule: "public timing",
  },
  {
    id: "family",
    label: "family table",
    scene: "old joke, new silence, someone passing salt",
    color: "#b83a2e",
    rule: "domestic repair",
  },
  {
    id: "workshop",
    label: "workshop",
    scene: "chalk marks, cable dust, a foreman watching",
    color: "#5fae83",
    rule: "trained handling",
  },
  {
    id: "court",
    label: "courtroom",
    scene: "fluorescent oath, folders, official listening",
    color: "#efe7d0",
    rule: "institutional weight",
  },
  {
    id: "clinic",
    label: "clinic",
    scene: "plastic chairs, pulse screen, careful tone",
    color: "#d67b54",
    rule: "bodily evidence",
  },
  {
    id: "cardroom",
    label: "card room",
    scene: "green felt, cigarette memory, small debts",
    color: "#78a86a",
    rule: "risk and turn",
  },
  {
    id: "stage",
    label: "stage door",
    scene: "red bulb, loose powder, trumpet case",
    color: "#c7473b",
    rule: "performance cue",
  },
];

const words = [
  {
    id: "light",
    label: "light",
    uses: {
      canteen: ["The noodles are light tonight.", "judgment of weight, salt, mercy"],
      metro: ["The light over the gate means the card took.", "signal accepted by strangers"],
      family: ["Keep it light before she arrives.", "mood management"],
      workshop: ["Bring me the light from the north bench.", "tool requested by place"],
      court: ["That puts the testimony in a different light.", "reframing what counts"],
      clinic: ["Any light hurts the left eye.", "symptom located in the body"],
      cardroom: ["He plays light until the river card.", "risk posture"],
      stage: ["Hit her with the red light on bar four.", "technical cue"],
    },
  },
  {
    id: "charge",
    label: "charge",
    uses: {
      canteen: ["Put the extra tea on my charge.", "account kept by trust"],
      metro: ["My phone has no charge for the ticket code.", "stored power"],
      family: ["You are in charge of the rice.", "temporary authority"],
      workshop: ["Charge the drill before dawn shift.", "prepare a tool"],
      court: ["The charge changes the whole room.", "accusation with force"],
      clinic: ["There is no charge for the follow-up.", "fee removed"],
      cardroom: ["He made one foolish charge at the pot.", "aggressive move"],
      stage: ["The singer enters on a charged silence.", "felt pressure"],
    },
  },
  {
    id: "right",
    label: "right",
    uses: {
      canteen: ["Right, two buns and black vinegar.", "receipt of an order"],
      metro: ["Stay right after the turnstile.", "direction in a crowd"],
      family: ["You were right about the window.", "small concession"],
      workshop: ["The right bracket, not the bright bracket.", "correct object among near twins"],
      court: ["She has the right to answer later.", "protected permission"],
      clinic: ["Raise your right hand if it tingles.", "side of the body"],
      cardroom: ["The right play is to fold.", "strategic fit"],
      stage: ["Enter from right, cross behind the chair.", "blocking position"],
    },
  },
  {
    id: "bank",
    label: "bank",
    uses: {
      canteen: ["The owner banks every favor in a red notebook.", "social credit stored"],
      metro: ["Meet me by the bank of lockers.", "row used as landmark"],
      family: ["Do not bank on his apology.", "expectation doubted"],
      workshop: ["Bank the coals before closing the furnace.", "controlled heat"],
      court: ["The bank statement contradicts the story.", "financial institution as evidence"],
      clinic: ["The blood bank called back after midnight.", "medical storehouse"],
      cardroom: ["She broke the bank with one quiet hand.", "house money defeated"],
      stage: ["Bank the spot so it slides across the curtain.", "angle a beam"],
    },
  },
  {
    id: "game",
    label: "game",
    uses: {
      canteen: ["The lunch game is knowing who orders first.", "local custom"],
      metro: ["The fare game changes after the last train.", "system to navigate"],
      family: ["That game again, where nobody says the name.", "ritualized avoidance"],
      workshop: ["There is play in the joint; the game is too wide.", "mechanical looseness"],
      court: ["The counsel sees the game and refuses it.", "tactic exposed"],
      clinic: ["Memory games after the concussion.", "test with rules"],
      cardroom: ["This game turns on patience, not luck.", "formal contest"],
      stage: ["The game is to look ruined and stay exact.", "performer's rule"],
    },
  },
  {
    id: "cold",
    label: "cold",
    uses: {
      canteen: ["Cold sesame noodles, no chili.", "temperature and order"],
      metro: ["The last platform is cold even in July.", "place remembered by the body"],
      family: ["He went cold when the wedding came up.", "emotional withdrawal"],
      workshop: ["Cold solder will betray you later.", "fault in craft"],
      court: ["A cold record, no motive on the page.", "evidence without warmth"],
      clinic: ["Cold fingers, normal pulse.", "symptom weighed against sign"],
      cardroom: ["She called cold, without looking pleased.", "nerve performed"],
      stage: ["Cold open, no overture.", "beginning without preface"],
    },
  },
  {
    id: "proof",
    label: "proof",
    uses: {
      canteen: ["The empty bowls are proof enough.", "visible ending"],
      metro: ["Keep proof of payment until you exit.", "portable right"],
      family: ["She wants proof he listened.", "care made verifiable"],
      workshop: ["Proof the yeast near the warm pipe.", "make dough rise"],
      court: ["Proof must survive the other story.", "standard of judgment"],
      clinic: ["The scan is not proof by itself.", "evidence inside practice"],
      cardroom: ["No proof, just the way he touched his chips.", "pattern read by players"],
      stage: ["Final proof before posters go to print.", "corrected copy"],
    },
  },
  {
    id: "sorry",
    label: "sorry",
    uses: {
      canteen: ["Sorry, only soup left.", "softened refusal"],
      metro: ["Sorry, this gate is exit only.", "institutional apology"],
      family: ["Sorry means you stay for tea.", "repair with obligations"],
      workshop: ["Sorry, I stripped the screw.", "error owned in practice"],
      court: ["Sorry is not the same as liable.", "emotion separated from status"],
      clinic: ["Sorry, this may sting.", "warning with care"],
      cardroom: ["Sorry, I have to call.", "courtesy before pressure"],
      stage: ["Sorry, from the top.", "reset cue"],
    },
  },
  {
    id: "square",
    label: "square",
    uses: {
      canteen: ["Square up after closing.", "settle the bill"],
      metro: ["Wait in the yellow square.", "painted instruction"],
      family: ["He is square with your aunt now.", "relationship repaired"],
      workshop: ["Make the cabinet square before glue.", "geometric accuracy"],
      court: ["His story will not square with the camera.", "fit tested"],
      clinic: ["Take one square from the blister pack.", "unit of medicine"],
      cardroom: ["Square player, no bluff in him.", "temperament judged"],
      stage: ["Stand square to the house.", "body angled to audience"],
    },
  },
];

const familyTiles = [
  ["game", "cards, children, tactics, rituals, little jokes, serious rules"],
  ["light", "lamp, easy soup, moral angle, stage cue, pain in the eye"],
  ["right", "hand, entitlement, accuracy, traffic side, reluctant agreement"],
  ["proof", "receipt, scan, dough, legal burden, the bowl left empty"],
  ["sorry", "warning, reset, apology, refusal, repair work"],
];

const state = {
  context: contexts[1],
  word: words[0],
  pulse: 0.8,
  pointer: { x: 0.5, y: 0.5 },
};

const contextRail = document.querySelector("#contextRail");
const wordDeck = document.querySelector("#wordDeck");
const dispatchList = document.querySelector("#dispatchList");
const familyGrid = document.querySelector("#familyGrid");
const wordTitle = document.querySelector("#wordTitle");
const utterance = document.querySelector("#utterance");
const sceneValue = document.querySelector("#sceneValue");
const workValue = document.querySelector("#workValue");
const ruleValue = document.querySelector("#ruleValue");
const shuffleButton = document.querySelector("#shuffleButton");
const meters = Array.from(document.querySelectorAll(".meter"));
const canvas = document.querySelector("#signalCanvas");
const ctx = canvas.getContext("2d");

let width = 0;
let height = 0;
let dpr = 1;
let nodes = [];
let routes = [];
let tick = 0;

function makeButton(label, className, isActive, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  button.setAttribute("aria-pressed", String(isActive));
  if (isActive) button.classList.add("is-active");
  button.addEventListener("click", onClick);
  return button;
}

function renderControls() {
  contextRail.replaceChildren(
    ...contexts.map((context) =>
      makeButton(context.label, "context-button", context.id === state.context.id, () => {
        state.context = context;
        state.pulse = 1;
        update();
      }),
    ),
  );

  wordDeck.replaceChildren(
    ...words.map((word) =>
      makeButton(word.label, "word-button", word.id === state.word.id, () => {
        state.word = word;
        state.pulse = 1;
        update();
      }),
    ),
  );
}

function renderDispatch() {
  const start = words.findIndex((word) => word.id === state.word.id);
  const items = [0, 1, 2, 3].map((offset) => {
    const word = words[(start + offset) % words.length];
    const context = contexts[(contexts.indexOf(state.context) + offset) % contexts.length];
    const [line, work] = word.uses[context.id];
    return { word, context, line, work };
  });

  dispatchList.replaceChildren(
    ...items.map((item) => {
      const li = document.createElement("li");
      li.className = "dispatch-card";
      li.style.setProperty("--card-color", item.context.color);
      li.innerHTML = `<h3>${item.word.label} / ${item.context.label}</h3><p>${item.line}</p><p>${item.work}</p>`;
      return li;
    }),
  );
}

function renderFamily() {
  familyGrid.replaceChildren(
    ...familyTiles.map(([word, detail], index) => {
      const tile = document.createElement("article");
      tile.className = "family-tile";
      tile.style.setProperty("--tile-color", contexts[index + 1]?.color || "#d9a441");
      tile.innerHTML = `<b>${word}</b><span>${detail}</span>`;
      return tile;
    }),
  );
}

function hashParts(...parts) {
  return parts.join("").split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function updateMeters() {
  const base = hashParts(state.word.id, state.context.id);
  meters.forEach((meter, index) => {
    const value = 24 + ((Math.sin(base * (index + 2) * 0.017) + 1) * 32 + index * 11) % 62;
    meter.style.setProperty("--level", `${Math.round(value)}%`);
  });
}

function update() {
  renderControls();
  renderDispatch();
  const [line, work] = state.word.uses[state.context.id];
  wordTitle.textContent = state.word.label;
  utterance.textContent = line;
  sceneValue.textContent = state.context.scene;
  workValue.textContent = work;
  ruleValue.textContent = state.context.rule;
  updateMeters();
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
  createSignalField();
}

function createSignalField() {
  const nodeCount = Math.max(48, Math.min(110, Math.floor((width * height) / 14500)));
  nodes = Array.from({ length: nodeCount }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    baseX: Math.random() * width,
    baseY: Math.random() * height,
    size: 0.8 + Math.random() * 2.2,
    speed: 0.16 + Math.random() * 0.42,
    phase: Math.random() * Math.PI * 2,
    layer: index % 3,
  }));

  routes = Array.from({ length: 12 }, (_, index) => {
    const y = (height / 13) * (index + 1);
    const bend = (Math.random() - 0.5) * height * 0.18;
    return {
      y,
      bend,
      speed: 0.002 + Math.random() * 0.003,
      offset: Math.random(),
    };
  });
}

function drawBackground() {
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#050605");
  gradient.addColorStop(0.44, "#10130f");
  gradient.addColorStop(1, "#070807");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.globalAlpha = 0.12;
  ctx.fillStyle = state.context.color;
  ctx.beginPath();
  ctx.arc(width * state.pointer.x, height * state.pointer.y, Math.min(width, height) * 0.34, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
}

function drawRoutes() {
  ctx.lineWidth = 1;
  routes.forEach((route, index) => {
    const alpha = 0.08 + (index % 3) * 0.035;
    ctx.strokeStyle = `rgba(239, 231, 208, ${alpha})`;
    ctx.beginPath();
    ctx.moveTo(-20, route.y);
    ctx.bezierCurveTo(width * 0.24, route.y + route.bend, width * 0.66, route.y - route.bend, width + 20, route.y);
    ctx.stroke();

    const progress = (tick * route.speed + route.offset) % 1;
    const px = width * progress;
    const py = route.y + Math.sin(progress * Math.PI * 2) * route.bend * 0.36;
    ctx.fillStyle = index % 2 === 0 ? state.context.color : "#d9a441";
    ctx.globalAlpha = 0.55;
    ctx.beginPath();
    ctx.arc(px, py, 2.2 + state.pulse * 2.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  });
}

function drawNodes() {
  for (const node of nodes) {
    const drift = tick * node.speed * 0.018 + node.phase;
    node.x = node.baseX + Math.sin(drift) * (18 + node.layer * 12);
    node.y = node.baseY + Math.cos(drift * 0.82) * (14 + node.layer * 10);

    const dx = node.x - width * state.pointer.x;
    const dy = node.y - height * state.pointer.y;
    const distance = Math.hypot(dx, dy);
    const glow = Math.max(0, 1 - distance / 260);
    ctx.fillStyle = glow > 0.05 ? state.context.color : "rgba(239, 231, 208, 0.42)";
    ctx.globalAlpha = 0.22 + glow * 0.68;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.size + glow * 2 + state.pulse, 0, Math.PI * 2);
    ctx.fill();

    if (glow > 0.34) {
      ctx.globalAlpha = glow * 0.2;
      ctx.strokeStyle = state.context.color;
      ctx.beginPath();
      ctx.moveTo(node.x, node.y);
      ctx.lineTo(width * state.pointer.x, height * state.pointer.y);
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;
}

function drawTicker() {
  ctx.save();
  ctx.translate(width - Math.min(width * 0.16, 190), height * 0.5);
  ctx.rotate(Math.PI / 2);
  ctx.font = "700 12px ui-sans-serif, system-ui, sans-serif";
  ctx.fillStyle = "rgba(239, 231, 208, 0.34)";
  ctx.textAlign = "center";
  ctx.fillText(`${state.word.label} / ${state.context.label} / use ${Math.floor(tick % 1000)}`, 0, 0);
  ctx.restore();
}

function animate() {
  tick += 1;
  state.pulse *= 0.94;
  drawBackground();
  drawRoutes();
  drawNodes();
  drawTicker();
  requestAnimationFrame(animate);
}

window.addEventListener("resize", resizeCanvas);
window.addEventListener("pointermove", (event) => {
  state.pointer.x = event.clientX / window.innerWidth;
  state.pointer.y = event.clientY / window.innerHeight;
});

shuffleButton.addEventListener("click", () => {
  const nextWordIndex = (words.indexOf(state.word) + 2 + Math.floor(Math.random() * 5)) % words.length;
  const nextContextIndex = (contexts.indexOf(state.context) + 1 + Math.floor(Math.random() * 4)) % contexts.length;
  state.word = words[nextWordIndex];
  state.context = contexts[nextContextIndex];
  state.pulse = 1;
  update();
});

renderFamily();
update();
resizeCanvas();
animate();
