import { sveltekit } from "@sveltejs/kit/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import type { UserConfig } from "vite";
import unocss from "unocss/vite";

const config: UserConfig = {
  plugins: [unocss(), vanillaExtractPlugin(), sveltekit()],
};

export default config;
