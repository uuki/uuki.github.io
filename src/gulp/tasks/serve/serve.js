console.log(__dirname);
import checkModule from '../../utils/check_module_lib/check_module.js';
checkModule('gulp-webserver');

const webserver = require('gulp-webserver');

module.exports = (gulp, PATH, $) => {
  return () => {
    gulp.src(`${ PATH.dist }/`)
        .pipe(webserver({
            livereload: false,
            port: `${ PATH.port }`,
            host: '0.0.0.0',
            directoryListing: false//,
            //open: true
        }));
  }
}