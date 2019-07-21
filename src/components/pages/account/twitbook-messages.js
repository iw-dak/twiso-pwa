import { LitElement, html, css } from 'lit-element';

export class TwitbookMessages extends LitElement {

    static get styles() {
        return css`
        :host {
            display: block;
        }
        `;
    }

    render() {
        return html`<p>Messages</p>`;
    }
}
customElements.define('twitbook-messages', TwitbookMessages);
