import { LitElement, html, css } from 'lit-element';

class Loading  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border-left-color: #09f;

        animation: spin 1s ease infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`

      <div class='spinner'></div>
    `;
  }
}

customElements.define('my-loading', Loading);