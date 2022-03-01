module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:@next/next/recommended", "google", "prettier"],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "require-jsdoc": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
  },
  settings: {
    react: {
      version: "999.999.999",
    },
  },
};
