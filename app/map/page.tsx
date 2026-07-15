import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import Lightbox from "@/components/Lightbox";

export const metadata: Metadata = {
  title: "The Journey",
  description:
    "Anni and Rosie's route from Vienna to England — about 750 miles by train to the Hoek van Holland port, then by boat to Harwich.",
};

const stops = [
  ["Vienna, Austria", "Where the story begins."],
  ["Linz & Salzburg", "West through Austria by train."],
  ["Munich & Stuttgart", "Crossing 1930s Germany."],
  ["Mannheim & Bonn", "Down the Rhine valley."],
  ["Venlo & Amsterdam", "Into the Netherlands."],
  [
    "Hoek van Holland",
    "The port — about 750 miles from Vienna. Today a 12-hour drive; 88 years ago, a tiring 24-hour train trip.",
  ],
  ["Harwich, England", "Across the North Sea by boat."],
  ["London", "And onward to a new life."],
];

export default function MapPage() {
  return (
    <>
      <SiteHeader title="The Journey" />
      <div className="site-inner">
        <main id="main-content" className="entry-content">
          <div className="row">
            <div className="col-golden-left">
              <h2 className="text-blue">
                Anni &amp; Rosie&rsquo;s journey
              </h2>
              <p>
                The route from Vienna to England, as told in{" "}
                <em>The Secret Buttons</em>. Click the map to enlarge it — the
                full spread, with discussion questions, is in the free{" "}
                <a href="/guide-downloads">Study Guide</a>.
              </p>
              <figure>
                <Lightbox
                  src="/images/anni_and_rosies_journey.jpg"
                  alt="Map of Anni and Rosie's journey from Vienna through Germany and the Netherlands to England"
                  width={1000}
                  height={789}
                  sizes="(max-width: 840px) 100vw, 60vw"
                  caption="Anni & Rosie's journey — from the Study Guide"
                />
                <figcaption>Click to enlarge</figcaption>
              </figure>
            </div>
            <div className="col-golden-right">
              <h3 className="text-blue">The route</h3>
              <ol className="route-list">
                {stops.map(([place, note]) => (
                  <li key={place}>
                    <strong>{place}</strong>
                    <br />
                    <span className="route-note">{note}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
