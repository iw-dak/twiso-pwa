import { LitElement, html } from 'lit-element';

export class TwitbookRegister extends LitElement {

    static get styles() {
        return css`
        :host {
            display: block;
        }
        `;
    }

    render() {
        return html`Register`;
    }
}
customElements.define('twitbook-register', TwitbookRegister);
