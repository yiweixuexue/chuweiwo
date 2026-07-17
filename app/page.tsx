import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-shell";

const services = [
  {
    no: "01",
    title: "女士新中式定制",
    en: "MODERN CHINESE",
    copy: "从日常雅集到重要场合，以体型、气质与生活方式为尺度，重塑东方衣着的当代表达。",
  },
  {
    no: "02",
    title: "旗袍定制",
    en: "QIPAO ATELIER",
    copy: "保留旗袍的含蓄风骨，以现代剪裁、精细滚边与非遗盘扣，成就贴合身体也贴合自我的一袭。",
  },
  {
    no: "03",
    title: "男士正装定制",
    en: "MEN'S TAILORING",
    copy: "在中式礼序与现代廓形之间寻找平衡，为婚礼、商务与正式场合定制沉静有度的东方正装。",
  },
];

export default function Home() {
  return (
    <div className="site-page">
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-veil" />
          <div className="hero-content shell">
            <p className="eyebrow light">CHUWEIWO · BESPOKE ATELIER</p>
            <h1 id="hero-title">为你，裁一身<br />东方风骨</h1>
            <p className="hero-copy">
              以命理气韵为灵感，以一对一专属设计与非遗手作，
              将衣裳做成只属于你的自我表达。
            </p>
            <div className="hero-actions">
              <Link className="button button-light" href="/services">了解定制</Link>
              <Link className="text-link text-link-light" href="/consultation">预约量身 <span>↗</span></Link>
            </div>
          </div>
          <p className="hero-mark">I&apos;M_</p>
          <div className="hero-scroll"><span />向下</div>
        </section>

        <section className="manifesto shell section-space">
          <p className="vertical-note">品牌理念 · BRAND PHILOSOPHY</p>
          <div className="manifesto-main">
            <p className="eyebrow">MICRO SELF · TRUE SELF</p>
            <h2>微观自我，找到自我，做自己</h2>
            <p>
              “屮微我”相信，真正的高级并非追随同一种标准，
              而是看见每个人不同的身体、经历与精神气质。
              我们以衣为媒，在细微之处辨认你，并将这份独一无二，郑重地穿在身上。
            </p>
            <Link className="text-link" href="/story">读品牌故事 <span>↗</span></Link>
          </div>
          <div className="orchid-seal" aria-hidden="true">
            <span>屮</span>
            <small>微我</small>
          </div>
        </section>

        <section className="services-section section-space">
          <div className="shell section-heading split-heading">
            <div>
              <p className="eyebrow">BESPOKE SERVICES</p>
              <h2>三大定制线</h2>
            </div>
            <p>从一场重要相见，到一生值得珍藏的时刻，<br />让每一次穿着都有来由，也有余韵。</p>
          </div>
          <div className="shell service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.no}>
                <div className={`service-art service-art-${service.no}`} aria-hidden="true">
                  <span>{service.no}</span>
                </div>
                <p className="service-en">{service.en}</p>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <Link aria-label={`查看${service.title}`} href="/services">→</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="system-section section-space">
          <div className="shell system-layout">
            <div className="system-title">
              <p className="eyebrow light">OUR BESPOKE SYSTEM</p>
              <h2>一件衣裳，<br />三重专属。</h2>
              <p>从“认识你”开始，完成一件真正属于你的衣服。</p>
            </div>
            <ol className="system-list">
              <li><span>壹</span><div><h3>命理气韵</h3><p>理解你的五行气质与人生场景，让色彩、材质与寓意彼此呼应。</p></div></li>
              <li><span>贰</span><div><h3>一对一设计</h3><p>结合体型、风格与衣橱需求，建立不被成衣尺码限制的专属方案。</p></div></li>
              <li><span>叁</span><div><h3>非遗精工手作</h3><p>盘扣、滚边、刺绣与细节收口，由手艺人的时间赋予温度。</p></div></li>
            </ol>
          </div>
        </section>

        <section className="lookbook-tease shell section-space">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">SELECTED STORIES</p>
              <h2>衣裳与人，相互成就</h2>
            </div>
            <Link className="text-link" href="/lookbook">浏览 Lookbook <span>↗</span></Link>
          </div>
          <div className="lookbook-pair">
            <Link className="lookbook-tile women" href="/lookbook">
              <div className="lookbook-image" />
              <div><p>HERITAGE QIPAO · 2026</p><h3>兰影</h3></div>
            </Link>
            <Link className="lookbook-tile men" href="/lookbook">
              <div className="lookbook-image" />
              <div><p>MODERN CEREMONY · 2026</p><h3>留白</h3></div>
            </Link>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-ink" aria-hidden="true" />
          <div className="shell cta-inner">
            <p className="eyebrow">BEGIN YOUR BESPOKE JOURNEY</p>
            <h2>你的故事，值得被好好裁制。</h2>
            <p>预约一次初步沟通，从场合、风格与真实需求开始。</p>
            <Link className="button button-dark" href="/consultation">预约咨询</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
