const $ = require('./libs/jquery.js');
import { $WINDOW, isWindows } from './helpers';
import _debounce from 'lodash.debounce';

import { cookie } from 'cookie';
console.log(cookie);

// modules
import HelloWorld from './modules/hello_world';
//import Accordion from './modules/effect';
//import Scroll from './modules/message';


export default class {

  constructor(el) {
    this.$el = $(el);

    this.body = document.body;

    this.modules = {
      helloWorld: new HelloWorld('.js-waypoint')
    };

    this.initialize();
    this.bind();
  }

  initialize() {
    this.body.classList.add('is-loaded');
  }

  bind() {
    $WINDOW
      .on('load', this.onLoad.bind(this))
      //.on('resize', _debounce(this.onResize.bind(this), 200))
      .trigger('resize');
  }

  onLoad() {
    if(isWindows()) {
      this.body.classList.add('windows');
    }
  }

  onResize() {

  }
}