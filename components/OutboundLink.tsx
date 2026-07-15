"use client";

/** External link that reports an outbound_click GA4 event (Amazon, Etsy, …). */
export default function OutboundLink({
  href,
  destination,
  className,
  children,
}: {
  href: string;
  destination: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
      onClick={() =>
        window.gtag?.("event", "outbound_click", {
          destination,
          link_url: href,
        })
      }
    >
      {children}
    </a>
  );
}
