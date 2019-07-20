import { LitElement, html, css } from 'lit-element';

class TwitbookHeader extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
            }

            nav {
                position: relative;
                background: white;
                height: 50px;
                background: #2D9CDB;
                box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
            }

            a {
                text-decoration: none;
                color: #232323;
                transition: color 0.3s ease;
            }

            a:hover {
                color: tomato;
            }

            #menuToggle {
                display: block;
                position: absolute;
                top: 15px;
                left: 15px;
                z-index: 1;
                -webkit-user-select: none;
                user-select: none;
            }

            #menuToggle input {
                display: block;
                width: 40px;
                height: 32px;
                position: absolute;
                top: -7px;
                left: -5px;
                cursor: pointer;
                opacity: 0; /* hide this */
                z-index: 2; /* and place it over the hamburger */
                -webkit-touch-callout: none;
            }

            #menuToggle span {
                display: block;
                width: 33px;
                height: 4px;
                margin-bottom: 5px;
                position: relative;
                background: white;
                border-radius: 3px;
                z-index: 1;
                transform-origin: 4px 0px;
                transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
            }

            #menuToggle span:first-child {
                transform-origin: 0% 0%;
            }

            #menuToggle span:nth-last-child(2) {
                transform-origin: 0% 100%;
            }

            #menuToggle input:checked ~ span {
                opacity: 1;
                transform: rotate(45deg) translate(-2px, -1px);
                background: white;
            }

            #menuToggle input:checked ~ span:nth-last-child(3) {
                opacity: 0;
                transform: rotate(0deg) scale(0.2, 0.2);
            }

            #menuToggle input:checked ~ span:nth-last-child(2) {
                transform: rotate(-45deg) translate(0, -1px);
            }

            #menu {
                padding:0;
                margin: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: -15px;
                left: -15px;
                width: 100vw;
                height: 100vh;
                background: #2D9CDB;
                list-style-type: none;
                -webkit-font-smoothing: antialiased;
                /* to stop flickering of text in safari */
                transform-origin: 0% 0%;
                transform: translate(-100vw, 0);
                transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
            }

            #menu li {
                padding: 10px 0;
                font-size: 22px;
                color:white;
            }

            #menu li:hover,
            #menu li:focus {
                color: white;
            }

            #menuToggle input:checked ~ ul {
                transform: none;
            }

            .app-header-content {
                margin-left: 60px;
                position: relative;
                top: 12px;
                font-size: 1.5em;
                color: white;
                display: flex;
            }

            .app-header-content .sign-in {
            font-size: 0.7em;
            margin-top: 5px;
            margin-left: auto;
            margin-right: 10px;
            }

            .sign-in {
                color:white;
            }

            .sign-in:hover {
                cursor: pointer;
            }

            .sign-in:hover,
            .sign-in:focus {
                color: white;
                outline: none;
            }

            .logo {
                color: white;
            }

            .logo:hover {
                color: white;
            }
        `;
    }

    closeMenuHandler(event) {
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
                    <a @click=${this.closeMenuHandler} href="/account">
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
                <a class="sign-in" href="/connexion">Se connecter</a>
            </div>
        </nav>
        `;
    }
}
customElements.define('twitbook-header', TwitbookHeader);
