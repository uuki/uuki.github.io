import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import fs from 'fs-extra'

const cyan    = '\u001b[36m';
const reset   = '\u001b[0m';
const pkg = require('./package.json');
const conf = require('./config.json');
const $ = gulpLoadPlugins({
  pattern: ['gulp-*', 'gulp.*', 'fs-extra'],
  rename: { 'fs-extra': 'fs' }
})

function getTask(task) {
  if(!conf.uses[task]) { return; }

  let taskPath = `./gulp/tasks/${ task }`;

  if(fs.existsSync(taskPath) && fs.statSync(taskPath).isDirectory) {
    taskPath = `${taskPath}/${ task }`;
  }
  if(!conf.devMode) {
    pkg.dist = pkg.public;
  }
  console.log(`${cyan}getTask: '${task}' is true${reset}`);
  return require(taskPath)(gulp, pkg, $);
}


/**
 * spread2json
 */
gulp.task('spread2json', getTask('spread2json'))


/**
 * assemble
 */
gulp.task('assemble', getTask('assemble'))


/**
 * assemble_i18n
 */
gulp.task('assemble_i18n', getTask('assemble_i18n'))


/**
 * javascript
 */
gulp.task('browserify', getTask('browserify'))


/**
 * globbing
 */
gulp.task('sass_globbing', getTask('sass_globbing'))


/**
 * scss
 */
gulp.task('sass', getTask('sass'))


/**
 * imagemin
 */
gulp.task('imagemin', getTask('imagemin'))


/**
 * compress
 */
gulp.task('compress', getTask('compress'))


/**
 * spritesmith
 */
gulp.task('sprite', getTask('sprite_smith'))


/**
 * serve
 * e.g. hostsで[127.0.0.1 localhost]が有効になっている必要があります。
 */
gulp.task('serve', getTask('serve'))


/**
 * watch
 */
gulp.task('watch', () => {
  gulp.watch(`${ pkg.src.hbs }/**/*.{hbs,yml,json}`, ['assemble_i18n']);
  gulp.watch(`${ pkg.src.scss }/**/*.scss`, ['sass']);
  gulp.watch(`${ pkg.src.js }/**/*.js`, ['browserify']);
})

gulp.task('default', ['serve', 'sass_globbing', 'watch']);
gulp.task('build', ['imagemin', 'compress']);
gulp.task('get', ['spread2json']);