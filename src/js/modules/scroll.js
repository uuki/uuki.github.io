import $ from 'jquery';
import 'velocity';
import { $WINDOW, isMobile } from '../helpers';
import ViewBase from '../view_base';

/**
 * スクロール
 */
export default class extends ViewBase {
  constructor(el) {
    super(el);

    this.body = $('body');
    this.to;
    this.offset;

    // オプション
    this.duration = 1500;
    this.easing = 'easeOutQuint';
    this.offsetPC = 0;
    this.offsetSP = 0;
    this.hash = true;
  }

  initialize() {
    super.initialize();

  }

  bind() {
    this.$el
      .on('click', this.onClickTrigger.bind(this));

    $WINDOW
      .on('resize', this.onResizeWindow.bind(this))
      .trigger('resize');
  }

  onScroll(e) {
    this.to = e === '#' ? this.body : $(e);

    this.to.velocity("scroll", {
      duration: this.duration,
      easing: this.easing,
      offset: this.offset
    },
    function(){
      if(this.hash) {
        history.pushState('', '', h);
      }
    });
  }

  onClickTrigger(e) {
    let $eventTarget = $(e.currentTarget);
    this.onScroll( $eventTarget.attr('href') );
  }

  onResizeWindow() {
    this.offset = isMobile() ? this.offsetSP : this.offsetPC;
  }

}