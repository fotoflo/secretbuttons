"use client";

import { usePathname } from "next/navigation";

const SITE = "https://secretbuttons.vercel.app";

export default function ShareButtons({ text }: { text: string }) {
  const pathname = usePathname();
  const url = `${SITE}${pathname}`;
  const enc = encodeURIComponent;

  const links = [
    {
      label: "Share by Email",
      href: `mailto:?subject=${enc(text)}&body=${enc(`${text}\n\n${url}`)}`,
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}`,
    },
  ];

  return (
    <p className="share-buttons">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer noopener"
          onClick={() =>
            window.gtag?.("event", "share", { method: l.label, page: pathname })
          }
        >
          {l.label}
        </a>
      ))}
    </p>
  );
}
