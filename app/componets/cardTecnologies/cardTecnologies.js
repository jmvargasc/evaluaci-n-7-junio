import { LitElement, html, css } from 'lit-element';

class CardTEcnologies  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .opened{
            display: block;
        }
        .closed{
            display: none;
        }
      .container{
          width: 100%;
          display: none;
          flex-flow: row wrap;
        }
        .row{
            display: flex;
            flex-flow: column wrap;
            width: 30%;
            margin: 1rem;
            background-color: #ffffff;
            border-radius: 5px;
        }
        .row > img{
            width: 100%;
            height: 15rem;
        }
        .row > .texto {
            width: 100%; 
            height: 15rem;
            background-color: #05113B;
        }
        .texto p{
            padding: 1rem;
            font-size: 20px;
            font-family: Helvetica, sans-serif, Arial;
            color: #ffffff;
        }
        .texto > .desciption{
            text-align: justify !important;
        }
    `;
  }

  static get properties() {
    return {
        technologies: {type: Array},
        open: {type: Boolean},
        text: {type: String},

    };
  }

  constructor() {
    super();
    this.open = false;
    this.technologies = [
        {
            name: 'HTML5',
            desc: 'Es, por tanto, la versión más actualizada del hypertext markup language.',
        },
        {
            name: 'CSS3',
            desc: 'es un lenguaje de diseño gráfico que permite definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.',
        },
        {
            name: 'Bootstrap',
            desc: 'es un marco CSS gratuito y de código abierto dirigido al desarrollo web ',
        },
    ];
    this.text ="Mostrar elementos";
  }

showCards(){
   let card = this.shadowRoot.querySelector('#cards');

    if(this.open === false){
        card.style.display = "block"
        this.open = true;
        this.text = "ocultar elemntos";
    }else{
        card.style.display = "none"
        this.open = false;
        this.text ="Mostrar elementos";
    }


}

  render() {
    return html`
    <h1>Ejercicio 5</h1>
    <button id="mostrar"  @click="${this.showCards}">${this.text}</button>
      <div class="container" id="cards">
            ${this.technologies.map( e => html`
            <div class="row">
                <div class="texto">
                    <p class="">${e.name}</p>
                    <p class="text">${e.desc}</p>
                </div>
            </div>
            `)}
        </div>
    `;
  }
}

customElements.define('card-tecnologies', CardTEcnologies);