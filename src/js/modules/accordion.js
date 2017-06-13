import $ from 'jquery';
import { $WINDOW, isMobile } from '../helpers';
import 'mobileEvents';
import _debounce from 'lodash.debounce';
import ViewBase from '../view_base';


/**
 * アコーディオン
 */
export default class extends ViewBase {

  constructor(el) {
    super(el);

    this.target;
  }

  initialize() {
    super.initialize();

  }

  bind() {
    $WINDOW
      .on('resize', _debounce(this.onResizeWindow, 200));

    this.$el
      .on('tap', this.onTap);
  }

  onTap(e) {

    if(!isMobile()) {
      return;
    }

    let $this = $(e.currentTarget);
    this.target = $this.attr('data-type');

    $this.toggleClass('is-open');
    $(`[data-target="${ this.target }"]`).slideToggle();
  }

  onResizeWindow() {
    if(!isMobile()) {
      $('.js-accordion').removeClass('is-open');
      $('[data-target]').removeAttr('style');
    }
  }
}