import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about The Secret Buttons — editions, prices, free guides, bulk orders, and author visits.",
};

const faqs: [string, React.ReactNode][] = [
  [
    "What is The Secret Buttons about?",
    <>
      A coming-of-age story about brave young fictional characters during the
      years leading to World War II — immigrating to a new country, escaping a
      horrific situation, learning a new language, living in wartime
      conditions, and ultimately helping others. It was inspired by author
      Ellen M. Shapiro&rsquo;s mother&rsquo;s memories, with paintings by
      Italian illustrator Caterina Baldi.
    </>,
  ],
  [
    "What editions are available, and what do they cost?",
    <>
      Hardcover ($27.95, cloth binding, color illustrations), Premium Softcover
      ($22.95, same inside pages as hardcover), Paperback ($10.50,
      black-and-white), and Kindle ebook ($8.95, color illustrations). Details
      on the <Link href="/how-to-order">Order page</Link>.
    </>,
  ],
  [
    "Where can I buy it?",
    <>
      On Amazon (all editions), or at TheAlphagramShop.etsy.com for signed
      copies and discounted school/library bundles. Bookstores can order
      through Ingram.
    </>,
  ],
  [
    "Are the study materials really free?",
    <>
      Yes. The 26-page Interactive Study Guide and the Teacher&rsquo;s Guide
      are free PDFs — <Link href="/guide-downloads">download them here</Link>.
      The teacher&rsquo;s guide includes a link to a classroom slide show.
    </>,
  ],
  [
    "Who are the guides for?",
    <>
      Classrooms and book clubs. The study guide includes two sets of
      book-club-style questions — one for young people, one for adults — and
      every page has discussion topics and ideas for classwork and homework.
    </>,
  ],
  [
    "Can students contribute to this site?",
    <>
      Yes! Students can{" "}
      <Link href="/shareyour-family-story">share a family immigration story</Link>{" "}
      (about 500 words) or <Link href="/share-your-art">submit artwork</Link>{" "}
      for posting.
    </>,
  ],
  [
    "Does Ellen do school visits?",
    <>
      Yes — in person or by Zoom. <Link href="/events">Invite her here</Link>,
      or email ellen@visualanguage.net.
    </>,
  ],
];

export default function Faq() {
  return (
    <>
      <SiteHeader title="Questions" />
      <div className="site-inner">
        <main id="main-content" className="entry-content">
          {faqs.map(([q, a]) => (
            <details className="faq-item" key={q}>
              <summary>{q}</summary>
              <div>{a}</div>
            </details>
          ))}
          <p style={{ marginTop: 30 }}>
            Something else?{" "}
            <a href="mailto:ellen@visualanguage.net">Ask Ellen directly</a>.
          </p>
        </main>
      </div>
    </>
  );
}
