const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    ["@comps"]: path.resolve(__dirname, "./src/components"),
    ["@store"]: path.resolve(__dirname, ".src/store"),
    ["@services"]: path.resolve(__dirname, "./src/services"),
  })
);
