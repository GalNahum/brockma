const through = require('through2');
const path = require('path');

const insertBefore = (contents, str = '', pos = 0) => contents.slice(0, pos) + str + contents.slice(pos);

const getThrough2FileObj = (file) => file && JSON.parse( JSON.stringify(file) );

const isSassImporterFile = (file) => file && path.basename( getThrough2FileObj(file)?.history[0] ).startsWith('_');

const isSassMainFile = (file) => file && file.contents && !isSassImporterFile(file);

const replaceAll = (str, match, replacement) => str.split(match).join(replacement);

const getEntryFileImport = ( entryFile ) => {
    return entryFile.length
        ? `@import "${replaceAll(entryFile, '\\', '/')}";\r\n` // Replace "\\" for Win OS
        : ''
};

const getPreparedContents = ( entry ) => {
    return Array.isArray( entry )
        ? entry.map( entryFile => getEntryFileImport(entryFile) ).join('')
        : getEntryFileImport(entry);
};

module.exports = ( { entry } = {} ) => through.obj((file, enc, cb) => {

   if( isSassMainFile(file) ) {
        const contents = file.contents.toString();
        const importsContents = getPreparedContents( entry );
        const data = insertBefore(contents, importsContents);
        file.contents = Buffer.from(data, 'utf8');
    }

    return cb(null, file);
});
