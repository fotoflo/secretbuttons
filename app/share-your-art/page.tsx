import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Your Art" };

export default function YourArt() {
  return (
    <>
      <SiteHeader title="Your Art" />
      <div className="site-inner">
        <main id="main-content" className="entry-content">
          <div className="row">
            <div className="col-half">
              <p>
                The Secret Buttons is in part an art book, with paintings by
                noted illustrator Caterina Baldi.
              </p>

              <p className="text-blue">
                <strong>Now we want to feature YOUR art.</strong>
              </p>

              <p>
                Draw or paint a picture to illustrate an important aspect of
                your own or your relative&rsquo;s, family&rsquo;s, or
                friend&rsquo;s immigration story.
              </p>

              <p>
                Save or scan and send it to me:
                <br />
                <a href="mailto:ellen@visualanguage.net">
                  ellen@visualanguage.net
                </a>
                <br />
                for posting here.
              </p>

              <p style={{ marginTop: 40 }}>
                <a
                  className="button"
                  href="mailto:ellen@visualanguage.net?subject=My%20Art"
                >
                  UPLOAD YOUR ART HERE
                </a>
              </p>
            </div>

            <div className="col-half">
              <figure>
                <Image
                  src="/images/colorful_drawing_of_a_boy.jpg"
                  alt="&ldquo;Shattered&rdquo; — a colorful drawing of a boy by Eli Yong"
                  width={768}
                  height={1000}
                  sizes="(max-width: 840px) 100vw, 45vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <figcaption>
                  &ldquo;Shattered&rdquo; by Eli Yong High School of Art and
                  Design, NYC Drawing, 18 x 24 inches
                </figcaption>
              </figure>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
