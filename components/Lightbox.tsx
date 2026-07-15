"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Lightbox({
  src,
  alt,
  width,
  height,
  sizes,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  caption?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        className="lightbox-trigger"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          style={{ width: "100%", height: "auto" }}
        />
      </button>
      {open && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <button
            className="lightbox-close"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} />
          {caption ? <p>{caption}</p> : null}
        </div>
      )}
    </>
  );
}
