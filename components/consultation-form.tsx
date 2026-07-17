"use client";

import { FormEvent, useState } from "react";

export function ConsultationForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span>✓</span>
        <p className="eyebrow">DEMO CONFIRMATION</p>
        <h2>预约信息已在本页完成演示</h2>
        <p>当前为官网初版，尚未连接真实收集渠道。接入品牌微信、邮箱或预约系统后，即可正式接收咨询。</p>
        <button type="button" onClick={() => setSent(false)}>返回表单</button>
      </div>
    );
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
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
      <label className="consent"><input type="checkbox" required /><span>我同意仅将以上信息用于本次定制咨询（演示）</span></label>
      <button className="button button-dark" type="submit">提交预约意向</button>
      <p className="form-hint">初版演示：此表单暂不会发送或保存真实信息。</p>
    </form>
  );
}
