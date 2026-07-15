import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Order" };

const AMAZON_URL =
  "https://www.amazon.com/Secret-Buttons-Ellen-M-Shapiro-ebook/dp/B0F5ZCPHXH";

export default function Order() {
  return (
    <>
      <SiteHeader title="Order" />
      <div className="site-inner">
        <main id="main-content" className="entry-content">
          <h2>
            <a
              className="text-red"
              href={AMAZON_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              on Amazon.
            </a>
          </h2>

          <p>
            Signed copies and discounted bundles for schools and libraries
            available at
          </p>

          <p>
            <a
              href="https://TheAlphagramShop.etsy.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              TheAlphagramShop.etsy.com
            </a>
          </p>

          <div className="row" style={{ marginTop: 40 }}>
            <div className="col-half">
              <h3 className="text-blue">Please</h3>
              <ul>
                <li className="li-black" style={{ fontSize: 22 }}>
                  Tell your friends, relatives, classmates, teachers, and
                  librarian about <em>The Secret Buttons</em>.
                </li>
                <li className="li-black" style={{ fontSize: 22 }}>
                  Leave a review on Amazon or on Goodreads.
                </li>
                <li className="li-black" style={{ fontSize: 22 }}>
                  Ask your local bookstore to stock and display it. They can
                  order through Ingram.
                </li>
                <li className="li-black" style={{ fontSize: 22 }}>
                  Invite me to an in-person or Zoom event with your school or
                  group.
                </li>
              </ul>

              <h3 className="text-blue">and Thank You!</h3>

              <p>Questions? Comments? Contact me at</p>
              <p>
                <a href="mailto:ellen@visualanguage.net">
                  ellen@visualanguage.net
                </a>{" "}
                &nbsp;914-374-8133
              </p>
            </div>

            <div className="col-half">
              <figure className="aligncenter">
                <Image
                  src="/images/the_secret_buttons_paperback_and_hardback.jpg"
                  alt="The Secret Buttons paperback and hardback editions"
                  width={1000}
                  height={738}
                  sizes="(max-width: 840px) 100vw, 45vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </figure>
            </div>
          </div>

          <div className="row" style={{ marginTop: 40 }}>
            <div className="col-half">
              <p className="text-blue">
                <strong>HARDCOVER</strong>
              </p>
              <p>8 3/4 x 10</p>
              <p>Cloth binding with gold stamping on spine Endpapers</p>
              <p>Color illustrations on fine European paper</p>
              <p>
                <strong>$27.95</strong>
              </p>
            </div>
            <div className="col-half">
              <p className="text-blue">
                <strong>PAPERBACK</strong>
              </p>
              <p>5 1/2 x 8.25</p>
              <p>Black-and-white throughout</p>
              <p>
                <strong>$10.50</strong>
              </p>
            </div>
          </div>

          <div className="row" style={{ marginTop: 30 }}>
            <div className="col-half">
              <p className="text-blue">
                <strong>PREMIUM SOFTCOVER</strong>
              </p>
              <p>8 3/4 x 10</p>
              <p>Same inside pages as Hardcover</p>
              <p>Heavy laminated paper cover</p>
              <p>Color illustrations</p>
              <p>
                <strong>$22.95</strong>
              </p>
            </div>
            <div className="col-half">
              <p className="text-blue">
                <strong>EBOOK</strong>
              </p>
              <p>Kindle edition</p>
              <p>with color illustrations</p>
              <p>on Amazon</p>
              <p>
                <strong>$8.95</strong>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
