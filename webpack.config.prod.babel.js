
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import saveLicense from 'uglify-save-license';

import baseConfig from './webpack.config.base.babel';

const entries = {
  'script/index': [
    './src/script/index.js',
  ],
};

export default merge(baseConfig, {
  entry: entries,

  output: {
    path: `${path.resolve('')}/${process.env.NODE_ENV}`,
    filename: '[name].bundle.js',
  },
  mode: 'production',
  performance: { hints: false },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          beautify: false,
          comments: saveLicense,
        },
        ie8: false,
        warnings: false,
      },
    }),
  ],
});
