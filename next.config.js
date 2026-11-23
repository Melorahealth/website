/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Article covers on the home page come from the blog's media library.
    remotePatterns: [
      { protocol: "https", hostname: "blog.melorahealth.io", pathname: "/_emdash/api/media/file/**" }
    ]
  }
};

module.exports = nextConfig;
