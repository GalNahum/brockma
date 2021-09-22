const path = require('path');
const fs = require('fs').promises;

const getDirectories = source =>
    fs.readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

const isRegExp = (value) => Object.prototype.toString.call(value) === '[object RegExp]';

module.exports = {
    getDirectories,
    isRegExp
};