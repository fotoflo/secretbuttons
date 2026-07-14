"use server";

import { redirect } from "next/navigation";

export async function submitDownloadForm(formData: FormData) {
  // Honeypot: real visitors leave this blank
  if (formData.get("website")) {
    redirect("/thank-you");
  }

  const entry = {
    name: formData.get("name"),
    email: formData.get("email"),
    organization: formData.get("organization"),
    city: formData.get("city"),
    state: formData.get("state"),
    zip: formData.get("zip"),
    at: new Date().toISOString(),
  };

  // Entries show up in the Vercel function logs. Swap this for an email
  // service or a database when Ellen wants a real mailing list.
  console.log("Guide download signup:", JSON.stringify(entry));

  redirect("/thank-you");
}
