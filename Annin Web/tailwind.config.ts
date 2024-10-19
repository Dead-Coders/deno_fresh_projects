import { type Config } from "tailwindcss";
import catppuccin from "@catppuccin/tailwindcss";

export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Major Mono Display", "monospace"],
      sans: ["Space Mono", "monospace"],
    },
    extend: {
      backgroundImage: () => ({
        "github-mark": "url('/github-mark.svg')",
        "github-mark-white": "url('/github-mark-white.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  // deno-lint-ignore no-explicit-any
  plugins: [catppuccin as any],
} satisfies Config;
