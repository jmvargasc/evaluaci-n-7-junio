import { LitElement, html, css } from 'lit';


class ColorButton extends LitElement {
  static properties = {
    count: { type: Number },
    colorIndex: { type: Number },
    colors: { type: Array },
    maxCount: { type: Number },
    resetText: { type: String },
    countText: { type: String }
  };



  static styles = css`
    .button {
      font-size: 16px;
      padding: 10px;
      border: none;
      cursor: pointer;
    }
    .yellow {
      background-color: yellow;
    }
    .red {
      background-color: red;
    }
    .green {
      background-color: green;
    }
  `;


  constructor() {
    super();
    this.count = 0;
    this.colorIndex = 0;
    this.colors = ['yellow', 'red', 'green']; 
    this.maxCount = 10; 
    this.buttonText = 'Click'; 
    this.resetText = 'Reset'; 
    this.countText = 'Count'; 
  }

  incrementCount() {
    if (this.count < this.maxCount) {
      this.count += 1;
      this.colorIndex = (this.colorIndex + 1) % this.colors.length;
      this.requestUpdate();
    }
  }

  resetCount() {
    this.count = 0;
    this.colorIndex = 0;
    this.requestUpdate();
  }

  render() {
    return html`
      <div>
        <p>${this.countText}: ${this.count}</p>
        <button class="button ${this.colors[this.colorIndex]}" @click="${this.incrementCount}">
          ${this.buttonText}
        </button>
        <button class="button" @click="${this.resetCount}">
          ${this.resetText}
        </button>
      </div>
    `;
  }
}

customElements.define('color-button', ColorButton);