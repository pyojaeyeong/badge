const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "scss/_variables.scss"; @import "scss/_mixins.scss";`,
  },
};

module.exports = nextConfig;
