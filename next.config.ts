const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./src/styles"],
    prependData: `@use "@/styles/abstracts/_variables.scss" as *;
                  @use "@/styles/abstracts/_colors.scss" as *;`,
  },
  i18n,
};
