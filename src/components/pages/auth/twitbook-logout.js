import { LitElement, html } from 'lit-element';
import { Firebase } from '../../../js/firebase';

class TwitbookLogout extends LitElement {

    firstUpdated() {
        Firebase.auth.signOut().then(() => {
            window.dispatchEvent(
                new CustomEvent('vaadin-router-go', { detail: { pathname: '/' } }));
        });
    }

    render() {
        return html``;
    }
}
customElements.define('twitbook-logout', TwitbookLogout);
