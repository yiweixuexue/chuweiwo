"use client";

import { FormEvent, useState } from "react";

const SUBMISSION_ENDPOINT = "https://formsubmit.co/ajax/yiweixuexue@gmail.com";

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(SUBMISSION_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.currentTarget),
      });

      if (!response.ok) throw new Error("Submission failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <span>✓</span>
        <p className="eyebrow">THANK YOU</p>
        <h2>预约信息已成功提交</h2>
        <p>感谢您的信任。我们已收到您的定制咨询，将尽快通过您留下的联系方式与您沟通。</p>
        <button type="button" onClick={() => setStatus("idle")}>提交另一份咨询</button>
      </div>
    );
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="屮微我官网｜新的定制咨询" />
      <input type="hidden" name="_template" value="table" />
      <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="field-row">
        <label><span>称呼 *</span><input name="name" required placeholder="如何称呼您" /></label>
        <label><span>联系方式 *</span><input name="contact" required placeholder="微信或手机号" /></label>
      </div>
      <div className="field-row">
        <label><span>感兴趣的服务 *</span><select name="service" required defaultValue=""><option value="" disabled>请选择</option><option>女士新中式定制</option><option>旗袍定制</option><option>男士正装定制</option><option>婚礼 / 家庭整体定制</option><option>会员服务咨询</option></select></label>
        <label><span>预计穿着日期</span><input name="date" type="date" /></label>
      </div>
      <label><span>所在城市</span><input name="city" placeholder="便于确认到店或远程沟通方式" /></label>
      <label><span>想告诉我们的事</span><textarea name="message" rows={5} placeholder="例如穿着场合、风格偏好、预算范围，或目前最困扰您的问题" /></label>
      <label className="consent"><input type="checkbox" required /><span>我同意仅将以上信息用于本次定制咨询</span></label>
      <button className="button button-dark" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "正在提交…" : "提交预约意向"}
      </button>
      {status === "error" && <p className="form-error" role="alert">提交没有成功，请稍后重试，或直接发送邮件至 yiweixuexue@gmail.com。</p>}
      <p className="form-hint">提交后，我们会尽快通过您留下的联系方式回复。</p>
    </form>
  );
}
