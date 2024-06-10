import { LitElement, html, css } from "lit";

export class ClickCounter extends LitElement {

  static get properties() {
    return {
      contador: { type: Number },
      clickContar: { type: Number },
      disabled: { type: Boolean },
    };
  }

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];


  constructor() {
    super();
    this.contador = 0;
    this.clickContar = 0;
    this.disabled = false;
  }

  onClickBtn() {
    this.clickContar++;
    if (this.clickContar % 3 === 0) {
      this.contador -= 2; 
    } else {
      this.contador++; 
    }

    if (this.clickContar === 15) {
      this.disabled = true;
    }
    this.requestUpdate();
  }

//contador que aumente en 1 cada que se de un click y decremento en 2 cuando pasen 3 

//LOGICA

//EMPEZAMOS EN 0 
//CLICK 1: 1
//CLICK 2: 2
//CLICK 3: 0 DISMINUIMOS DOS EN EL CLICK 3 


render() {
    return html`
      <h2>${this.contador}</h2>
      <button @click="${this.onClickBtn}" ?disabled="${this.disabled}">
        ${this.disabled ? 'Desactivado' : 'Incrementar'}
      </button>
    `;
  }
}

customElements.define("click-counter", ClickCounter);