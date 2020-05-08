export class CVBaseElement {
  constructor(props = {}) {
    this.element = null;
    this.title = { props } || '';
    this.subtitle = { props } || '';
    this.appendToSelector = (() => this.appendToSelector || 'body')(this.appendToSelector);
  }

  init() {
    this.appendTo();
  }

  create() {
    const domElement = document.createElement('div');
    domElement.innerHTML = this.getTemplate();
    const [, div] = domElement.childNodes;
    this.element = div;
  }

  appendTo() {
    this.create();
    const domElement = document.querySelector(this.appendToSelector);
    domElement.append(this.element);
  }
}
