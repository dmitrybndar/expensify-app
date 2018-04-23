const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const DotEnv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

if (process.env.NODE_ENV === 'production') {
  DotEnv.config({ path: '.env.development' });
}

module.exports = merge(common(process.env), {
  mode: 'production',
  devtool: 'source-map',
});
