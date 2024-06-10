import { LitElement, html, css } from 'lit';

class PetsList extends LitElement {
  static styles = css`
    .button {
      font-size: 16px;
      padding: 10px;
      border: none;
      cursor: pointer;
      margin-right: 5px;
      margin-top: 10px;
    }
  `;

  static properties = {
    pets: { type: Array },
    originalPets: { type: Array },
    sortByText: { type: String },
    resetText: { type: String }
  };

  constructor() {
    super();
    this.originalPets = [
      'Hachi', 'Maya', 'Peteto', 'Owen', 'Chispas', 
      'Chocolate', 'Snoopy', 'Linda', 'Boris', 'Sami'
    ];
    this.pets = [...this.originalPets];
    this.buttonText = 'Ordenar';
    this.resetText = 'Reset';
  }

  sortPets() {
    this.pets = [...this.pets].sort((a, b) => b.length - a.length);
    this.requestUpdate();
  }

  resetPets() {
    this.pets = [...this.originalPets];
    this.requestUpdate();
  }

  render() {
    return html`
      <div>
        <ul>
          ${this.pets.map(pet => html`<li>${pet}</li>`)}
        </ul>
        <button class="button" @click="${this.sortPets}">${this.buttonText}</button>
        <button class="button" @click="${this.resetPets}">${this.resetText}</button>
      </div>
    `;
  }
}

customElements.define('pets-list', PetsList);