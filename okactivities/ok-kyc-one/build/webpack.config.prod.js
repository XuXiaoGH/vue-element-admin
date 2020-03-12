const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const env = require('./prod.env');
const base = require('./webpack.config.base');
const config = require('./config');
const util = require('./util');

let publicPath;
const versionPath = process.env.IS_OVERRIDE ? '' : `${util.getVersion()}/`;
const projectPath = util.getProjectPath();
/**
 * 云构建的正式发布按照正常链接拼接
 * 云构建的日常环境按照日超链接拼接
 * 本地构建按照正式环境拼接
 */
if (process.env.ASSETS_BUILD_TYPE === 'publish' || !process.env.ASSETS_BUILD_TYPE) {
  publicPath = `${config.publish.publicBasePath}${projectPath}/${versionPath}`;
} else if (process.env.ASSETS_BUILD_TYPE === 'prepub') {
  publicPath = `${config.prepub.publicBasePath}${projectPath}/${versionPath}`;
} else if (process.env.ASSETS_BUILD_TYPE === 'daily') {
  publicPath = `${config.daily.publicBasePath}${projectPath}/${versionPath}`;
}

base.output.publicPath = publicPath;

// 增加block strip能力
base.module.rules.forEach((item) => {
  if (item.use && item.use[0] === 'eslint-loader') {
    item.use.unshift('@ok/strip-block-loader');
    item.use.unshift('@ok/strap-react-hot-loader');
  }
});

base.plugins.unshift(
  new CleanWebpackPlugin([path.resolve(__dirname, '../dist')], {
    root: path.resolve(__dirname, '../')
  }),
  new webpack.DefinePlugin({
    'process.env': env
  }),
  // new BundleAnalyzerPlugin()
);

const isDaily = process.env.ASSETS_BUILD_TYPE === 'daily';

if (isDaily) {
  base.devtool = 'source-map';
}

module.exports = Object.assign(base, {
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  optimization: {
    concatenateModules: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: isDaily
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
      })
    ]
  }
});
