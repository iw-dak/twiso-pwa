import { LitElement, html, css } from 'lit-element';
import { TwitbookAuthStyles } from '../../css/twitbook-auth-styles'
import { Utils } from '../../services/utils';
import { Firebase } from '../../js/firebase';

class TwitbookAuth extends LitElement {

    static get styles() {
        return TwitbookAuthStyles;
    }

    constructor() {
        super();
        this.email = '';
        this.password = '';
    }

    onBeforeEnter(context, commands, router) {
        if (Utils.isAuthenticated()) {
            return commands.redirect('/account/feeds');
        }
    }

    firstUpdated() {
        Firebase.auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                localStorage.setItem('is-logged', true);
            } else {
                localStorage.removeItem('is-logged');
            }
        });
    }

    render() {
        return html`
        <div class="wrapper">

            <!--  Header  -->
            <header class="section header">
                <div class="trapezoid"></div>

                <div class="header__text">
                    <h1>Twitbook</h1>
                    <p>Le monde a votre portée</p>
                </div>
            </header>

            <slot></slot>
        </div>
        `;
    }
}

customElements.define('twitbook-auth', TwitbookAuth);
