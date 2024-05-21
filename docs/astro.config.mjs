import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLinksValidatorPlugin from "starlight-links-validator";

// https://astro.build/config
export default defineConfig({
  site: "https://starlight-utils.pages.dev",
  integrations: [
    starlight({
      title: "🧰 Starlight Utils",
      social: {
        github: "https://github.com/lorenzolewis/starlight-utils",
      },
      sidebar: [
        {
          label: "Docs",
          autogenerate: { directory: "/docs" },
        },
        {
          label: "References",
          autogenerate: { directory: "/references" },
        },
      ],
      plugins: [starlightLinksValidatorPlugin()],
    }),
  ],
});
