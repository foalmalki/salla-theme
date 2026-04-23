const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/assets/scripts/main.js"),
    product: path.resolve(__dirname, "src/assets/scripts/product.js"),
    cart: path.resolve(__dirname, "src/assets/scripts/cart.js")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  }
};
