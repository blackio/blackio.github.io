import { CVBaseElement } from '../cv-base-element';
import './cv-contacts.sass';

export class CVContacts extends CVBaseElement {
  constructor(props = {}) {
    super(props);
    this.contacts = props.contacts;
    this.appendToSelector = props.appendToSelector || '.cv-aside';
    super.init();
  }

  getTemplate() {
    return `
      <div class="cv-contacts__wrap">
        <ul class="cv-contacts">
          ${this.contacts.map(contact => `
            <li class="cv-contacts__item">
              <span class="cv-contacts__item-icon">${contact.icon}</span>
              ${contact.link ? `
                <a class="cv-contacts__item-link" href="${contact.link}" target="_blank">
                  <span>${contact.value}</span>
                </a>` : `
                <span>${contact.value}</span>`}
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}
