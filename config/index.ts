const isDev = process.env.NODE_ENV !== "production";

export const currentUrl = isDev
  ? "http://localhost:3000"
  : "https://first-next-13-app.vercel.app";
