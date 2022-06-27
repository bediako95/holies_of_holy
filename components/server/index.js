const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://holies-of-holies-gtnrhtvud-bediako95.vercel.app";
