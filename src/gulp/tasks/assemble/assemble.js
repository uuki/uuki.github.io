import checkModule from '../../utils/check_module_lib/check_module.js';
checkModule([
  'assemble',
  'gulp-assemble',
  'gulp-handlebars',
  'gulp-prettify',
  'handlebars-helpers',
  'js-yaml'
]);

const assemble = require('assemble');
const prettify = require('gulp-prettify');
const through = require('through2');
const app = assemble();
const prettifyrc = require('./prettifyrc.json');
const yaml = require('js-yaml');

module.exports = (gulp, PATH, $) => {

  return () => {

    app.layouts(`${ PATH.src.hbs }/layouts/*.hbs`);
    app.pages(`${ PATH.src.hbs }/*.hbs`);
    app.partials(`${ PATH.src.hbs }/partials/**/*.hbs`);
    app.dataLoader('yml', (str, fp) => {
      return yaml.safeLoad(str);
    });

    app.data(`${ PATH.src.hbs }/data/config.yml`);

    app.toStream('pages')
      .pipe(through.obj((chunk, enc, cb) => {

        chunk.data['assets'] = '/assets/themes/package';
        //chunk.data['config'] = require(`${ PATH.src.hbs }/data/config.yml`);
        //console.log(chunk.data);
        //console.log(JSON.stringify(chunk));

        return cb(null, chunk);
      }))
      .pipe(app.renderFile())
      .pipe($.rename({
        extname: '.html'
      }))
      .pipe(prettify( prettifyrc ))
      .pipe(app.dest(`${ PATH.static_html }/`))
  }
}