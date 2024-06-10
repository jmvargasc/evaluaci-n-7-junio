import { LitElement, html, css } from "lit";

export class ImageCarousel extends LitElement {
  static get properties() {
    return {
      images: { type: Array },
      currentIndex: { type: Number },
    };
  }

  constructor() {
    super();
    this.images = [];
    this.currentIndex = 0;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  render() {
    return html`
      <div class="carousel">
        <button @click="${this.previousSlide}">&lt;</button>
        <img src="${this.images[this.currentIndex]}" alt="Slide ${this.currentIndex}">
        <button @click="${this.nextSlide}">&gt;</button>
      </div>
    `;
  }

  static get styles() {
    return css`
      .carousel {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.5);
        border: none;
        cursor: pointer;
        font-size: 24px;
        padding: 10px;
        z-index: 2;
      }

      button:first-child {
        left: 10px;
      }

      button:last-child {
        right: 10px;
      }

      img {
        max-width: 100%;
        height: auto;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `;
  }
}

customElements.define("image-carousel", ImageCarousel);