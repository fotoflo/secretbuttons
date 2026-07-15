"use server";

import { redirect } from "next/navigation";
import { sendEmail, esc } from "@/lib/email";
import { baseUrl } from "@/lib/site";

export async function submitDownloadForm(formData: FormData) {
  // Honeypot: real visitors leave this blank
  if (formData.get("website")) {
    redirect("/thank-you");
  }

  // Time trap: humans take more than 3 seconds to fill six fields
  const startedAt = Number(formData.get("started_at") || 0);
  if (startedAt && Date.now() - startedAt < 3000) {
    redirect("/thank-you");
  }

  const name = esc(formData.get("name"));
  const email = esc(formData.get("email"));
  const organization = esc(formData.get("organization"));
  const city = esc(formData.get("city"));
  const state = esc(formData.get("state"));
  const zip = esc(formData.get("zip"));
  const ellen = process.env.FORM_EMAIL_TO!;

  await sendEmail({
    to: [ellen],
    subject: `Guide download: ${name} (${organization})`,
    html: `
      <h2>New guide download signup</h2>
      <table cellpadding="4">
        <tr><td><b>Name</b></td><td>${name}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>Organization</b></td><td>${organization}</td></tr>
        <tr><td><b>City</b></td><td>${city}, ${state} ${zip}</td></tr>
      </table>`,
  });

  const submitterEmail = String(formData.get("email") ?? "");
  if (submitterEmail.includes("@")) {
    await sendEmail({
      to: [submitterEmail],
      replyTo: ellen,
      subject: "Your Secret Buttons guides",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for your interest in <i>The Secret Buttons</i>! Here are your free downloads:</p>
        <ul>
          <li><a href="${baseUrl}/downloads/The-Secret-Buttons-Study-Guide_SlideShow-1.pdf">26-page Interactive Study Guide (PDF)</a></li>
          <li><a href="${baseUrl}/downloads/The-Secret-Buttons-Teachers-Guide.pdf">Teacher&rsquo;s Guide (PDF)</a></li>
        </ul>
        <p>Questions? Just reply to this email.</p>
        <p>— Ellen M. Shapiro</p>`,
    });

    const followUp = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
    await sendEmail({
      to: [submitterEmail],
      replyTo: ellen,
      scheduledAt: followUp.toISOString(),
      subject: "How did The Secret Buttons guides work for you?",
      html: `
        <p>Hi ${name},</p>
        <p>Two weeks ago you downloaded the study and teacher&rsquo;s guides for <i>The Secret Buttons</i>. I&rsquo;d love to hear how they worked in your classroom or book club — what resonated, what could be better.</p>
        <p>Just hit reply; I read every note.</p>
        <p>— Ellen M. Shapiro<br/>ellen@visualanguage.net</p>`,
    });
  }

  console.log(
    "Guide download signup:",
    JSON.stringify({ name, email, organization, city, state, zip })
  );

  redirect("/thank-you");
}
