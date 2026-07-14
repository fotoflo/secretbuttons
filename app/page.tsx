import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader title="Welcome To" />
      <div className="site-inner">
        <main className="entry-content">
          <figure className="aligncenter moveup">
            <Image
              src="/images/the_secret_buttons_banner-1.png"
              alt="The Secret Buttons — a book by Ellen M. Shapiro, illustrated by Caterina Baldi"
              width={1554}
              height={1307}
              priority
              sizes="(max-width: 1554px) 100vw, 1554px"
              style={{ width: "100%", height: "auto" }}
            />
          </figure>
        </main>
      </div>
    </>
  );
}
