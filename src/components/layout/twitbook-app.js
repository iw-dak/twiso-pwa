import { LitElement, html, css } from 'lit-element';
import './twitbook-header';
import { Utils } from '../../services/utils';

export class TwitbookApp extends LitElement {

    onBeforeEnter(context, commands, router) {
        if (!Utils.isAuthenticated()) {
            return commands.redirect('/');
        }
    }

    render() {
        return html`
        <twitbook-header></twitbook-header>
        <slot></slot>
        `;
    }
}

customElements.define('twitbook-app', TwitbookApp);
