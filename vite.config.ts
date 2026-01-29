import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      // PERBAIKAN DISINI:
      // Kita perlu mengizinkan root directory (path.resolve(__dirname))
      // agar Vite bisa mengakses 'index.html', 'node_modules', dll.
      allow: [
        path.resolve(__dirname), // Mengizinkan folder proyek saat ini
      ],
      // Deny list tetap dipertahankan untuk keamanan (agar kode server/.env tidak bocor ke frontend)
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      // Pastikan createServer() mengembalikan instance app express yang valid
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}