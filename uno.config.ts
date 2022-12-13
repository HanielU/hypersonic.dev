import {
  defineConfig,
  extractorSvelte,
  presetIcons,
  presetUno,
  presetAttributify,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

import { colorResolver } from "@unocss/preset-mini/utils";

// https://github.com/unocss/unocss/tree/main/packages/vite
// https://github.com/unocss/unocss/tree/main/packages/vite#svelte
// https://github.com/unocss/unocss/tree/main/packages/preset-uno
// https://github.com/unocss/unocss/tree/main/packages/preset-attributify
// https://github.com/unocss/unocss/tree/main/packages/preset-icons
// https://github.com/unocss/unocss/tree/main/packages/transformer-directives
// https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group

// https://github.com/unocss/unocss#configurations
export default defineConfig({
  extractors: [extractorSvelte],
  include: ["./**/*.svelte", "./**/*.ts"],
  // https://github.com/unocss/unocss#extend-theme
  theme: {
    breakpoints: {
      sm: "490px",
      md: "640px",
    },
  },

  // https://github.com/unocss/unocss#custom-rules
  rules: [
    // firefox-scrollbar-width
    [/^f-scrollbar-w-(auto|thin|none)$/, ([, v]) => ({ "scrollbar-width": `${v}` })],
    [
      // firefox-scrollbar-color
      /^f-scrollbar-c-(.+)$/,
      colorResolver("scrollbar-color", "f-scrollbar-c"),
      { autocomplete: "f-scrollbar-c-$colors" },
    ],
  ],

  // https://github.com/unocss/unocss#shortcuts
  shortcuts: [
    // use when width and height values are the same
    [/^square-(.*)$/, ([, v]) => `h-${v} w-${v}`],
    {
      "click-spring": "transition-all-250 active:(scale-80) transform-gpu",
    },
  ],

  variants: [
    matcher => {
      const [m1, m2, m3] = ["scrollbar:", "scrollbar-track:", "scrollbar-thumb:"];
      let matchedStr = "";

      if (matcher.startsWith(m1)) {
        matchedStr = m1;
      } else if (matcher.startsWith(m2)) {
        matchedStr = m2;
      } else if (matcher.startsWith(m3)) {
        matchedStr = m3;
      } else {
        return matcher;
      }

      return {
        matcher: matcher.slice(matchedStr.length),
        selector: s =>
          `${s}::-webkit-scrollbar${
            matchedStr == m2 ? "-track" : matchedStr == m3 ? "-thumb" : ""
          }`,
      };
    },
  ],

  // https://github.com/unocss/unocss#using-presets
  presets: [
    presetUno(),
    presetIcons({ scale: 1.2 }),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        sans: "Nunito Sans",
        // hat: "Red Hat Display",
        // exo: "Exo",
        // que: "Questrial",
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
