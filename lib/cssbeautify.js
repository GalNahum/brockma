const gulpCssBeautify = require('gulp-cssbeautify');

const cssbeautify = () => {
    const options = {
        indent: '   '
    };
    return gulpCssBeautify(options);
};

module.exports = cssbeautify;