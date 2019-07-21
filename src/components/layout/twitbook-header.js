import { LitElement, html, css } from 'lit-element';
import { TwitbookHeaderStyles } from '../../css/twitbook-header-styles';

class TwitbookHeader extends LitElement {
    static get styles() {
        return TwitbookHeaderStyles;
    }

    closeMenuHandler(event) {
        // close toggle menu
        this.shadowRoot.getElementById('menuToggle').getElementsByTagName('input')[0].checked = false;
    }

    render() {
        return html`

        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <a @click=${this.closeMenuHandler} href="/account/profil">
                        <li>Profil</li>
                    </a>

                    <a @click=${this.closeMenuHandler} href="/account/feeds">
                        <li>Actualités</li>
                    </a>

                    <a @click=${this.closeMenuHandler} href="/account/messages">
                        <li>Messages</li>
                    </a>

                    <a @click=${this.closeMenuHandler} href="/account/notifications">
                        <li>Notifications</li>
                    </a>

                    <a @click=${this.closeMenuHandler} href="/account/contact">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>

            <div class="app-header-content">
                <a class="logo" href="/">Twitbook</a>
                <a class="sign-in" href="/account/deconnexion">Se deconnecter</a>
            </div>
        </nav>
        `;
    }
}
customElements.define('twitbook-header', TwitbookHeader);
