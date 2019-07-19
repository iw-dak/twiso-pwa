import { LitElement, html, css } from 'lit-element';

export class TwitbookLogin extends LitElement {

    static get styles() {
        return css`
        :host {
            display: block;
        }
        `;
    }

    render() {
        return html`<p>Se connecter</p>`;
    }
}

customElements.define('twitbook-login', TwitbookLogin);
