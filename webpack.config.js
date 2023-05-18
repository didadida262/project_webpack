/*
 * @Author: Hhvcg
 * @Date: 2022-02-20 15:26:48
 * @LastEditors: Hhvcg
 */
const chalk = require('chalk')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
// console.log('ProgressBarPlugin>>>', ProgressBarPlugin)
// const resolve = dir => path.join(__dirname, dir)
// const webpack = require('webpack')
// const name = 'dadadadad!!!'
module.exports = {
  // entry: './src/main.js',
  mode: 'development',
  // entry: path.join(__dirname, './public/index.html'),
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          // {
          //   loader: 'css-loader',
          //   options: {
          //     importLoaders: 2
          //   }
          // },
          'sass-loader',
          'postcss-loader'
        ]
      },

      {
        test: /\.(png|jpg|svg|gif|webp|JPG|jpe)$/,
        type: 'assets',
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024
          }
        },
        generator: {
          filename: 'assets/[hash:8].[name][ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.js',
      '@': path.resolve(__dirname, 'src')
    },
    fallback: {
      path: require.resolve('path-browserify')
    }
  },
  plugins: [
    // new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash:8].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('public/index.html'),
      inject: 'body',
      minify: {
        removeComments: true, // 移除HTML中的注释
        collapseWhitespace: true, // 删除空符与换符
        minifyCSS: true// 压缩内联css
      },
      options: {
        url: 'src/asstes'
      }
    }),

    // 进度条
    new ProgressBarPlugin({
      width: 50, 					 // 默认20，进度格子数量即每个代表进度数，如果是20，那么一格就是5。
      format: chalk.blue.bold("build") + chalk.yellow('[:bar] ') + chalk.green.bold(':percent') + ' (:elapsed秒)',
      stream: process.stderr,        // 默认stderr，输出流
      complete: "#",                 // 默认“=”，完成字符
      clear: false,                  // 默认true，完成时清除栏的选项
      renderThrottle: "",            // 默认16，更新之间的最短时间（以毫秒为单位）
      callback() {                   // 进度条完成时调用的可选函数
        console.log(chalk.green.bold("Executing Done!!!"))
      }
    })
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9528,
    allowedHosts: 'all'
  }

}
