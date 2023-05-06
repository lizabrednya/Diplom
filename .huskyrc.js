// eslint-disable-next-line
module.exports = {
  hooks: {
    "pre-commit": ["tsc", "lint-staged"].join(" && "),
  },
};
