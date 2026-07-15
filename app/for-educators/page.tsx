import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import OutboundLink from "@/components/OutboundLink";

export const metadata: Metadata = {
  title: "For Educators",
  description:
    "Free study guide, teacher's guide, classroom slide show, and bulk ordering for The Secret Buttons — a classroom introduction to the Holocaust and WWII.",
};

export default function ForEducators() {
  return (
    <>
      <SiteHeader title="Teachers" />
      <div className="site-inner">
        <main id="main-content" className="entry-content">
          <h2 className="text-blue">Everything you need for the classroom</h2>
          <p>
            <em>The Secret Buttons</em> is a comprehensive, age-appropriate
            introduction to the Holocaust and WWII — told through the
            experiences of brave young fictional characters. All classroom
            materials are free.
          </p>

          <div className="row" style={{ marginTop: 40 }}>
            <div className="col-half">
              <h3 className="text-blue">Free downloads</h3>
              <ul>
                <li>
                  <Link href="/guide-downloads">
                    26-page Interactive Study Guide (PDF)
                  </Link>{" "}
                  — plot summary, character sketches, 1938&ndash;45 timeline,
                  route map, discussion topics on every page.
                </li>
                <li>
                  <Link href="/guide-downloads">
                    Teacher&rsquo;s Guide (PDF)
                  </Link>{" "}
                  — teaching the Holocaust and WWII, role-play scenarios,
                  connections to today&rsquo;s issues, creative classroom
                  activities, and a link to a ready-made classroom slide show.
                </li>
              </ul>
              <p>
                <Link className="button" href="/guide-downloads">
                  Download the guides
                </Link>
              </p>
            </div>
            <div className="col-half">
              <figure>
                <Image
                  src="/images/anni_and_rosies_journey.jpg"
                  alt="Sample study guide page: Anni and Rosie's journey map"
                  width={1000}
                  height={789}
                  sizes="(max-width: 840px) 100vw, 45vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <figcaption>A sample study guide spread</figcaption>
              </figure>
            </div>
          </div>

          <div className="row" style={{ marginTop: 40 }}>
            <div className="col-half">
              <h3 className="text-blue">Class sets &amp; bulk orders</h3>
              <p>
                Discounted bundles for schools and libraries (and signed
                copies) are available at{" "}
                <OutboundLink
                  href="https://TheAlphagramShop.etsy.com"
                  destination="etsy"
                >
                  TheAlphagramShop.etsy.com
                </OutboundLink>
                . Bookstores can order through Ingram.
              </p>
              <p>
                Paperback class sets are $10.50 per copy;{" "}
                <Link href="/how-to-order">see all editions</Link>.
              </p>
            </div>
            <div className="col-half">
              <h3 className="text-blue">Author visits</h3>
              <p>
                Ellen is happy to join your class in person or by Zoom.{" "}
                <Link href="/events">Invite her to your school</Link>, or email{" "}
                <a href="mailto:ellen@visualanguage.net">
                  ellen@visualanguage.net
                </a>
                .
              </p>
              <p>
                Students can also{" "}
                <Link href="/shareyour-family-story">
                  share their family stories
                </Link>{" "}
                and <Link href="/share-your-art">submit artwork</Link> for
                posting on this site.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
