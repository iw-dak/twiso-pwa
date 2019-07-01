import { LitElement, html, css } from 'lit-element';

class TwitbookHeader extends LitElement {
    static get styles() {
        return css`

        `;
    }

    render() {
        return html`
        <header>Twitbook</header>
        `;
    }
}
customElements.define('twitbook-header', TwitbookHeader);
