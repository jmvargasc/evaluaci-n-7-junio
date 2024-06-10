import { LitElement, html, css } from 'lit';
import  '../components/color-button';
import  '../components/pets-list';
import  '../components/click-counter';
import  '../components/image-carousel';
import  '../components/color-text-button';

export class PrincipalPage extends LitElement {
  static properties = {
    version: {},
    title: { type: String },

  };

  

  static styles = css`
    :host {
        display: block;
    }

  `;

  constructor() {
    super();
    this.version = 'STARTING';

  }



  render() {
    return html`
      <color-button
      colors='["yellow", "red", "green"]' 
      maxCount="10" 
      resetText="Reset" 
      countText="Contador">>
      </color-button>
      <pets-list></pets-list>
      <click-counter></click-counter>
      <color-text-button></color-text-button>
      <image-carousel
        .images=${[
          './app/pages/assets/axity.png',
          './app/pages/assets/axity2.jpg',
          './app/pages/assets/axity.png'
        ]}>
      </image-carousel>
    `;
  }
}

customElements.define('principal-page', PrincipalPage);


