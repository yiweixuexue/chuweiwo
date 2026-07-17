import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Lookbook",
  description: "浏览屮微我新中式、旗袍与男士正装定制案例与产品形象。",
};

const works = [
  { title: "兰影", meta: "旗袍定制 · HERITAGE QIPAO", className: "lb-women", size: "tall" },
  { title: "留白", meta: "男士正装 · MODERN CEREMONY", className: "lb-men", size: "short" },
  { title: "见山", meta: "女士新中式 · MODERN CHINESE", className: "lb-hero", size: "wide" },
  { title: "一枚盘扣的时间", meta: "非遗手作细节 · CRAFT", className: "lb-detail", size: "short" },
  { title: "相见", meta: "婚礼与家庭定制 · OCCASION", className: "lb-ceremony", size: "tall" },
];

export default function LookbookPage() {
  return (
    <div className="site-page inner-page lookbook-page">
      <SiteHeader tone="dark" />
      <main>
        <PageHero eyebrow="LOOKBOOK · SELECTED WORKS" title="每一件衣裳，都因一个真实的人而完整" intro="这里收录客片、产品照与手工细节。官网初版以示例内容呈现，后续可按定制线、年份与场景持续建立品牌作品档案。" />
        <section className="shell lookbook-index">
          <nav aria-label="作品分类">
            <span>全部</span><span>女士新中式</span><span>旗袍</span><span>男士正装</span><span>手作细节</span>
          </nav>
          <p>SELECTED STORIES · 2026</p>
        </section>
        <section className="shell lookbook-gallery">
          {works.map((work, index) => (
            <article className={`gallery-work ${work.size}`} key={work.title}>
              <div className={`gallery-image ${work.className}`} role="img" aria-label={`${work.title}系列示例图`}><span>0{index + 1}</span></div>
              <div><p>{work.meta}</p><h2>{work.title}</h2></div>
            </article>
          ))}
        </section>
        <section className="lookbook-note">
          <div className="shell">
            <p className="eyebrow">REAL PEOPLE · REAL STORIES</p>
            <h2>真实的穿着，比完美的造型更有力量。</h2>
            <p>后续可将已完成的客片与产品照替换进来，形成销售顾问可直接分享给客户的品牌作品库。</p>
            <Link className="text-link" href="/consultation">咨询同类定制 <span>↗</span></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
