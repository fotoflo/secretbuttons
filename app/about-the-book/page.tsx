import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Hello!" };

export default function AboutTheBook() {
  return (
    <>
      <SiteHeader title="Hello!" />
      <div className="site-inner">
        <main className="entry-content">
          <h2 className="text-blue">
            I&rsquo;m Ellen Shapiro, <br />a writer and graphic designer
          </h2>

          <p>
            Inspired by my mother&rsquo;s memories, I wrote The Secret Buttons, a
            coming-of-age story about the experiences of brave young fictional
            characters during the years leading to World War II. It&rsquo;s a book
            about immigrating to a new country, escaping from a horrific
            situation, learning a new language, living in wartime
            conditions&hellip; and about learning, growing up, and ultimately
            helping others.
          </p>

          <div className="row" style={{ marginTop: 40 }}>
            <div className="col-golden-right">
              <figure>
                <Image
                  src="/images/ellen_shapiro_holding_book.jpg"
                  alt="Ellen Shapiro holding The Secret Buttons"
                  width={900}
                  height={900}
                  sizes="(max-width: 840px) 100vw, 38vw"
                  style={{ width: "100%", height: "auto" }}
                />
                <figcaption>
                  If you&rsquo;re here because you&rsquo;ve read the book and want
                  to go deeper, that&rsquo;s great. Everything is included on the
                  free Study Guide you can download on the next tab.
                </figcaption>
              </figure>
            </div>

            <div className="col-golden-left">
              <p style={{ fontSize: 24 }}>
                <a
                  href="https://visualanguage.net/home/the-secret-buttons/tsb-interview"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Click here to learn how the book was created
                </a>
              </p>

              <figure style={{ marginTop: 20 }}>
                <a
                  href="https://youtu.be/4Yg6eyZf3gc"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/images/the_secret_buttons_video-1.jpg"
                    alt="Watch the video about The Secret Buttons"
                    width={1200}
                    height={710}
                    sizes="(max-width: 840px) 100vw, 62vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </a>
              </figure>

              <p className="text-blue" style={{ fontSize: 18, marginTop: 20 }}>
                All illustrations are by Caterina Baldi, a leading Italian artist
              </p>

              <p style={{ fontSize: 24 }}>
                <a
                  href="https://visualanguage.net/reviews_media/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Read the reviews here
                </a>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
