var gulp = require('gulp'),
    watch = require('gulp-watch'),
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    cssvars = require('postcss-simple-vars'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync').create(),
    nested = require('postcss-nested');

gulp.task('default', function () {
    console.log('gulp');
});
gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
           .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
           .pipe(gulp.dest('./app/temp/styles'));
});
gulp.task('watch', function () {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    watch('./app/index.html', function () {
        browserSync.reload();
    })
    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');
    })
});
gulp.task('build', function () {
    return gulp.src('./app/**/*.html')
           .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
           .pipe(gulp.dest('./app/temp/styles'));
});
gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});