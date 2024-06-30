import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// vite.config.js

// https://vitejs.dev/config/
export default defineConfig({
	assetsInclude: ['**/*.html'],
	plugins: [react()],
	server: {
		port: 3000,
		// Get rid of the CORS error
		proxy: {
			"/api": {
				target: "http://localhost:5000",
				changeOrigin: true,
				secure: false,
			},
		},
	},
});
