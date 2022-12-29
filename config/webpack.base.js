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
        use:["thread-loader","babel-loader"]
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     // 预设执行顺序由右往左,所以先处理ts,再处理jsx
        //     presets: [
        //       '@babel/preset-react',
        //       '@babel/preset-typescript'
        //     ]
        //   }
        // }
      },
      {
        test: /.(css|less)$/, // css文件
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader']
      },
      {
        test:/.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/images/[name][ext]', // 文件输出目录和命名
        },
      },
      {
        test:/.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/fonts/[name][ext]', // 文件输出目录和命名
        },
      },
      {
        test:/.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64位
          }
        },
        generator:{ 
          filename:'static/media/[name][ext]', // 文件输出目录和命名
        },
      },
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
  ],
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
};