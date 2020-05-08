import { CVBaseElement } from '../cv-base-element';

import './cv-photo.sass';
import cvImage from './cv-photo.jpg';

export class CVPhoto extends CVBaseElement {
  constructor(props = {}) {
    super(props);
    this.appendToSelector = props.appendToSelector || '.cv-header';
    super.init();
  }

  /* eslint-disable */
  getTemplate() {
    return `
      <div class="cv-photo__wrap col-xs-4">
        <img class="cv-photo" src="${cvImage}" alt="CVPhoto">
      </div>
    `;
  }
}
