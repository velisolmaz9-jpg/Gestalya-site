import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // "/" convient au déploiement GitHub Pages avec domaine personnalisé
  // (gestalya.fr, via public/CNAME). Si le site est un jour servi sans
  // domaine personnalisé sur https://<user>.github.io/<repo>/, remplacez
  // par base: "/<repo>/" et ajustez pathSegmentsToKeep dans public/404.html.
  base: "/",
});
