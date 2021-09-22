'use strict';
const through = require('through2');
const stripCssComments = require('./strip-css-comments');
const PluginError = require('plugin-error');

module.exports = () => through.obj(function (file, enc, cb) {
    try {
        if( file.contents ) {
            file.contents = Buffer.from(stripCssComments(file.contents.toString(), {whitespace: false}), 'utf8');
        }

    } catch (err) {
        this.emit('error', new PluginError('gulp-strip-css-comments', err, {fileName: file.path}));
    }

    cb(null, file);
});