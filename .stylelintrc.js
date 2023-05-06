// eslint-disable-next-line
module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-css-modules",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-no-unsupported-browser-features", "stylelint-order"],
};
