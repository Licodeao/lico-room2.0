module.exports = {
  locales: ["en", "zh"],
  sourceLocale: "en",
  fallbackLocales: {
    default: "en",
  },
  catalogs: [
    {
      path: "src/translations/locales/{locale}/messages",
      include: ["pages", "components"],
    },
  ],
  format: "po",
};
