import { CVBaseElement } from '../cv-base-element';
import './cv-item.sass';

export class CVItem extends CVBaseElement {
  constructor(props = {}) {
    super(props);
    this.title = props.title || '';
    this.items = props.items || '';
    this.appendToSelector = props.appendToSelector || '.cv-body';
    super.init();
  }

  getTemplate() {
    return `
      <section class="cv-item">
        <h3 class="cv-item__title cv-item__title_block">${this.title || ''}</h3>
        ${this.items.map(item => `
          <div class="cv-item__header">
            <h4 class="cv-item__title">${item.title}</h4>
            ${item.date ? `<span class="cv-item__date">${item.date}</span>` : ''}
          </div>
          <span class="cv-item__subtitle">${item.subtitle || ''}</span>
          <p class="cv-item__text">${item.text || ''}</p>
        `).join('')}
      </section>
    `;
  }
}
