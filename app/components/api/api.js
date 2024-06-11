/* constructor -> conectedCallback -> update -> render -> firstUpdated -> updatedupdate */
import { LitElement, html, css } from "lit";
import "../loading/spinner.js";
import { GetInfoCharactersDm } from '../get-info-characters-dm.js';

export class Api extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
      background-color:black;
    }
    h2{
        margin:1rem 0;
        text-align:center;
        font-size:1.5rem;
       
    }
    .api {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
      padding: 2rem;
    }

    .card {
      display: inline-block;
      position: relative;
      text-align: center;
      margin:1rem 0;
    }

    .card-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .card-info {
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      padding: 5px 10px;
      border-radius: 15px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      font-family: Arial, sans-serif;
      font-size: 14px;
      white-space: nowrap;
    }

    .card .name {
      font-weight: bold;
      color:black;
    }

    .card .species {
      font-style: italic;
    }

    
  `;

  static get properties() {
    return {
      items: { type: Array },
      title:{type:String},
      instancia:{type:Object}
    };
  }

  constructor() {
    super();
    this.items = [];
    this.page = 1;
    this.loading = true;
    this.title="";
    this.instancia = new GetInfoCharactersDm();
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.instancia.getApi(this.page)
        .then((res) => (this.items = res.results))
        .catch((err) => (this.items = []));
    }, 1000);
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }


  handleScroll() {
    const main = this.shadowRoot.querySelector(".main");

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.loadData();
      main.style.backgroundColor = this.cambiaColor();
    } 
}


  cambiaColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  

  loadData() {
    this.page++;
    this.instancia.getApi(this.page)
      .then((data) => {
        this.items = [...this.items, ...data.results];
      })
      .catch((err) => console.error(err));
  }

  update() {
    super.update();
    this.loading = false;
    let h2=this.shadowRoot.querySelectorAll('.title');
    h2.forEach(title=>{
        title.style.color=this.cambiaColor()
    })
  }

  render() {
    return html`
      ${this.loading
        ? html`<spinner-page></spinner-page>`
        : html`
          <div class="main">
            <div class="api">
              ${this.items.map(
                (item) => html`
                  <div class="card">
                    <h2 class="title">${this.title}</h2>
                    <img class="card-image" src="${item.image}" />
                    <div class="card-info">
                      <span class="name">${item.name}</span>
                      <span class="species">Species: ${item.species}</span>
                    </div>
                  </div>
                `
              )}
            </div>
          </div> `}
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    setTimeout(() => {
        this.title='Datos:';
    }, 1200);
  }

  updated() {
    super.updated();
    setTimeout(() => {
        let name=this.shadowRoot.querySelectorAll('.name');
          name.forEach((item)=>{
            item.style.color='red';
          })
    }, 1600);
  }


    disconnectedCallback() {
    super.disconnectedCallback();
    main.removeEventListener("scroll", this.handleScroll.bind(this));
  }
}

customElements.define("api-page", Api);
