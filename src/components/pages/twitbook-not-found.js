import { LitElement, html, css} from 'lit-element';

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
        <span>404</span>
        `;
    }
}
customElements.define('twitbook-not-found', TwitbookNotFound);
