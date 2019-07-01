import { LitElement, html, css } from 'lit-element';
import './layout/twitbook-header'

export class TwitbookApp extends LitElement {

    static get styles() {
        return css`
        :host {
            display: block;
        }
        `;
    }

    render() {
        return html`
        <twitbook-header></twitbook-header>
        <p>Content</p>
        `;
    }
}
customElements.define('twitbook-app', TwitbookApp);
