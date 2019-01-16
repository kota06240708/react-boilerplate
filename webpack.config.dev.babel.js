import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import PrettierPlugin from 'prettier-webpack-plugin';

import conf from './system/config';
import baseConfig from './webpack.config.base.babel';

const entries = {
    'script/index': [
        'webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr',
        './src/script/index.js'
    ]
};

export default merge(baseConfig, {
    mode: 'development',
    entry: entries,
    devtool: 'cheap-module-source-map',
    output: {
        path: `${path.resolve('')}/${conf.dist}`,
        publicPath: '/',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map'
    },
    plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: ['You application is running here http://localhost:8080'],
                notes: ['Some additionnal notes to be displayed unpon successful compilation']
            },
            clearConsole: true
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new PrettierPlugin()
	]
});
  
