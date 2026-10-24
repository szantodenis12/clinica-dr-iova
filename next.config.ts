import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Dev only: hide the floating "N" dev-tools badge (it sat over the hero kicker on phones and confused reviewers).
  // Compile / runtime errors are still shown.
  devIndicators: false,
  // Dev only: Next blocks /_next/* (JS chunks + HMR websocket) for any Host other than localhost. Opening the dev
  // server from a phone (LAN IP) or through a share tunnel left the page as unhydrated HTML, so React never attached
  // onClick (burger, FAQ, forms all dead). Allow LAN ranges + the usual tunnel domains.
  allowedDevOrigins: [
    "127.0.0.1",
    "192.168.*.*",
    "10.*.*.*",
    "172.*.*.*",
    "*.local",
    "*.trycloudflare.com",
    "*.ngrok-free.app",
    "*.ngrok-free.dev",
    "*.ngrok.io",
    "*.loca.lt",
    "*.devtunnels.ms",
  ],
};

export default nextConfig;
