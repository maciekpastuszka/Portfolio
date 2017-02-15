var gulp = require('gulp');

//css
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

//js
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

//other
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var reload = browserSync.reload();

var sourcemaps = require('gulp-sourcemaps');

/*----config ---*/
var JS_SRC = 'js';
var JS_DEST = '../public/js';

var SASS_SRC = 'scss';
var CSS_DEST = '../public/css';

var IMG_SRC = 'img/*';
var IMG_DEST = '../public/img';


gulp.task('default', ['css', 'js']);

gulp.task('js', function () {
    return gulp.src([
        './js/ajax.js',
        './js/menu.js',
        './js/paralax.js',
        './js/portfolio.js',
        './js/smoothscroll.js',
        './js/vr.js',
        './js/main.js'
    ])
        .pipe(concat('scripts.js'))
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(gulp.dest(JS_DEST));
});

gulp.task('images', function () {
    return gulp.src(IMG_SRC)
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(IMG_DEST));
});

gulp.task('css', function () {
    gulp.src(SASS_SRC + '/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 3%', 'last 4 versions', 'ie 9', 'ios 6', 'android 4'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(CSS_DEST));
});


gulp.task('sync', ['css', 'js'], function () {
    // browserSync.init({
    //     proxy: "localhost"
    // });
    browserSync.init({
        server: {
            baseDir: '../public'
        }
    });
    gulp.watch(SASS_SRC + "/**", ['css']);
    gulp.watch(SASS_SRC + "/**").on('change', browserSync.reload);
    gulp.watch(JS_SRC + "/**", ['js']);
    gulp.watch(JS_SRC + "/**").on('change', browserSync.reload);
    gulp.watch("../public/*.html").on('change', browserSync.reload);
});