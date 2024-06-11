import { LitElement, html, css } from "lit";

export class Spinner extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.797);
        z-index: 9999; 
      }

      .lds-hourglass,
      .lds-hourglass:after {
        box-sizing: border-box;
        
      }
      .lds-hourglass {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .lds-hourglass:after {
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 8px;
        box-sizing: border-box;
        border: 32px solid currentColor;
        border-color: currentColor transparent currentColor transparent;
        animation: lds-hourglass 1.2s infinite;
      }
      p{
        font-weight:bold;
        font-size:1.2rem;
      }
      @keyframes lds-hourglass {
        0% {
          transform: rotate(0);
          animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        50% {
          transform: rotate(900deg);
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        100% {
          transform: rotate(1800deg);
        }
      }
    `,
  ];

  render() {
    return html`<div class="lds-hourglass"></div>
        
    <p>Cargando...</p>`
    
    ;
  }
}
customElements.define("spinner-page", Spinner);
