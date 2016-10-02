var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');


var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var reload = browserSync.reload();

var JS_SRC = './pre/js/*.js';
var JS_SRC_CONCAT = './pre/js/concat/*.js';
var JS_DEST = 'public/js';

var IMG_SRC = 'pre/img/*';
var IMG_DEST = 'public/img';

var CSS_DEST = 'public/css';
var SASS_SRC = './pre/scss/*.scss';


var sourcemaps = require('gulp-sourcemaps');

gulp.task('concat', function () {
    return gulp.src(JS_SRC_CONCAT)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(JS_DEST));
});

gulp.task('uglify', function () {
    return gulp.src(JS_SRC)
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest(JS_DEST));
});

gulp.task('compress-images', function () {
    return gulp.src(IMG_SRC)
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(IMG_DEST));
});

gulp.task('sass', function () {
    gulp.src(SASS_SRC)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(CSS_DEST));
});


gulp.task('sync', ['sass', 'uglify', 'concat'], function () {
    /*  browserSync.init({
          proxy: "localhost"
      }); */
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    gulp.watch("./pre/scss/**", ['sass']);
    gulp.watch("./pre/scss/**").on('change', browserSync.reload);
    gulp.watch(JS_SRC, ['uglify']);
    gulp.watch(JS_SRC).on('change', browserSync.reload);
    gulp.watch(JS_SRC_CONCAT, ['concat']);
    gulp.watch(JS_SRC_CONCAT).on('change', browserSync.reload);
    gulp.watch("./public/*").on('change', browserSync.reload);

});