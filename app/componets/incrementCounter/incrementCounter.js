import { LitElement, html, css } from 'lit-element';

class IncrementCOunter  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
        counter: { type: Number },
        click: { type: Number },
        disabled: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.counter = 0;
    this.click = 0;
    this.disabled = false;
  }
  onClickBtn() {
    this.click++;
    if (this.click % 3 === 0) {
      this.counter -= 2; 
      console.log(this.counter);
    } else {
      this.counter++; 
      console.log(this.counter);
    }

    if (this.click === 15) {
      this.disabled = true;
    }
    this.requestUpdate();
  }
  render() {
    return html`

        <h1>Ejercicio 3</h1>
        <h2>${this.counter}</h2>
        <button @click="${this.onClickBtn}" ?disabled="${this.disabled}">
        ${this.disabled ? 'Desactivado' : 'Incrementar'}
        </button>
    `;
  }
}

customElements.define('increment-counter', IncrementCOunter);