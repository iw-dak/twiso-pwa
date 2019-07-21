import { LitElement, html, css } from 'lit-element';

class TwitbookNotFound extends LitElement {

    static get styles() {
        return css`
        :host {
            display: block;
        }
        `;
    }

    render() {
        return html`
        <span>Cette page est introuvable</span>
        `;
    }
}
customElements.define('twitbook-not-found', TwitbookNotFound);
