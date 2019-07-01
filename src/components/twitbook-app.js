import { LitElement, html } from 'lit-element';

export class TwitbookApp extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;

    render() {
        return html``;
    }
}
customElements.define('twitbook-app', TwitbookApp);
