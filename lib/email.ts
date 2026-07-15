export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
  scheduledAt,
}: {
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
  scheduledAt?: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
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
      ...(replyTo ? { reply_to: replyTo } : {}),
      ...(scheduledAt ? { scheduled_at: scheduledAt } : {}),
    }),
  });
  if (!res.ok) {
    console.error("Resend error:", res.status, await res.text());
  }
  return res.ok;
}

export function esc(v: FormDataEntryValue | null) {
  return String(v ?? "")
    .slice(0, 2000)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
