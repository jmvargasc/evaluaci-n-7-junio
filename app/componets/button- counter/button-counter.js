import { LitElement, html, css } from 'lit-element';

class ButtonCounter  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      #bg-color{
        background-color: transparent;
        width: 100%;
        height: 2rem;
        border: 1px solid black;
        border-radius: 5px;
      }
    `;
  }

  static get properties() {
    return {
      counter: {type: Number},
    };
  }

  constructor() {
    super();
    this.counter = 1;
  }

  bgClick(){

   let btn = this.shadowRoot.querySelector('#bg-color');
    
    if(this.counter === 1){
      btn.style.backgroundColor = "yellow";
    }else if(this.counter === 2){
      btn.style.backgroundColor = "red";
    }else if(this.counter === 3){
      btn.style.backgroundColor = "green";
    }else if(this.counter === 4){
      btn.style.backgroundColor = "yellow";
    }else if(this.counter === 5){
      btn.style.backgroundColor = "red";
    }else if(this.counter === 6){
      btn.style.backgroundColor = "green";
    }else if(this.counter === 7){
      btn.style.backgroundColor = "yellow";
    }else if(this.counter === 8){
      btn.style.backgroundColor = "red";
    }else if(this.counter === 9){
      btn.style.backgroundColor = "green";
    }else if(this.counter === 10){
      btn.style.backgroundColor = "yellow";
      this.counter = 1;
    }
    this.counter++;
  }

  render() {
    return html`

    <h1>ejercicio 1</h1>

      <button id="bg-color" @click="${this.bgClick}">Cambiar de color</button>
      
    `;
  }
}

customElements.define('button-counter', ButtonCounter);