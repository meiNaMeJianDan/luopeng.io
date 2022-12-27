const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 打包文件入口
  entry: path.join(__dirname, "../src/index.tsx"), // 入口文件
  // 打包文件出口
  output: {
    filename: "static/js/[name].js", // 每个输出js的名称
    path: path.join(__dirname, "../dist"), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: "/", // 打包后文件的公共前缀路径
    
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
        use: {
          loader: 'babel-loader',
          options: {
            // 预设执行顺序由右往左,所以先处理ts,再处理jsx
            presets: [
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /.(css|less)$/, // css文件
        use: ['style-loader','css-loader','less-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
    alias:{
      "@":path.join(__dirname,"../src"),
      "@public":path.join(__dirname,"../public"),
      "@pages":path.join(__dirname,"../src/pages")
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    }),
  ]
};