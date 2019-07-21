import { LitElement, html, css } from 'lit-element';

class TwitbookFeeds extends LitElement {

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
        return html`<p>TwitbookFeeds</p>`;
    }
}
customElements.define('twitbook-feeds', TwitbookFeeds);
