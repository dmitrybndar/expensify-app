const merge = require('webpack-merge');
const DotEnv = require('dotenv');
const common = require('./webpack.common.js');
const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  DotEnv.config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  DotEnv.config({ path: '.env.development' });
}

module.exports = merge(common(process.env), {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    host: '192.168.1.101',
    publicPath: '/dist/',
  },
});
