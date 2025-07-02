import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    transformer: "postcss", // ✅ Disable lightningcss to avoid native .node crash
  },
});
