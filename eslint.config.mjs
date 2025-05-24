import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react-hooks/exhaustive-deps": "off", // Disables dependency array warning
      "@next/next/no-img-element": "off", // Allows using <img> instead of <Image />
      "no-console": "warn", // Changes console.log() from error to warning
      "react/no-unescaped-entities": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off", // Disable unused variables rule
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
