import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./tests/setup.js",
	},
	resolve: {
		alias: {
			src: "/src",
			components: "/src/components",
			assets: "/src/assets",
			services: "/src/services",
			utils: "/src/utils",
		},
	},
});
