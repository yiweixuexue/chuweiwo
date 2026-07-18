import type { Metadata } from "next";
import { ConsultationForm } from "../../components/consultation-form";
import { SiteFooter, SiteHeader } from "../../components/site-shell";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "预约咨询",
  description: "预约屮微我新中式、旗袍与男士正装定制初步沟通。",
};

export default function ConsultationPage() {
  return (
    <div className="site-page inner-page consultation-page">
      <SiteHeader tone="light" />
      <main>
        <section className="consultation-hero">
          <div className="consultation-art" aria-hidden="true" />
          <div className="shell consultation-hero-inner">
            <p className="eyebrow light">PRIVATE APPOINTMENT</p>
            <h1>从一次好好沟通开始</h1>
            <p>告诉我们你将去往怎样的场合、希望成为怎样的自己。初步沟通不急于做决定，只为先理解真正的需要。</p>
          </div>
        </section>

        <section className="shell consultation-layout inner-section">
          <div className="consultation-aside">
            <p className="eyebrow">BEFORE WE MEET</p>
            <h2>预约前，你可以准备</h2>
            <ul>
              <li><span>01</span><p><strong>穿着场合与日期</strong>帮助我们判断制作周期与合适的正式程度。</p></li>
              <li><span>02</span><p><strong>喜欢或不喜欢的参考图</strong>不必专业，直觉感受同样重要。</p></li>
              <li><span>03</span><p><strong>现有衣橱或过往困扰</strong>了解为什么“不好穿”，比追逐某种款式更有价值。</p></li>
            </ul>
            <div className="contact-wechat">
              <p>也可通过品牌微信预约</p>
              <img
                src={`${siteBasePath}/images/wechat-qr.png`}
                alt="屮微我品牌微信二维码"
                width="632"
                height="632"
                loading="lazy"
                decoding="async"
              />
              <span>打开微信扫一扫，添加品牌微信</span>
            </div>
          </div>
          <div className="form-panel">
            <p className="eyebrow">APPOINTMENT FORM</p>
            <h2>预约初步咨询</h2>
            <p>通常将在 1–2 个工作日内与您确认沟通方式和时间。</p>
            <ConsultationForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
