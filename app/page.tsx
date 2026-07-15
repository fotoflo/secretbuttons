import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import EmailCapture from "@/components/EmailCapture";
import { baseUrl } from "@/lib/site";

const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "The Secret Buttons",
  author: { "@type": "Person", name: "Ellen M. Shapiro" },
  illustrator: { "@type": "Person", name: "Caterina Baldi" },
  bookFormat: "https://schema.org/Hardcover",
  inLanguage: "en",
  url: baseUrl,
  image: `${baseUrl}/og.png`,
  description:
    "A coming-of-age story about brave young characters in the years leading to World War II — immigration, escape, learning a new language, and helping others.",
  offers: [
    { "@type": "Offer", price: "27.95", priceCurrency: "USD", name: "Hardcover" },
    { "@type": "Offer", price: "22.95", priceCurrency: "USD", name: "Premium Softcover" },
    { "@type": "Offer", price: "10.50", priceCurrency: "USD", name: "Paperback" },
    { "@type": "Offer", price: "8.95", priceCurrency: "USD", name: "Ebook" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <SiteHeader title="Welcome To" />
      <div className="site-inner">
        <main id="main-content" className="entry-content">
          <figure className="aligncenter moveup">
            <Image
              src="/images/the_secret_buttons_banner-1.png"
              alt="The Secret Buttons — a book by Ellen M. Shapiro, illustrated by Caterina Baldi"
              width={1554}
              height={1307}
              priority
              fetchPriority="high"
              sizes="(max-width: 1554px) 100vw, 1554px"
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
          <EmailCapture />
        </main>
      </div>
    </>
  );
}
