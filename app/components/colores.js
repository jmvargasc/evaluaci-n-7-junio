import { LitElement, html, css } from 'lit';

export class Colores extends LitElement {
    static styles = [
        css`
            :host {
                display: block; //propiedades sirven para que pueda modifcar no es publica-varibale no la podemos modificar privada

            }
        `
    ];

    static get properties() {
        return {
            colores: { type: String }
        };
    }


    cambiaColor(){
        const hex = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i <6; i++) {
            color += hex[Math.floor(Math.random()*16)];
        }
       this.shadowRoot.querySelector('.palabra').style.color=color;
    }

    render() {
        return html`
        <h1 class="palabra">HOLA</h1>
        <button @click="${this.cambiaColor}">Cambiar color</button>
        `;
    }
}
customElements.define('colores-app', Colores);
