import globals from "globals";

export default [
  {
    ignores: ["build/"], // Ignorar la carpeta build si es necesario
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: globals.browser,
    },
    rules: {
      semi: ["error", "always"],
    },
  },
];