import path from 'path';

import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes';
import mixin from 'postcss-mixins';
import easing from 'postcss-easings';
import csswring from 'csswring';
import reporter from 'postcss-reporter';
import conf from './system/config';


const postcssImport = require('postcss-import');

const postCSSLoaderOptions = {
  plugins: loader => [
    postcssImport({ root: loader.resourcePath }),
    flexbugs(),
    easing(),
    mixin(),
    autoprefixer(
      { browsers: conf.browsers },
    ),
    csswring(),
    reporter()
  ]
};

export default {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: path.join(__dirname, conf.src)
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
          failOnWarning: true
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: postCSSLoaderOptions
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};
