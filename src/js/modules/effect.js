import $ from 'jquery';
import 'waypoints';
import { $WINDOW, isMobile } from '../helpers';
import ViewBase from '../view_base';

/**
 * waypoint処理
 */
export default class extends ViewBase {
  constructor(el) {
    super(el);
  }

  initialize() {
    super.initialize();

    this.bind();
  }

  bind() {

    this.$el.each((i, target) => {
      new global.Waypoint({
        element: target,
        handler(direction) {
          if (direction === 'down') {
            this.element.classList.add('is-view');
            this.destroy();
          }
        },
        offset: '30%'
      })
    })

    $WINDOW
      .on('resize', this.onResizeWindow.bind(this))
      .trigger('resize');
  }

  // view(el, type) {
  //   switch (type) {
  //     case 'step':
  //       this.motionStep(el);

  //       break;
  //     default:
  //       el.addClass('is-view');

  //       break;
  //   }
  // }

  // motionStep(el) {
  //   var $items = el.children();

  //   _.forEach($items, function(item, i) {
  //     var $this = $(item),
  //         num = i + 1;

  //     //$this.delay(500 * i).addClass('is-view');

  //     _.delay(function(){
  //       $this.addClass('is-view');
  //     }, (num * 300 / 1.2 ))
  //   })
  // }

  onResizeWindow() {

  }

}