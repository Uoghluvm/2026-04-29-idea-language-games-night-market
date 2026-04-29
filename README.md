# 语言在使用中

Live site:
https://uoghluvm.github.io/2026-04-29-idea-language-games-night-market/

一个围绕**后期维特根斯坦**的滚动式静态网站，主题集中在《哲学研究》之后最重要的一组概念：语言游戏、意义即使用、家族相似性、规则遵循、私人语言批判、生活形式，以及哲学作为治疗。

## Concept

这次不是做“哲学氛围”，而是把页面当成一个可滚动的概念机器：

- 语言游戏：词语和行动、场景、训练、期待、纠错织在一起。
- 意义即使用：同一个词在不同语言游戏里承担不同工作。
- 家族相似性：概念不一定靠共同本质成立，而可能靠交叠的亲缘关系。
- 规则遵循：规则本身不会自动决定每个下一步，公共实践让“继续同样做”可被判断。
- 私人语言批判：完全私有的符号缺少可校准的正确性标准。
- 生活形式：语言扎根在制度、身体、习惯、仪式和日常场景中。

视觉方向从纯黑夜景改成深绿黑板、纸张纹理、手稿编号、课堂图示和低光城市标识的混合画面。滚动会改变背景画布、HUD、家族相似网络、规则轨道、日记符号和生活形式网格；首屏右侧也有可点击的“经典例子实验台”。

## Classic Examples Used

页面使用以下《哲学研究》经典例子做原创改写和交互化处理，并在界面里标注出处：

- §1：五个红苹果/购物纸条例子，用来拆开“词语只是名称”的图像。
- §2：建筑工人语言游戏，展示词语如何作为动作提示运作。
- §23：语言游戏清单，展示命令、报告、提问、玩笑、祈祷、道歉等不同活动。
- §§65–71：游戏与家族相似性。
- §185：+2 规则遵循例子。
- §258：私人感觉日记 “S”。
- §293：甲虫盒子。

这些不是原文长引，而是标注章节来源的原创解释、微文案和动态图示。

## Tech Notes

- Static HTML, CSS, and vanilla JavaScript.
- Full-window Canvas scene engine tied to scroll progress.
- IntersectionObserver-driven section reveals.
- Clickable hero apparatus for Wittgenstein's classic examples, plus generated DOM panels for language games, use cases, family resemblance traits, rule-following sequence, private-language diary marks, and forms of life.
- No framework, CDN, web font, external image, audio, quote, or runtime network request.

## Run

Open `index.html` directly, or run:

```bash
npm start
```

Then visit `http://127.0.0.1:4173/`.

## Checks

```bash
npm run check
```

The check parses JavaScript and verifies that the page contains the core Wittgenstein concepts, local assets, copyright guardrails, and no external HTTP references.

## Sources Used For Conceptual Orientation

- Stanford Encyclopedia of Philosophy, "Ludwig Wittgenstein": https://plato.stanford.edu/entries/wittgenstein/
- Encyclopaedia Britannica, "The later Wittgenstein": https://www.britannica.com/topic/philosophy-of-language/The-later-Wittgenstein

These sources informed the conceptual map. The website text is original paraphrase and interpretation, not quoted source text.

## Licensing Notes

MIT License for original code, procedural visuals, and original explanatory microcopy.

No quotations from Wittgenstein, no copyrighted book pages, no audio, no cover art, no film stills, and no third-party images are included.
