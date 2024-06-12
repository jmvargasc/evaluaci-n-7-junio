import { LitElement, html, css } from 'lit';
import '../components/loading-component';
import { RickAndMortyAPI } from '../components/rick--morty-dm';

class RickAndMortyComponent extends LitElement {
  static properties = {
    characters: { type: Array },
    loading: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
    .character {
      border: 1px solid #ccc;
      padding: 8px;
      margin-bottom: 8px;
      border-radius: 4px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
    }
    .character img {
      border-radius: 50%;
      margin-right: 16px;
    }
  `;

  constructor() {
    super();
    this.characters = [];
    this.loading = false;
    this.api = new RickAndMortyAPI();
  }

  connectedCallback() {
    super.connectedCallback();
    this.loading = true;
    console.log('connectedCallback: Component added to the DOM');
    setTimeout(async () => {
      try {
        this.characters = await this.api.getCharacters();
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        this.loading = false;
      }
    }, 3000); 
  }

  update(changedProperties) {
    super.update(changedProperties);
    // Se llama siempre que una propiedad observada cambia
    console.log('update: Component properties changed', changedProperties);

    // Realiza acciones adicionales aquí si es necesario
  }

  render() {
    return html`
      ${this.loading ? html`<loading-component message="Loading ..."></loading-component>` : ''}
      ${this.characters.map(character => html`
        <div class="character">
          <img src="${character.image}" alt="${character.name}" width="50" height="50">
          <div>
            <h3>${character.name}</h3>
            <p>${character.species}</p>
          </div>
        </div>
      `)}
    `;
  }

  firstUpdated() {
    // Se llama la primera vez que el componente actualiza el DOM
    console.log('firstUpdated: Component first updated');
    // Realiza acciones adicionales aquí si es necesario, por ejemplo, iniciar una animación
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    // Se llama después de que el componente haya actualizado el DOM
    console.log('updated: Component updated', changedProperties);
    // Realiza acciones adicionales aquí si es necesario, por ejemplo, interactuar con el DOM actualizado
  }
}

customElements.define('rick-and-morty-component', RickAndMortyComponent);