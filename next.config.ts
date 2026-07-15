import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old WordPress paths that may still be linked or indexed
      { source: "/feed", destination: "/", permanent: true },
      { source: "/feed/:path*", destination: "/", permanent: true },
      { source: "/comments/:path*", destination: "/", permanent: true },
      {
        source:
          "/wp-content/uploads/2026/07/The-Secret-Buttons-Study-Guide_SlideShow-1.pdf",
        destination: "/downloads/The-Secret-Buttons-Study-Guide_SlideShow-1.pdf",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2026/07/The-Secret-Buttons-Teachers-Guide.pdf",
        destination: "/downloads/The-Secret-Buttons-Teachers-Guide.pdf",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2026/07/Teachers-Guide-to-The-Secret-Buttons.pdf",
        destination: "/downloads/Teachers-Guide-to-The-Secret-Buttons.pdf",
        permanent: true,
      },
      {
        source: "/download-the-study-guide-and-teachers-guide/:rest*",
        destination: "/download-the-study-guide-and-teachers-guide",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
