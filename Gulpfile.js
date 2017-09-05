'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
});

gulp.task('pug', function () {
  return gulp.src('src/pug/**/!(_)*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('imagemin', function () {
  return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
});

gulp.task('js', function () {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(gulp.dest('./dist'))
});

gulp.task('ico', function () {
  return gulp.src('./src/**/*.ico')
    .pipe(gulp.dest('./dist'))
});

gulp.task('default',['pug', 'sass', 'js','imagemin','ico'], function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch('./src/pug/**/*.pug', ['pug']);
  gulp.watch('./src/img/**/*', ['imagemin']);
  gulp.watch('./src/scripts/**/*.js',['js'])
  gulp.watch('./src/**/*.ico',['ico'])
});