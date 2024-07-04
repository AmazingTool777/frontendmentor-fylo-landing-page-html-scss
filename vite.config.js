import { defineConfig } from "vite";
import postcss from "postcss";
import purgeCSSPlugin from "@fullhuman/postcss-purgecss";

export default defineConfig({
  plugins: [
    // postcss({
    //   plugins: [
    //     purgeCSSPlugin({
    //       content: ["./*.html"],
    //     }),
    //   ],
    // }),
  ],
});
