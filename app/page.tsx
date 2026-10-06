import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  Github,
  LockKeyhole,
  MonitorUp,
  MousePointer2,
  Play,
  ScanText,
  Sparkles,
  TimerReset,
  Video,
} from "lucide-react";

const defaultDownloadUrl = "https://zhuageping.aeback.com/windows/v0.1.22/zhuageping-Setup-0.1.22-x64.exe";
const downloadUrl = process.env.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL ?? defaultDownloadUrl;

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Zhuageping home">
      <Image src="/logo.png" alt="Zhuageping logo" width={34} height={34} priority />
      <span>抓个屏</span>
    </a>
  );
}

export default function Home({ initialLocale = "zh" }: { initialLocale?: "en" | "zh" }) {
  const zh = initialLocale === "zh";

  return (
    <main id="top">
      <nav className="nav shell">
        <Logo />
        <div className="nav-links">
          <a href="#features">{zh ? "功能" : "Features"}</a>
          <a href="#workflow">{zh ? "使用方式" : "How it works"}</a>
          <a href="#privacy">{zh ? "隐私" : "Privacy"}</a>
          <a href="https://github.com/ShiyouQi888/zhuageping" target="_blank" rel="noreferrer" className="github-link">
            <Github size={16} /> GitHub
          </a>
        </div>
        <div className="nav-actions">
          <a className="language" href={zh ? "/en" : "/zh"} aria-label={zh ? "Switch to English" : "切换到中文"}>{zh ? "English" : "简体中文"} <ChevronDown size={15} /></a>
          <a className="button button-small button-primary" href={downloadUrl} target="_blank" rel="noreferrer">
            <Download size={16} /> Download
          </a>
        </div>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> {zh ? "为 Windows 打造，让工作更专注" : "Built for Windows, made for flow"}</div>
          <h1>{zh ? <>记录每个瞬间。<br /><em>保持专注。</em></> : <>Capture the moment.<br /><em>Keep your focus.</em></>}</h1>
          <p className="hero-lede">{zh ? "抓个屏是一款快速、私密的 Windows 截图与录屏工具，专为屏幕上的工作而生。" : "Zhuageping is a fast, private screenshot and screen recording tool for the work happening on your screen."}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={downloadUrl} target="_blank" rel="noreferrer"><Download size={18} /> {zh ? "下载 Windows 版" : "Download for Windows"} <ArrowRight size={17} /></a>
            <a className="button button-quiet" href="#workflow"><Play size={17} /> {zh ? "了解使用方式" : "See how it works"}</a>
          </div>
          <div className="hero-meta"><span><Check size={15} /> {zh ? "免费使用" : "Free to use"}</span><span><LockKeyhole size={15} /> {zh ? "本地优先" : "Local-first"}</span><span>Windows 10 / 11</span></div>
        </div>
        <div className="hero-visual" aria-label="Screenshot editor preview">
          <div className="visual-glow" />
          <div className="window-chrome"><span /><span /><span /><strong>{zh ? "抓个屏 · 截图编辑器" : "抓个屏 · Screenshot editor"}</strong><small>1280 × 720</small></div>
          <div className="editor-stage">
            <Image src="/screenshots/editor-toolbar.png" alt="Zhuageping screenshot annotation toolbar" fill sizes="(max-width: 900px) 90vw, 680px" priority />
            <div className="selection-label">1,280 × 720</div>
          </div>
          <div className="visual-caption"><span className="recording-dot" /> {zh ? "随时开始" : "Ready when you are"} <span>F1</span></div>
        </div>
      </section>

      <section className="proof-strip"><div className="shell proof-inner"><span>{zh ? "一个安静的工作空间，满足" : "One calm workspace for"}</span><div><MonitorUp size={18} /> {zh ? "截图" : "screenshots"}</div><div><Video size={18} /> {zh ? "录屏" : "recordings"}</div><div><ScanText size={18} /> OCR</div><div><MousePointer2 size={18} /> {zh ? "标注" : "annotations"}</div></div></section>

      <section className="section shell" id="features">
        <div className="section-heading"><div><div className="kicker">{zh ? "完整工具箱" : "THE TOOLKIT"}</div><h2>{zh ? <>展示、说明、记录，<br />需要的一切都在这里。</> : <>Everything you need<br />to show, explain, and remember.</>}</h2></div><p>{zh ? "简洁的控制项不会打扰你。常用工具，一个快捷键即可呼出。" : "Simple controls stay out of your way. The right tool is always one shortcut away."}</p></div>
        <div className="feature-grid">
          <article className="feature-card feature-wide dark-card"><div className="feature-top"><span className="icon-box"><MonitorUp size={20} /></span><span className="feature-index">01</span></div><h3>{zh ? "精准截图" : "Capture precisely"}</h3><p>{zh ? "选择区域、窗口、屏幕或滚动页面。多屏识别从第一次点击开始就已准备好。" : "Pick a region, window, screen, or scrolling page. Multi-monitor aware from the first click."}</p><div className="mini-selection"><span>{zh ? "已识别窗口" : "Window detected"}</span><i /></div></article>
          <article className="feature-card"><div className="feature-top"><span className="icon-box orange"><Sparkles size={20} /></span><span className="feature-index">02</span></div><h3>{zh ? "清晰标注" : "Annotate clearly"}</h3><p>{zh ? "箭头、形状、文字、模糊、马赛克、取色器，以及贴近工作区域的工具栏。" : "Arrows, shapes, text, blur, mosaic, color picker, and a toolbar that stays close to your work."}</p><div className="tool-pills"><span>↗</span><span>T</span><span>◌</span><span>▦</span><span>✓</span></div></article>
          <article className="feature-card"><div className="feature-top"><span className="icon-box blue"><Video size={20} /></span><span className="feature-index">03</span></div><h3>{zh ? "流畅录屏" : "Record smoothly"}</h3><p>{zh ? "使用 Windows 原生能力录制全屏、窗口或自定义矩形区域。" : "Capture a full screen, window, or custom rectangle with native Windows recording."}</p><div className="record-preview"><span className="recording-dot" /> REC <strong>00:24</strong><button aria-label={zh ? "停止录制" : "Stop recording"}>■</button></div></article>
          <article className="feature-card feature-wide"><div className="feature-top"><span className="icon-box green"><LockKeyhole size={20} /></span><span className="feature-index">04</span></div><h3>{zh ? "默认保护隐私" : "Private by default"}</h3><p>{zh ? "截图、录屏、OCR 和设置都留在你的电脑上。不需要账号，不上传云端，不做数据分析。" : "Your screenshots, recordings, OCR, and settings stay on your machine. No account. No cloud uploads. No analytics."}</p><div className="privacy-line"><LockKeyhole size={15} /> {zh ? "仅保存本地文件" : "Local files only"}</div></article>
        </div>
      </section>

      <section className="workflow-section" id="workflow"><div className="shell workflow-grid"><div className="workflow-copy"><div className="kicker">{zh ? "安静的工作流" : "A QUIET WORKFLOW"}</div><h2>{zh ? <>从想法到<br />可分享，只需几秒。</> : <>From thought<br />to shareable in seconds.</>}</h2><div className="steps"><div className="step active"><span>01</span><div><strong>{zh ? "按下 F1" : "Press F1"}</strong><p>{zh ? "不用离开当前窗口，即可呼出截图覆盖层。" : "Bring up the capture overlay without leaving your current window."}</p></div></div><div className="step"><span>02</span><div><strong>{zh ? "让内容更清楚" : "Make it clear"}</strong><p>{zh ? "添加标注、隐藏敏感信息，或使用 OCR 提取文字。" : "Annotate, blur sensitive details, or pull text with OCR."}</p></div></div><div className="step"><span>03</span><div><strong>{zh ? "保存或置顶" : "Save or pin"}</strong><p>{zh ? "复制、保存到本地、置顶参考，然后继续工作。" : "Copy, save locally, pin for reference, and get back to work."}</p></div></div></div></div><div className="workflow-image"><Image src="/screenshots/color-picker.png" alt={zh ? "抓个屏取色与像素检查界面" : "Color picker and pixel inspection in Zhuageping"} fill sizes="(max-width: 900px) 90vw, 600px" /><div className="workflow-note"><TimerReset size={16} /> {zh ? "工具就在你需要的地方。" : "Your tools, right where you need them."}</div></div></div></section>

      <section className="download-section shell" id="download"><div className="download-box"><div><div className="kicker">{zh ? "随时开始" : "READY WHEN YOU ARE"}</div><h2>{zh ? <>让下一次说明<br />变得更简单。</> : <>Make your next explanation<br />a little easier.</>}</h2><p>{zh ? "下载 Windows 版抓个屏，把重要想法留在手边。" : "Download Zhuageping for Windows and keep your best ideas close."}</p></div><div className="download-actions"><a className="button button-primary" href={downloadUrl} target="_blank" rel="noreferrer"><Download size={18} /> {zh ? "下载最新版本" : "Download latest release"}</a><span>Windows 10 / 11 · v0.1.22</span></div></div></section>

      <footer className="footer shell" id="privacy"><Logo /><div className="footer-links"><a href="https://github.com/ShiyouQi888/zhuageping/blob/main/PRIVACY.md">Privacy</a><a href="https://github.com/ShiyouQi888/zhuageping">GitHub</a><a href="mailto:blacklaw@foxmail.com">Contact</a></div><p>© 2026 Zhuageping. Made for focused work.</p></footer>
    </main>
  );
}
