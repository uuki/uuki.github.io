import checkModule from '../../utils/check_module_lib/check_module.js';
checkModule([
  'imagemin-pngquant',
  'imagemin-mozjpeg',
  'gulp-chmod',
  'gulp-imagemin'
]);

const pngquant = require('imagemin-pngquant');
const imagemin = require('gulp-imagemin');
const chmod = require('gulp-chmod');

module.exports = (gulp, PATH, $) => {
  return () => {
    gulp.src([
      `${ PATH.src.img }/{,**/}*.{jpg,png,gif,svg,ico}`,
      `!${ PATH.src.img }/sprite/{,**/}*.png`,
      ])
      .pipe(chmod(777))
      .pipe(imagemin({
        optimizationLevel: 6,
        multipass: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [ pngquant({ quality: 60-80, speed: 1}) ]
      }))
      .pipe(chmod(644))
      .pipe(gulp.dest(`${ PATH.dist }/${ PATH.img }/`))
  }
}