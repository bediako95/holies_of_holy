const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://holies-of-holy-hcqp5gqej-bediako95.vercel.app";
