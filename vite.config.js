import { defineConfig } from "vite";

export default defineConfig({
    base: "./", // Relative asset paths, so dist/ works on GitHub Pages subfolders
    build: {
        assetsInlineLimit: 0,
    },
});
