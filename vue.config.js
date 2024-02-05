const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  css: {
    loaderOptions: {
      postcss: {
        sourceMap: true,
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
  },
  transpileDependencies: ["vue", "tailwindcss"],
});
