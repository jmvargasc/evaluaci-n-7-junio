import { LitElement, html, css } from 'lit';

export class Contador extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            contador: { type: Number },
            colosPos: { type: Number },
            colores: { type: Array }
        };
    }

    constructor(){
        super();
        this.contador = 0;
        this.colosPos = 0;
        this.colores = ['yellow', 'red', 'green'];
    }

    onIncrements(){
        let btn=this.shadowRoot.querySelector('.btn');
        if (this.contador>=10) return;
        
        this.contador++;
        this.colosPos = (this.colosPos + 1) % this.colores.length;
       if ( this.colosPos===1) {
        btn.style.backgroundColor =this.colores[this.colosPos-1];
       }else if(this.colosPos===2){
        btn.style.backgroundColor =this.colores[this.colosPos-1];
       }else{
        console.log(this.colosPos);
        btn.style.backgroundColor =this.colores[this.colosPos+2];
       }
    }


    render() {
        return html`
        <h1>${this.contador}</h1>
        <button @click="${this.onIncrements}" class="btn">Incrementar</button>
        `;
    }
}
customElements.define('contador-page', Contador);
