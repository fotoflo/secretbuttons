import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://secretbuttons.com"),
  title: {
    default: "The Secret Buttons",
    template: "%s - The Secret Buttons",
  },
  description:
    "The Secret Buttons by Ellen M. Shapiro — a coming-of-age story about brave young characters in the years leading to World War II. Free study guide and teacher's guide.",
  openGraph: {
    siteName: "The Secret Buttons",
    type: "website",
    images: ["/images/the_secret_buttons_banner-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wtc6zza.css" />
      </head>
      <body>
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
