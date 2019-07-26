// 使用 react-app-rewired 自定义 webpack 配置
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = function override(config, env) {
  // 配置别名
  config.resolve.alias = {
    "@": resolve("src")
  };

  return config;
};
