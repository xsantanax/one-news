/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s2-g1.glbimg.com",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
}

export default nextConfig
