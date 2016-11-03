var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    cssvars = require('postcss-simple-vars'),
    cssImport = require('postcss-import'),
    nested = require('postcss-nested');

gulp.task('default', function () {
    console.log('gulp');
});
gulp.task('html', function () {
    console.log('html task');
});
gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
           .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
           .pipe(gulp.dest('./app/temp/styles'));
});
gulp.task('watch', function () {
    watch('./app/index.html', function () {
        gulp.start('html');
    })
    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    })
});