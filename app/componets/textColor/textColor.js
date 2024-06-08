import { LitElement, html, css } from 'lit-element';

class TextCOlor  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
        arrayNums: {type: Array},
    };
  }

  constructor() {
    super();
    this.arrayNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  }

textColor(){
    let text = this.shadowRoot.querySelector('#text-color');
    text.style.color = "blue";


}
  render() {
    return html`
    <h1>ejercicio 4</h1>
    <div>
      <button id="text-color" @click="${this.textColor}">Cambiar de color de texto</button>
    </div>
    `;
  }
}

customElements.define('text-color', TextCOlor);