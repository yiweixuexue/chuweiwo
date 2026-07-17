import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "定制服务",
  description: "了解屮微我女士新中式、旗袍与男士正装定制，以及从初谈到交付的完整服务流程。",
};

const services = [
  {
    no: "01",
    label: "MODERN CHINESE",
    title: "女士新中式定制",
    copy: "不以年龄或身材定义风格，从你的日常状态、重要场合与既有衣橱出发，建立更适合自己的东方衣着语言。",
    points: ["专属风格与色彩分析", "体型修饰与廓形设计", "面料、盘扣及细节定制", "日常 / 雅集 / 礼宴场景"],
    art: "service-detail-women",
  },
  {
    no: "02",
    label: "QIPAO ATELIER",
    title: "旗袍定制",
    copy: "旗袍的美，不在于把人束进同一种曲线。我们通过量体、试样与细节调整，让含蓄的东方线条顺着你的身体自然生长。",
    points: ["传统与改良领型选择", "手工盘扣、滚边与刺绣", "礼服 / 婚礼 / 日常旗袍", "多轮试样与动态调整"],
    art: "service-detail-qipao",
  },
  {
    no: "03",
    label: "MEN'S TAILORING",
    title: "男士正装定制",
    copy: "将中式立领、盘扣与现代西式结构克制融合，适合婚礼、商务、文化活动与需要被认真对待的正式时刻。",
    points: ["中式礼服与现代正装", "肩型、身姿与比例校正", "内搭、外套与成套搭配", "情侣 / 家庭场合形象统筹"],
    art: "service-detail-men",
  },
];

const process = [
  ["01", "初步沟通", "了解场合、时间、预算与真实穿着需求。"],
  ["02", "气质分析", "结合风格偏好、体型与命理气韵确定方向。"],
  ["03", "设计选料", "确认廓形、面料、颜色与盘扣等手工细节。"],
  ["04", "量体试样", "建立个人尺寸档案，试穿后精细调整动态合身度。"],
  ["05", "交付维护", "完成整烫与搭配建议，并持续维护会员档案。"],
];

export default function ServicesPage() {
  return (
    <div className="site-page inner-page">
      <SiteHeader tone="dark" />
      <main>
        <PageHero eyebrow="BESPOKE SERVICES" title="从认识你开始，定制一件真正属于你的衣服" intro="新中式不是一种固定样式，而是一种看见自己、表达自己的方式。屮微我以女士新中式、旗袍与男士正装三条定制线，回应不同人生场景。" />

        <section className="shell inner-section service-details">
          {services.map((service, index) => (
            <article className={`service-detail ${index % 2 ? "reverse" : ""}`} key={service.no}>
              <div className={`service-detail-art ${service.art}`} role="img" aria-label={`${service.title}示例形象`} />
              <div className="service-detail-copy">
                <p className="eyebrow">{service.no} · {service.label}</p>
                <h2>{service.title}</h2>
                <p className="lead">{service.copy}</p>
                <ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <Link className="text-link" href="/consultation">咨询此项服务 <span>↗</span></Link>
              </div>
            </article>
          ))}
        </section>

        <section className="process-section inner-section">
          <div className="shell">
            <div className="section-heading split-heading">
              <div><p className="eyebrow">THE BESPOKE JOURNEY</p><h2>五步完成专属定制</h2></div>
              <p>一件真正合适的衣服，<br />需要耐心，也值得耐心。</p>
            </div>
            <ol className="process-grid">
              {process.map(([no, title, copy]) => (
                <li key={no}><span>{no}</span><h3>{title}</h3><p>{copy}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="member-section inner-section">
          <div className="shell member-layout">
            <div>
              <p className="eyebrow light">MEMBERSHIP & LONG-TERM CARE</p>
              <h2>定制不是一次交易，<br />而是一段长期关系。</h2>
              <p>入会后，我们会持续维护你的尺寸、偏好与历次定制记录。会员等级以累计消费总额 ÷ 入会年数计算，年均消费达到相应标准即可持续享受对应礼遇。</p>
              <Link className="button button-light" href="/consultation">了解会员与定制</Link>
            </div>
            <div className="member-benefits">
              <div><span>01</span><h3>个人定制档案</h3><p>长期保存尺寸、版型、颜色与面料偏好。</p></div>
              <div><span>02</span><h3>优先定制档期</h3><p>重要节庆与活动旺季优先安排沟通和制作。</p></div>
              <div><span>03</span><h3>年度衣橱回顾</h3><p>梳理已有单品与新增需求，减少重复消费。</p></div>
              <div><span>04</span><h3>专属礼盒与活动</h3><p>年度心意、社群交流及不定期私享体验。</p></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
