import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// در حالت dev از ریشه سرو می‌شود. نسخهٔ انتشار روی GitHub Pages زیر /museum/ است.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/museum/" : "/",
  plugins: [react()],
  server: { port: 5174, host: "127.0.0.1" },
}));
