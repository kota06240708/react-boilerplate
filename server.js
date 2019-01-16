import conf from './system/config';
import gulp from 'gulp'; 
import browserSync from 'browser-sync';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.dev.babel';
import './system/gulp/html';

const defaultStatsOptions = {
    colors: true,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: true,
    version: true,
    cached: true,
    cachedAssets: true,
    reasons: true,
    source: true,
    errorDetails: true
};

const bundle = webpack(webpackConfig);

browserSync({
    notify         : false,
    port           : 8080,
    open           : false,
    reloadOnRestart: true,
    server: {
        baseDir: [`${path.resolve('')}/${conf.src}`, `${path.resolve('')}/${conf.dist}`],
        middleware: [
            webpackDevMiddleware(bundle, {
                publicPath: webpackConfig.output.publicPath,
                stats: defaultStatsOptions                    
            }),
            webpackHotMiddleware(bundle)
        ]
    }
});

gulp.run('pug:dev');
gulp.watch('./src/**/*.pug', ['pug:dev', 'reload']);