import { LitElement, html, css } from 'lit-element';

class ArrayPets  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      ul{
        margin-top: 2rem;
      }
    `;
  }

  static get properties() {
    return {
        pets: {type: Array}
    };
  }

  constructor() {
    super();
    this.pest = [
        {name: "Perro"},
        {name: "Gato"},
        {name: "Perico"},
        {name: "Aguila"},
        {name: "Tiburon"},
        {name: "Coyote"},
        {name: "Leon"},
        {name: "Jirafa"},
        {name: "Cerpiente"},
        {name: "Tigre"},
    ];
  }

showPest(pest){
  console.log('click animals')

  for( let i = 0; i < pest.length; i++){
    for( let j = 0; j < (pest.length - i - 1); j++ ){
        
        if( pest[j].length < pest[j + 1].length ) {                
            let temp = pest[j]
            pest[j] = pest[j + 1]
            pest[j + 1] = temp
        }
    }
  }
  this.requestUpdate();
}

  render() {
    return html`

        <h1>Ercicio 2</h1>
        <button @click="${this.showPest}">ordenar</button>
        <ul>
            ${this.pest.map( e => html`
                
                <li>${e.name}</li>
            `
            )}
        </ul>
    `;
  }
}

customElements.define('array-pets', ArrayPets);