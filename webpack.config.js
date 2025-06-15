/*global require, module, __dirname,  */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  //входной файл
  entry: {
    main: ['@babel/polyfill', './src/index.js'],
  },

  //выходной файл
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    port: 4200,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
    hot: true,
  },
  devtool: 'source-map',

  module: {
    rules: [
      //Подключение css
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
              esModule: false,
            },
          },
        ],
      },
      //Компилирую Sacss
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader',
          /* {
            loader: 'sass-loader', // compiles Sass to CSS, using Node Sass by default
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src/scss')],
              },
            },
          }, */
        ],
      },
      //обработка HTML (чтобы Webpack видел <img src="...">)
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      //обработка изображений
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]',
        },
      },
      //подключение шрифтов
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[path][name][ext]',
        },
      },
      //Подключение Babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              {
                useBuiltIns: 'entry',
                corejs: '3.22',
              },
            ],
          },
        },
      },
    ],
  },
  plugins: [
    //Подключаем файл html, стили и скрипты встроятся автоматически
    new HTMLWebpackPlugin({
      template: './src/index.html',
      inject: true,
      filename: 'index.html',
      minify: {
        collapseWhitespace: false,
      },
    }),
    // Кладу стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    // Копирую картинки
    new CopyPlugin({
      patterns: [
        {
          from: './src/img',
          to: 'img',
        },
      ],
    }),

    // очищаю dist
    new CleanWebpackPlugin(),
  ],
};
