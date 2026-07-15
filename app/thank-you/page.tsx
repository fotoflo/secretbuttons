import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Thank you" };

const messages: Record<string, string> = {
  newsletter: "You're on the list! We'll email you when new materials are added.",
  event: "Your invitation is on its way to Ellen — she'll be in touch soon.",
  order: "Your signed-copy request is on its way to Ellen — she'll reply with details.",
};

export default async function ThankYou({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await searchParams;
  const message = (from && messages[from]) || "Thank you for downloading.";

  return (
    <>
      <SiteHeader title="Thank you" />
      <div className="site-inner">
        <main id="main-content" className="entry-content">
          <p>{message}</p>

          <div style={{ height: 40 }} aria-hidden="true" />

          <p style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <a
              className="button"
              style={{ fontSize: 18 }}
              href="/downloads/The-Secret-Buttons-Study-Guide_SlideShow-1.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              download your free 26-page Interactive Study Guide (PDF)
            </a>
            <a
              className="button"
              style={{ fontSize: 18 }}
              href="/downloads/The-Secret-Buttons-Teachers-Guide.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              download your free Teacher&rsquo;s Guide (PDF)
            </a>
          </p>

          <div style={{ height: 120 }} aria-hidden="true" />
        </main>
      </div>
    </>
  );
}
