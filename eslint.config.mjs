import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from 'eslint-plugin-i18next';


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      languageOptions: {
          globals: globals.browser,
      },
      settings:{
          react: {
            version: "detect",
          }
      },
        rules: {
            "react/jsx-indent": [2, 4],
            "react/jsx-filename-extension": [2, {
                extensions: [".js", ".jsx", ".ts", ".tsx"]
            }],
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    i18next.configs['flat/recommended'],
];