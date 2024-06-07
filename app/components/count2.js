import { LitElement, html, css } from "lit";

export class Count extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  static get properties() {
    return {
      contador: { type: Number },
      clickContar: { type: Number },
      disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.contador = 0;
    this.clickContar = 0;
    this.disabled = false;
  }

  onClickBtn() {
    this.clickContar++;
    this.contador++;
    if (this.clickContar === 3) {
      this.contador -= 2;
    }

    if (this.clickContar === 15) {
      this.disabled = true;
    }
  }

  render() {
    return html`
      <h2>${this.contador}</h2>
      <button @click="${this.onClickBtn}" ?disabled="${this.disabled}">
        Incrementar
      </button>
    `;
  }
}

customElements.define("count-page", Count);