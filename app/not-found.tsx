import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader title="Oops!" />
      <div className="site-inner">
        <main id="main-content" className="entry-content">
          <h2 className="text-blue">That page seems to be a secret.</h2>
          <p>
            We couldn&rsquo;t find the page you were looking for. Try the{" "}
            <Link href="/">home page</Link> or pick a page from the menu above.
          </p>
          <div style={{ height: 120 }} aria-hidden="true" />
        </main>
      </div>
    </>
  );
}
