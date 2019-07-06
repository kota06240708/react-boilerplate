import gulp from 'gulp';
import conf from '../config';

gulp.task('build',
	gulp.series(
		'pug:prod',
		() => {
			return gulp
				.src(`./${conf.src}/**/*.+(jpg|jpeg|png|gif|svg)`)
				.pipe(gulp.dest(process.env.NODE_ENV));
		},
		'js:prod'
	)
);
