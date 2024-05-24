import { defineIntegration, addVirtualImports } from "astro-integration-kit";
import { configSchema } from "./config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

export default defineIntegration({
  name: "starlight-utils-integration",
  optionsSchema: configSchema,
  setup({ name, options }) {
    return {
      hooks: {
        "astro:config:setup": (params) => {
          addVirtualImports(params, {
            name,
            imports: {
              "virtual:starlight-utils/config": `export default ${JSON.stringify(
                options
              )}`,
            },
          });

          if (options?.headingLinks) {
            params.updateConfig({
              markdown: {
                rehypePlugins: [
                  rehypeHeadingIds,
                  [
                    rehypeAutolinkHeadings,
                    {
                      behavior: "wrap",
                    },
                  ],
                ],
              },
            });
          }
        },
      },
    };
  },
});
