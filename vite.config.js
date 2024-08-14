import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Menambahkan alias '@' untuk folder src
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Sesuaikan batas ukuran chunk sesuai kebutuhan
  },
});
