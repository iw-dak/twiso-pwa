import { LitElement, html, css } from 'lit-element';

class TwitbookFeed extends LitElement {

    constructor() {
        super();
      }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        `;
    }

    render() {
        return html`<p>TwitbookFeed</p>`;
    }
}
customElements.define('twitbook-feed', TwitbookFeed);
