import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Lightbox from "@/components/Lightbox";

export const metadata: Metadata = {
  title: "The Study Guide and the Teacher's Guide",
};

export default function StudyGuide() {
  return (
    <>
      {/* The original site hides the big page title on this page */}
      <SiteHeader />
      <div className="site-inner">
        <main id="main-content" className="entry-content" style={{ paddingTop: 30 }}>
          <p className="text-red" style={{ fontSize: 30 }}>
            <strong>
              <Link
                href="/guide-downloads"
                style={{ textDecoration: "underline" }}
              >
                Click here to download your free 26-page Interactive Study Guide
                PDF
              </Link>
            </strong>
          </p>

          <p className="text-blue" style={{ marginTop: 20 }}>
            The 26-page Study Guide includes:
          </p>

          <ul style={{ marginTop: 20 }}>
            <li>a plot summary</li>
            <li>character sketches</li>
            <li>1938-45 time line</li>
            <li>map of route from Austria to England</li>
            <li>
              information on immigration, learning a new language, Jewish
              values, antisemitism.
            </li>
            <li>
              two sets of book-club style questions, for young people and
              adults.
            </li>
            <li>
              insights into story details including knitting, hiding valuables,
              and the food, music, and media of the period. All of which
              comprise a comprehensive introduction to the Holocaust and WWII.
            </li>
            <li>
              every page includes discussion topics and ideas for classwork and
              homework.
            </li>
          </ul>

          <div className="row" style={{ marginTop: 40 }}>
            <div className="col-third">
              <figure>
                <Lightbox
                  src="/images/the_secret_buttons_illustration-1.jpg"
                  alt="The Secret Buttons study guide cover"
                  width={1000}
                  height={789}
                  sizes="(max-width: 840px) 100vw, 33vw"
                  caption="Study guide cover"
                />
                <figcaption>Cover (click to enlarge)</figcaption>
              </figure>
            </div>
            <div className="col-third">
              <figure className="aligncenter">
                <Lightbox
                  src="/images/anni_and_rosies_journey.jpg"
                  alt="Anni and Rosie's journey — sample inside page"
                  width={1000}
                  height={789}
                  sizes="(max-width: 840px) 100vw, 33vw"
                  caption="Sample inside page — Anni & Rosie's journey"
                />
                <figcaption>Sample inside page (click to enlarge)</figcaption>
              </figure>
            </div>
            <div className="col-third">
              <p style={{ fontSize: 18 }}>
                <br />
                <strong className="text-red">
                  <Link href="/guide-downloads">
                    Click here to download your free Teacher&rsquo;s Guide
                  </Link>{" "}
                  PDF,
                </strong>{" "}
                which includes
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-half">
              <ul>
                <li className="li-black">
                  information about teaching the Holocaust and WWII
                </li>
                <li className="li-black">
                  themes explored in <em>The Secret Buttons</em>
                </li>
                <li className="li-black">link to a classroom slide show</li>
                <li className="li-black">role-play scenarios</li>
              </ul>
            </div>
            <div className="col-half">
              <ul>
                <li className="li-black">connections to today&rsquo;s issues</li>
                <li className="li-black">
                  ideas for creative classroom activities including writing,
                  drawing, and performing arts
                </li>
                <li className="li-black">
                  list of additional teaching resources
                </li>
              </ul>
            </div>
          </div>

          <p style={{ marginTop: 30 }}>
            Teaching the book?{" "}
            <Link href="/for-educators">
              See everything for educators in one place
            </Link>
            .
          </p>
        </main>
      </div>
    </>
  );
}
