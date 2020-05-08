import { CVBaseElement } from '../cv-base-element';
import './cv-title.sass';

export class CVTitle extends CVBaseElement {
  constructor(props = {}) {
    super(props);
    this.title = props.title || '';
    this.subtitle = props.subtitle || '';
    this.websiteTitle = window.location.host;
    this.appendToSelector = props.appendToSelector || '.cv-header';
    super.init();
  }

  getTemplate() {
    return `
      <section class="cv-title__wrap col-xs col-sm row column center-xs">
        <h1 class="cv-title cv-title_main">${this.title}</h1>
        <p class="cv-title__subtitle cv-title__subtitle_main">${this.subtitle}</p>
        <p class="cv-title__subtitle">${this.websiteTitle}</p>
      </section>
    `;
  }
}
