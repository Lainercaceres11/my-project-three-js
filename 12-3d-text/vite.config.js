import { defineConfig } from "vite";
import restart from "vite-plugin-restart";

export default defineConfig({
  root: "src/", // Entrada desde src/index.html
  publicDir: "../static/", // Archivos estáticos
  server: {
    host: true,
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env),
  },
  build: {
    outDir: "../dist", // Salida fuera de src
    emptyOutDir: true,
    sourcemap: true,
  },
  base: "./", // ✅ Importante para rutas relativas correctas en producción
  plugins: [
    restart({
      restart: ["../static/**"],
    }),
  ],
});
