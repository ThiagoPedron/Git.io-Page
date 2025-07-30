const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Definindo o caminho base automaticamente
const repoName = "Git.io-Page"; // 🔹 Substitua pelo nome exato do seu repositório
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: isProd ? `/${repoName}/` : "/", // 🔹 dinâmico
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
    historyApiFallback: true, // 🔹 fallback para rotas locais
  },
};
