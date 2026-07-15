import type { Metadata } from "next";
import Script from "next/script";
import GaPageView from "@/components/GaPageView";
import { baseUrl } from "@/lib/site";
import "./globals.css";

const GA_ID = "G-RM41V067HE";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "The Secret Buttons",
    template: "%s - The Secret Buttons",
  },
  description:
    "The Secret Buttons by Ellen M. Shapiro — a coming-of-age story about brave young characters in the years leading to World War II. Free study guide and teacher's guide.",
  openGraph: {
    siteName: "The Secret Buttons",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wtc6zza.css" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <GaPageView gaId={GA_ID} />
        <div className="site-container">
          {children}
          <footer className="site-footer">
            <p>
              &copy; {new Date().getFullYear()} Ellen M. Shapiro &middot;{" "}
              <a href="mailto:ellen@visualanguage.net">ellen@visualanguage.net</a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
