import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    ssr: {
        noExternal: [
            "@jetbrains/kotlin-web-site-ui",
            "@rescui/icons",
            "@rescui/focus-manager",
            "@rescui/tab-list",
            "@rescui/button",
            "@rescui/typography",
            "@rescui/ui-contexts",
            "@rescui/input",
            "@rescui/tooltip",
            "@rescui/card",
            "@rescui/checkbox",
            "@rescui/colors",
            "@rescui/switcher",
        ],
    },
    optimizeDeps: {
        include: ["@jetbrains/kotlin-web-site-ui/dist/header.js"],
    },
});

