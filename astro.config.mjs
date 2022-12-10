import { defineConfig } from "astro/config"
import svelte from "@astrojs/svelte"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: 'https://altgenpass.vercel.app/',
  integrations: [svelte(), tailwind()]
})
