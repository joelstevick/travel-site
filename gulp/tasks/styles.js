var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    mixins = require('postcss-mixins'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import');

gulp.task('styles', function () {
    return gulp.src('./app/assets/styles/styles.css')
           .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
           .on('error', function(errorInfo) {
           		console.log(errorInfo.toString());
           		this.emit('end');
           })
           .pipe(gulp.dest('./app/temp/styles'));
});