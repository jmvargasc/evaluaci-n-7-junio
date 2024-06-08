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
        colores: {type: Array},
    };
  }

  constructor() {
    super();
    this.colores = [];
  }

textColor(){
    let text = this.shadowRoot.querySelector('#text-color');

    var num=(Math.floor(Math.random()*4)*4).toString(16);
    var letters = ['0','F',num];
    var color = '#';
    
    for (var i = 0; i < 3; i++ ) {
        let pos=Math.floor(Math.random() * letters.length);
        color += letters[pos];
        letters.splice(pos,1);
    }
    
    //para evitar que se repitan colores 
    if(this.colores.includes(color))
      return color;
    else
      this.colores.push(color)
      
      text.style.color = color;
    return color;


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