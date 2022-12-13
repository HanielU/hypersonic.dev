// @unocss-include
import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: ["flex items-center cursor-pointer text-white font-medium rounded-full bg-neutral-7"],
  variants: {
    type: {
      "with-icon": ["[&>div]:mr-1 py-1 px-2 pr-2.4"],
    },
  },
  defaultVariants: {},
});

export const buttonWithIcon = button({ type: "with-icon" });
