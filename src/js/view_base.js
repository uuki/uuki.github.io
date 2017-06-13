import $ from 'jquery';

export default class {
  constructor(el) {
    this.$el = $(el);

    this.initialize();
  }

  initialize() {
    if(!this.$el[0]) {
      return;
    }

    //this.bind();
  }

}