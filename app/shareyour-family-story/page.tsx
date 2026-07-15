import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Your Stories" };

export default function YourStories() {
  return (
    <>
      <SiteHeader title="Your Stories" />
      <div className="site-inner">
        <main id="main-content" className="entry-content">
          <div className="row">
            <div className="col-golden-left">
              <p className="text-blue">
                <strong>This is the place to share YOUR family story!</strong>
              </p>

              <p>
                Interview your grandparents, great-grandparents, or other
                relatives. You can do it in person or use Zoom or a chat app.
                Write down the most important things, edit to around 500 words,
                and email in a Word or Google doc to me:
                <br />
                <a href="mailto:ellen@visualanguage.net">
                  ellen@visualanguage.net
                </a>{" "}
                for posting! Be sure to include your name and where you live.
                And if you were an immigrant yourself as a young person, please
                tell us all about what that&rsquo;s been like. Watch this page
                to read the stories that others wrote!
              </p>

              <div className="row" style={{ margin: "30px 0" }}>
                <div className="col-half">
                  <figure className="aligncenter">
                    <Image
                      src="/images/girl_on_computer.jpg"
                      alt="A girl interviewing a relative on her computer"
                      width={900}
                      height={600}
                      sizes="(max-width: 840px) 100vw, 30vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </figure>
                </div>
                <div className="col-half">
                  <figure className="aligncenter">
                    <Image
                      src="/images/man_on_mobile_phone.jpg"
                      alt="A man telling his story on a mobile phone"
                      width={900}
                      height={600}
                      sizes="(max-width: 840px) 100vw, 30vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </figure>
                </div>
              </div>

              <p>
                <a
                  className="button button-blue"
                  href="mailto:ellen@visualanguage.net?subject=My%20Family%20Story"
                >
                  Upload Your Story here
                </a>
              </p>
            </div>

            <div className="col-golden-right">
              <p>
                <br />
                To help write your story, here are some questions you can
                answer yourself or ask your parents, grandparents, or great
                grandparents:
              </p>

              <ul>
                <li>What year did you first come to the USA?</li>
                <li>What was your native country and why did you leave?</li>
                <li>How old were you at the time?</li>
                <li>What do you most remember about the journey?</li>
                <li>What were some memorable moments?</li>
                <li>Were there any scary moments?</li>
                <li>
                  Did you speak English at the time? If not, what was learning
                  it as a new language like?
                </li>
                <li>Was getting settled difficult?</li>
                <li>What was your first school or job in the USA?</li>
                <li>
                  Do you have advice for today&rsquo;s immigrants? And for
                  Americans who aren&rsquo;t from immigrant families?
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
