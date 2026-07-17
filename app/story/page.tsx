import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SiteFooter, SiteHeader } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "品牌故事",
  description: "了解屮微我“微观自我，找到自我，做自己”的品牌理念与现代东方定制观。",
};

export default function StoryPage() {
  return (
    <div className="site-page inner-page">
      <SiteHeader tone="dark" />
      <main>
        <PageHero eyebrow="OUR STORY" title="不为衣裳定义人，让衣裳更像你" intro="屮微我，英文名 I’m_。从“我是谁”出发，在传统与当代、身体与精神之间，寻找属于每个人自己的那一道灰度。" />

        <section className="shell inner-section story-origin">
          <div className="story-index"><span>始</span><p>THE BEGINNING</p></div>
          <div className="story-copy">
            <p className="eyebrow">WHY CHUWEIWO</p>
            <h2>看见细微之处，<br />才真正看见一个人。</h2>
            <p>品牌名“屮微我”寓意微观自我、找到自我、做自己。我们不相信所有人都应该穿进同一套标准，也不认为高级感只有一种答案。</p>
            <p>身体的比例、生活的轨迹、对颜色的感受，甚至一次重要相见时想要成为怎样的自己——这些看似细微的部分，共同组成了真实的人。定制的意义，便是把它们一一看见。</p>
          </div>
          <blockquote>“衣服最终要留下的，不是流行的痕迹，而是一个人清晰的样子。”</blockquote>
        </section>

        <section className="identity-section inner-section">
          <div className="shell identity-layout">
            <div className="identity-mark"><span>屮微我</span><small>I&apos;M_</small></div>
            <div>
              <p className="eyebrow">THE MARK & MEANING</p>
              <h2>不同灰度，同样独一无二</h2>
              <p>Logo 以层次不同的灰表达人的多面与独特——世界并非非黑即白，自我也不必被单一标签概括。缠枝纹承接东方文化中生生不息的寓意，三瓣兰花来自主理人的手绘，象征克制、坚韧与幽微的芬芳。</p>
            </div>
          </div>
        </section>

        <section className="shell inner-section values-section">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">WHAT WE VALUE</p><h2>我们珍视的三件事</h2></div>
            <p>不追赶热闹的答案，<br />把时间留给真正重要的细节。</p>
          </div>
          <div className="values-grid">
            <article><span>见人</span><h3>先理解，再设计</h3><p>衣服服务于真实的人。设计开始前，先听懂你的生活与期待。</p></article>
            <article><span>守艺</span><h3>让手作留下温度</h3><p>尊重盘扣、滚边、刺绣等传统工艺，也让它们自然进入今天的生活。</p></article>
            <article><span>长久</span><h3>少而精，穿得更久</h3><p>从衣橱出发规划定制，让每一件新衣都能被反复穿着、彼此搭配。</p></article>
          </div>
        </section>

        <section className="story-closing">
          <div className="shell">
            <p>CHUWEIWO · I&apos;M_</p>
            <h2>东方，是来处；<br />自我，是方向。</h2>
            <Link className="button button-light" href="/consultation">开始你的定制故事</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
