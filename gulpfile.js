"use strict";

const { src, dest, series } = require('gulp');
const path = require('path');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const stripCssComments = require('./lib/gulp-strip-css-comments');
const prependSassImports = require('./lib/gulp-node-sass-prepend-import.js');
const cssbeautify = require('./lib/cssbeautify');
const sassTrueReport = require('./lib/gulp-sass-true-report');

const clean = () => del(['./dist']);

const test = () => {
    const cwd = process.cwd();
    return src('./test/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(prependSassImports({
            entry: [
                path.resolve(cwd, 'node_modules/sass-true/sass/true'),
                path.resolve(cwd, 'index.scss')
            ]
        }))
        .pipe(sassTrueReport())
        .pipe(sass().on('error', sass.logError))
        .pipe(stripCssComments())
        .pipe(cssbeautify())
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/tests'))
};

exports.default = series(clean, test);