import { LitElement, html } from 'lit-element';
import { Firebase } from '../../../js/firebase';

class TwitbookLogout extends LitElement {
    onBeforeEnter(context, commands, router) {
        Firebase.auth.signOut();
        return commands.redirect('/');
    }

    render() {
        return html``;
    }
}
customElements.define('twitbook-logout', TwitbookLogout);
