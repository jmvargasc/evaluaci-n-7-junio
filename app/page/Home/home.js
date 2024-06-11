import { LitElement, html, css } from 'lit';

import '../../components/api/api.js'

export class Home extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <api-page></api-page>
        `;
    }
}
customElements.define('home-page', Home);
