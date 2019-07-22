import { LitElement, html, css } from 'lit-element';
import { Firebase } from '../../../js/firebase';
import '../../layout/twitbook-tweet';

class TwitbookFeeds extends LitElement {

    constructor() {
        super();
        this.user = '';
    }

    static get properties() {
        return {
            user: { type: Object },
        };
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        `;
    }

    render() {
        return html`
            <twitbook-tweet></twitbook-tweet>
        `;
    }
}
customElements.define('twitbook-feeds', TwitbookFeeds);
