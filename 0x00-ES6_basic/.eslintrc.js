module.exports = {
  // Define the environments where your code will run
  env: {
    // Code is not running in a browser
    browser: false,
    // Supports ES6 features
    es6: true,
    // Includes Jest testing framework
    jest: true,
  },

  // Extend existing configurations to enforce specific rules
  extends: [
    // Enforce the Airbnb JavaScript style guide
    "airbnb-base",
    // Set up Jest-specific linting rules
    "plugin:jest/all",
  ],

  // Define global variables available in your code
  globals: {
    // 'Atomics' variable is read-only (cannot be modified)
    Atomics: "readonly",
    // 'SharedArrayBuffer' variable is read-only
    SharedArrayBuffer: "readonly",
  },

  // Specify the version of ECMAScript (JavaScript) used and the source type (module)
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  // List the plugins that extend ESLint functionality
  plugins: ["jest"],

  // Define the linting rules to be applied to your code
  rules: {
    // Allow the use of 'console' statements in your code (no linting errors)
    "no-console": "off",

    // Allow variables to have the same name as variables in enclosing scopes (no variable shadowing)
    "no-shadow": "off",

    // Report an error when using 'LabeledStatement' and 'WithStatement' constructs
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
  },

  // Provide specific configurations for certain files or file patterns
  overrides: [
    {
      // Apply to all '.js' files
      files: ["*.js"],
      // Exclude 'babel.config.js' from these rules
      excludedFiles: "babel.config.js",
    },
  ],
};
