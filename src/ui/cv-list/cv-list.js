import { CVBaseElement } from '../cv-base-element';
import './cv-list.sass';

export class CVList extends CVBaseElement {
  constructor(props = {}) {
    super(props);
    this.title = props.title || '';
    this.items = props.items || '';
    this.appendToSelector = props.appendToSelector || '.cv-aside';
    super.init();
  }

  getTemplate() {
    return `
      <section class="cv-list__wrap">
        <h4 class="cv-list__title">${this.title}</h4>
        <ul class="cv-list">
          ${this.items.map(item => `
            <li class="cv-list__item">
              <span class="cv-list__item-title">${item.title || ''}</span>
              <span class="cv-list__item-level" style="width: ${item.level - 20}%"></span>
            </li>
          `).join('')}
        </ul>
      </section>
    `;
  }
}
