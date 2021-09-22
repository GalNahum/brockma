"use strict";

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');

const clean = () => del(['./dist']);

const styles = () => {
    return src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dist/css'));
};

const watchForChanges = () => {
    watch('./src/**/*.scss', styles);
};

exports.default = series(clean, styles);
exports.watch = series(clean, styles, watchForChanges);