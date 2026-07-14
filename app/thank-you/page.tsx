import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Thank you" };

export default function ThankYou() {
  return (
    <>
      <SiteHeader title="Thank you" />
      <div className="site-inner">
        <main className="entry-content">
          <p>Thank you for downloading.</p>

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
