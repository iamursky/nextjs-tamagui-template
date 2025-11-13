// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withTamagui } = require("@tamagui/next-plugin");

module.exports = function (name, { defaultConfig }) {
  const config = { ...defaultConfig };

  const tamaguiPlugin = withTamagui({
    config: "./src/tamagui.config.ts",
    components: ["tamagui"],
    appDir: true,
    outputCSS:
      process.env.NODE_ENV === "production" ? "./public/tamagui.css" : null,
    disableExtraction: process.env.NODE_ENV === "development",
  });

  return {
    ...config,
    ...tamaguiPlugin(config),
  };
};
