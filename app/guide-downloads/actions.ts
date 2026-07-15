"use server";

import { redirect } from "next/navigation";

const RESEND_URL = "https://api.resend.com/emails";

async function sendEmail(to: string[], subject: string, html: string) {
  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.FORM_EMAIL_FROM,
      to,
      subject,
      html,
    }),
  });
  if (!res.ok) {
    console.error("Resend error:", res.status, await res.text());
  }
  return res.ok;
}

function esc(v: FormDataEntryValue | null) {
  return String(v ?? "")
    .slice(0, 500)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

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

  const summary = `
    <h2>New guide download signup</h2>
    <table cellpadding="4">
      <tr><td><b>Name</b></td><td>${name}</td></tr>
      <tr><td><b>Email</b></td><td>${email}</td></tr>
      <tr><td><b>Organization</b></td><td>${organization}</td></tr>
      <tr><td><b>City</b></td><td>${city}, ${state} ${zip}</td></tr>
    </table>`;

  await sendEmail(
    [process.env.FORM_EMAIL_TO!],
    `Guide download: ${name} (${organization})`,
    summary
  );

  console.log(
    "Guide download signup:",
    JSON.stringify({ name, email, organization, city, state, zip })
  );

  redirect("/thank-you");
}
