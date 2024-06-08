import { LitElement, html, css } from 'lit-element';
import '../componets/button- counter/button-counter.js';
import '../componets/array-pets/array-pets.js';
import '../componets/incrementCounter/incrementCounter.js';
import '../componets/textColor/textColor.js';
import '../componets/cardTecnologies/cardTecnologies.js';

class HomePage  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <button-counter></button-counter>
      <array-pets></array-pets>
      <increment-counter></increment-counter>
      <text-color></text-color>
      <card-tecnologies></card-tecnologies>
    `;
  }
}

customElements.define('home-page', HomePage);