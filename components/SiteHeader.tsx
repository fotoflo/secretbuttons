"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const menu = [
  { href: "/", label: <span>Home</span> },
  {
    href: "/about-the-book",
    label: (
      <span>
        About <span className="break-line">the Book</span>
      </span>
    ),
  },
  {
    href: "/download-the-study-guide-and-teachers-guide",
    label: (
      <span>
        The Study <span className="break-line">Guide and</span> the Teacher&rsquo;s{" "}
        <span className="break-line">Guide</span>
      </span>
    ),
  },
  {
    href: "/shareyour-family-story",
    label: (
      <span>
        Share Your <span className="break-line">Family</span> Story
      </span>
    ),
  },
  {
    href: "/share-your-art",
    label: (
      <span>
        Share <span className="break-line">Your Art</span>
      </span>
    ),
  },
  {
    href: "/how-to-order",
    label: (
      <span>
        How <span className="break-line">to Order</span>
      </span>
    ),
  },
];

export default function SiteHeader({ title }: { title?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      {title ? (
        <div className="entry-title-area">
          <h1>{title}</h1>
        </div>
      ) : null}
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen(!open)}
      >
        ☰ Menu
      </button>
      <nav
        id="primary-nav"
        className={`nav-primary${open ? " open" : ""}`}
        aria-label="Main"
      >
        <ul>
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
