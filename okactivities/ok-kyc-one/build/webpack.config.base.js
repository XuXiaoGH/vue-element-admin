const path = require('path');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const src = path.resolve(__dirname, '../src');

const base = {
  entry: {
    index: path.resolve(src, 'index.js')
  },
  output: {
    filename: 'index.js',
    chunkFilename: 'common/[chunkhash:8]/[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'eslint-loader'
      ],
      exclude: /node_modules/,
      enforce: 'pre',
    },
    {
      test: /\.(js|jsx)$/,
      use: 'happypack/loader',
      exclude: /node_modules\/(?!@ok\/)/,
    },
    {
      test: /\.css$/,
      use: [
        process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    },
    {
      test: /\.less$/,
      use: [
        process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    }, {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: { minimize: true }
        }
      ]
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'img/[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.less', '.jsx'],
    modules: [
      src,
      path.resolve(__dirname, '../node_modules'),
    ]
  },
  plugins: [
    process.env.NODE_ENV === 'production' ?
      new MiniCssExtractPlugin({
        filename: 'index.css',
        chunkFilename: 'common/[chunkhash:8]/[name].css'
      })
      : null,
    new HtmlWebpackPlugin({
      template: path.resolve(src, 'index.html'),
      filename: 'index.html'
    }),
    new HappyPack({
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  targets: ['> 1%', 'last 2 versions', 'IE >= 10'],
                  corejs: '3',
                }
              ],
              '@babel/preset-react'
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-nullish-coalescing-operator'
            ]
          }
        }
      ]
    })
  ]
};

base.plugins = base.plugins.filter((item) => {
  if (item !== null) {
    return item;
  }
  return false;
});

module.exports = base;
