"use client";

import Image from "next/image";
import { useState } from "react";

/** Click-to-play YouTube embed: shows the thumbnail until clicked, so no
 *  YouTube scripts/cookies load unless the visitor asks for the video. */
export default function YouTubeEmbed({
  videoId,
  thumbnail,
  title,
}: {
  videoId: string;
  thumbnail: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div style={{ position: "relative", aspectRatio: "1200 / 710" }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      style={{
        display: "block",
        width: "100%",
        padding: 0,
        border: 0,
        background: "none",
        cursor: "pointer",
      }}
    >
      <Image
        src={thumbnail}
        alt={title}
        width={1200}
        height={710}
        sizes="(max-width: 840px) 100vw, 62vw"
        style={{ width: "100%", height: "auto" }}
      />
    </button>
  );
}
