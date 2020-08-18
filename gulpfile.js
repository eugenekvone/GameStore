const gulp = require('gulp'),
concat = require('gulp-concat'),
sass = require('gulp-sass'),
cleanCSS = require('gulp-clean-css'),
uglify = require('gulp-uglify');

const scssFiles = [
	'./src/scss/vars.scss',
	'./src/scss/**/*.scss'
]

function styles() {
	return gulp.src(scssFiles)
		.pipe(concat('All.scss'))
		.pipe(sass())
		.pipe(cleanCSS({
			level: 2
		}))
		.pipe(gulp.dest('./src'))
}

function watch() {
    gulp.watch('src/scss/*.scss', styles)
}

function build() {
	return styles()
}

gulp.task('styles', styles);
gulp.task('watch', watch);
gulp.task('build', build);
