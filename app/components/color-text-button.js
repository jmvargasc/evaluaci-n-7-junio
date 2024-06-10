import { LitElement, html, css } from "lit";

export class ColorTextButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      button {
        font-size: 16px;
        padding: 10px;
        border: none;
        cursor: pointer;
        color: var(--button-color, black);
      }

      .text {
        margin-top: 10px;
        font-size: 14px;
        color: var(--text-color, black);
      }
    `;
  }

  constructor() {
    super();
  }

  onClick() {
    const randomColor = this.generateRandomColor();
    this.style.setProperty("--text-color", randomColor);
  }

  generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  render() {
    return html`

      <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button @click="${this.onClick}">
        Change Color
      </button>

    `;
  }
}

customElements.define("color-text-button", ColorTextButton);