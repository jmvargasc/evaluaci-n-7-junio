import { LitElement, html, css } from 'lit-element';
import {GetInfoCharactersDm} from '../get-info-characters-dm.js';
import '../../components/loading/loading.js';

class RickANdMOrty  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .content{
        width: 100%;
        display: flex;
        flex-flow: wrap row;
        justify-content: space-between;
      }
      .box{
        margin: 2rem .5rem;
        background-color: #fdfdfd;
        border-radius: 10px;
      }
      .box-loading{
        display: flex;
        flex-flow: wrap row;
        justify-content: center;
        margin-top: 4rem;
      }
      #loading{
        display: none;
      }
      #btn{
        padding: 1rem;
        border-radius: 5px;
        border: transparent;
        background-color: white;
      }
    `;
  }

  static get properties() {
    return {
        characters: {type: Array},
    };
  }

  constructor() {
    super();
    this.characters = [];
    this.request = new GetInfoCharactersDm();
  }

  async showCharacters(){
    
    let loading = this.shadowRoot.querySelector("#loading");
    loading.style.display = "block";

    setTimeout( () => {
      this.request.getInfoCharacters()
      .then( (res) => (this.characters = res.results))
      .catch( (err) => (this.characters = []));
      loading.style.display = "none";
    },2000);
 
  }

  connectedCallback() {
    super.connectedCallback()
    this.shadowRoot.querySelector("#title");
    setTimeout( () => {
      this.style.textAlign = "center";
      this.style.color = "#555555";
    },2000)
  }
  update(){
    super.update();
    let btn = this.shadowRoot.querySelector("#btn");

    setTimeout( () => {
      btn.style.backgroundColor = "#494949";
      btn.style.color = "#ffffff";
    },3000)


  }

 

  render() {
    return html`
        <h1 id="title">Rick And Morty</h1>
        <button @click="${this.showCharacters}" id="btn">mostrar personajes</button>  
        
        <div class="box-loading">
            <my-loading id="loading"></my-loading>
        </div>
        <div class="content">
            ${this.characters.map(e  => html`
                <div class="box" id="box">
                    <img src="${e.image}">
                    <p>${e.name}</p>
                    <p>${e.species}</p>
                    <p>${e.gender}</p>
                </div>
            `)}
        </div>
    `;
  }

  updated() {
    super.updated();
    this.shadowRoot.querySelector('#title');
    setTimeout( () => {
      this.style.fontWeight = "bold";
      this.style.fontSize = "30px";
    },2000);
  }

  firstUpdated(){
    super.firstUpdated();
    this.shadowRoot.querySelector('#box');

    setTimeout( () => {
      this.style.fontFamily = "Helvetica";
    },5000);
  }
}

customElements.define('rick-and-morty', RickANdMOrty);