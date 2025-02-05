import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename, "src");
console.log(__dirname);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  rules: {
    // Downgrade specific rules from 'error' to 'warn'
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-no-comment-textnodes": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    // ... other rules
  },
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
