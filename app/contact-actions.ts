"use server";

import { redirect } from "next/navigation";
import { sendEmail, esc } from "@/lib/email";

function spamCheck(formData: FormData) {
  if (formData.get("website")) return true;
  const startedAt = Number(formData.get("started_at") || 0);
  return Boolean(startedAt && Date.now() - startedAt < 3000);
}

export async function subscribeNewsletter(formData: FormData) {
  if (!spamCheck(formData)) {
    const email = esc(formData.get("email"));
    await sendEmail({
      to: [process.env.FORM_EMAIL_TO!],
      subject: `Newsletter signup: ${email}`,
      html: `<p><b>${email}</b> asked to be kept up to date (home page signup).</p>`,
    });
  }
  redirect("/thank-you?from=newsletter");
}

export async function requestEvent(formData: FormData) {
  if (!spamCheck(formData)) {
    const name = esc(formData.get("name"));
    const email = esc(formData.get("email"));
    const organization = esc(formData.get("organization"));
    const message = esc(formData.get("message"));
    await sendEmail({
      to: [process.env.FORM_EMAIL_TO!],
      replyTo: String(formData.get("email") ?? "") || undefined,
      subject: `Event invitation: ${name} (${organization})`,
      html: `
        <h2>Event invitation request</h2>
        <p><b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/>
        <b>School / group:</b> ${organization}</p>
        <p><b>Message:</b><br/>${message}</p>`,
    });
  }
  redirect("/thank-you?from=event");
}

export async function requestSignedCopies(formData: FormData) {
  if (!spamCheck(formData)) {
    const name = esc(formData.get("name"));
    const email = esc(formData.get("email"));
    const quantity = esc(formData.get("quantity"));
    const note = esc(formData.get("note"));
    await sendEmail({
      to: [process.env.FORM_EMAIL_TO!],
      replyTo: String(formData.get("email") ?? "") || undefined,
      subject: `Signed copies request: ${name} (qty ${quantity})`,
      html: `
        <h2>Signed copies request</h2>
        <p><b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/>
        <b>Quantity:</b> ${quantity}</p>
        <p><b>Inscription / note:</b><br/>${note}</p>`,
    });
  }
  redirect("/thank-you?from=order");
}
