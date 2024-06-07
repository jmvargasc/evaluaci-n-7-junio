import { LitElement, html, css } from "lit";

export class Mascotas extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  static get properties() {
    return {
      mascotas: { type: Array },
    };
  }

  constructor() {
    super();
    this.mascotas = [
      "gato",
      "perro",
      "loro",
      "oso",
      "tigre",
      "leopardo",
      "hammter",
      "tiburon",
      "tejon",
      "lobo",
    ];
  }

  onOrdenarMascotas() {
   let res= this.mascotas.sort((a, b) => b.length - a.length);
   this.mascotas=res;
   this.requestUpdate();
  }

  render() {
    return html`
      <button @click="${this.onOrdenarMascotas}">Ordenar</button>

      <h2>Animales</h2>

      <ul>
        ${this.mascotas.map((mascota) => html`<li>${mascota}</li>`)}
      </ul>
    `;
  }
}
customElements.define("mascotas-page", Mascotas);
