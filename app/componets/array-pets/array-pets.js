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
        pets: {type: Array},

    };
  }

  constructor() {
    super();
    this.pest = [
        "Perro",
        "Gato",
        "Perico",
        "Aguila",
        "Tiburon",
        "pez",
        "Coyote",
        "Leon",
        "Jirafa",
        "Cerpiente",
        "Tigre",
        
    ];
  }

showPest(){

  for( let i = 0; i < this.pest.length; i++){
    for( let j = 0; j < (this.pest.length - i - 1); j++ ){
        
        if( this.pest[j].length < this.pest[j + 1].length ) {                
            let temp = this.pest[j]
            this.pest[j] = this.pest[j + 1]
            this.pest[j + 1] = temp
        }
    }
  }

  this.update(this.pest);
  
}

  render() {
    return html`

        <h1>Ercicio 2</h1>
        <button @click="${this.showPest}">ordenar</button>
        <ul>
            ${this.pest.map( e => html`
                <li>${e}</li>
            `
            )}

        </ul>
    `;
  }
}

customElements.define('array-pets', ArrayPets);