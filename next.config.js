/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoibGljb2RlYW8yMTYiLCJhIjoiY2xkenAzNXoxMTNhcjNycDc4eHl4Y3ZoNiJ9.jkH4qiWqJjqdMPV1tJ6k_g",
  },
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
};
