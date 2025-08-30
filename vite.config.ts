import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/bucher-santa-rita-web/",   // 👈 EXACTO: tu nombre de repo
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
