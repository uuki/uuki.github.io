import $ from 'jquery';
import ViewBase from '../view_base';

export default class extends ViewBase {
  constructor(el) {
    super(el);

  }

  initialize() {
    super.initialize();
    this.$el.text('Hello, world');
  }

  bind() {

  }
}