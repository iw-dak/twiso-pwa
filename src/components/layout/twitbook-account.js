import { LitElement, html, css } from 'lit-element';
import './twitbook-header';
import { Utils } from '../../services/utils';
import { Firebase } from '../../js/firebase';
class TwitbookAccount extends LitElement {

    onBeforeEnter(context, commands, router) {
        if (!Utils.isAuthenticated()) {
            return commands.redirect('/');
        }
    }

    async firstUpdated() {
        try {
            let user = await Utils.getUser();
            console.log(user);
        } catch (e) {
            window.dispatchEvent(
                new CustomEvent('vaadin-router-go', { detail: { pathname: '/' } }));
        }
    }

    render() {
        return html`
        <twitbook-header></twitbook-header>
        <slot></slot>
        `;
    }
}

customElements.define('twitbook-account', TwitbookAccount);
