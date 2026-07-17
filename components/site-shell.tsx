import Link from "next/link";

const nav = [
  ["首页", "/"],
  ["定制服务", "/services"],
  ["品牌故事", "/story"],
  ["Lookbook", "/lookbook"],
  ["预约咨询", "/consultation"],
];

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand-mark ${light ? "brand-mark-light" : ""}`} href="/" aria-label="屮微我首页">
      <span className="brand-cn">屮微我</span>
      <span className="brand-en">I&apos;M_</span>
    </Link>
  );
}

export function SiteHeader({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <header className={`site-header site-header-${tone}`}>
      <div className="header-inner shell-wide">
        <BrandMark light={tone === "light"} />
        <nav className="desktop-nav" aria-label="主导航">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link className="header-appointment" href="/consultation">预约咨询 <span>↗</span></Link>
        <details className="mobile-menu">
          <summary aria-label="打开导航"><i /><i /></summary>
          <nav aria-label="移动端导航">
            {nav.map(([label, href], index) => (
              <Link key={href} href={href}><span>0{index + 1}</span>{label}</Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

export function PageHero({ eyebrow, title, intro, tone = "paper" }: {
  eyebrow: string;
  title: string;
  intro: string;
  tone?: "paper" | "ink";
}) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="page-hero-ink" aria-hidden="true" />
      <div className="shell page-hero-inner">
        <p className={`eyebrow ${tone === "ink" ? "light" : ""}`}>{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <BrandMark light />
          <p>承东方衣道 · 裁独属于你的风骨</p>
        </div>
        <div className="footer-nav">
          {nav.slice(1).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
        <div className="footer-contact">
          <p>微信预约</p>
          <span>请替换为品牌微信 / 二维码</span>
          <p>工作室地址</p>
          <span>请替换为城市及详细地址</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 屮微我 CHUWEIWO. ALL RIGHTS RESERVED.</span>
        <span>新中式定制 · 旗袍 · 男士正装</span>
      </div>
    </footer>
  );
}
