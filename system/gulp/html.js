import conf from '../config';

import gulp from 'gulp'; 
import gulpLoadPlugins from 'gulp-load-plugins';
import chalk from 'chalk';
import browserSync from 'browser-sync';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('reload', () => {
    reload();
})

gulp.task('pug:dev', () => {
    console.log(chalk.gray.bgRed.bold('pug:dev--->'));
    gulp.src([
        `${conf.src}/**/!(_)*.pug`
      ])
        .pipe($.plumber({
            errorHandler: $.notify.onError("Error: <%= error.message %>")
        }))
        .pipe($.pug({
            pretty: true,
            cache: true
        }))
        .pipe(gulp.dest(conf.dist))
});

gulp.task('pug:prod', () => {
    console.log(chalk.gray.bgRed.bold('pug:prod--->'));
    return gulp.src([
        `${conf.src}/**/!(_)*.pug`
      ])
        .pipe($.plumber({
            errorHandler: $.notify.onError("Error: <%= error.message %>")
        }))
        .pipe($.pug({
            pretty: false,
            cache: false
        }))
        .pipe(gulp.dest(process.env.NODE_ENV))
});
