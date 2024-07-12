import { defineConfig } from "vite";
import postcss from "postcss";
import purgeCSSPlugin from "@fullhuman/postcss-purgecss";
import postCSSSortMediaQueries from "postcss-sort-media-queries";

export default defineConfig({
  plugins: [
    // postcss({
    //   plugins: [
    //     purgeCSSPlugin({
    //       content: ["./*.html"],
    //     }),
    //     postCSSSortMediaQueries()
    //   ],
    // }),
  ],
});
