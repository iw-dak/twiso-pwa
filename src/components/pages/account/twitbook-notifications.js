import { LitElement, html, css } from 'lit-element';

export class TwitbookNotifications extends LitElement {
    static get styles() {
        return css`
        :host {
            display: block;
        }
        `;
    }

    render() {
        return html`<p>Notifications</p>`;
    }
}
customElements.define('twitbook-notifications', TwitbookNotifications);
