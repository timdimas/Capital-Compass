import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://timdimas.github.io/",
    base: "Capital-Compass",
    integrations: [tailwind()],
});
