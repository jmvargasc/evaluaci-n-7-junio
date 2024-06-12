import { LitElement, html, css } from 'lit-element';
import '../../components/API/rickAndMorty.js';
import '../../components/loading/loading.js';

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
      <rick-and-morty></rick-and-morty>
      
    `;
  }
}

customElements.define('home-page', HomePage);