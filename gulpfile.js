'use strict';

var gulp = require('gulp'),
    image = require('gulp-image');

var imagefiles = ['src/images/*'];

gulp.task('image', function () {
  gulp.src(imagefiles)
    .pipe(image())
    .pipe(gulp.dest('dest/images'));
});

gulp.task('watch', function() {
    gulp.watch(imagefiles, ['image']);
});
