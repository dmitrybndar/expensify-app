const merge = require('webpack-merge');
const common = require('./webpack.common.js');

process.env.NODE_ENV = process.env.NODE_ENV || 'propduction';

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
}); 