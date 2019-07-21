import { LitElement, html, css } from 'lit-element';
import { TwitbookAuthSlotStyles } from '../../../css/twitbook-auth-slot-styles';
import '../../layout/twitbook-message';
import { Utils } from '../../../services/utils';
import { Firebase } from '../../../js/firebase';


class TwitbookLogin extends LitElement {

    static get styles() {
        return TwitbookAuthSlotStyles;
    }

    constructor() {
        super();
        this.email = '';
        this.password = '';
        this.message = false;
        this.messageType = 'error';
    }

    static get properties() {
        return {
            email: { type: String },
            password: { type: String },
            message: { type: String },
            messageType: { type: String }
        };
    }

    handleForm(e) {
        e.preventDefault();

        if (!this.email) {
            this.message = "Saisissez votre email";
            return;
        }

        if (!this.password) {
            this.message = "Saisissez votre mot de passe";
            return;
        }

        Firebase.auth.signInWithEmailAndPassword(this.email, this.password).then(user => {
            this.message = "Connexion réussie";
            this.password = "";
            this.email = "";
            this.messageType = "success";
            this.shadowRoot.querySelector('button').disabled = true;

            setTimeout(() => {
                window.dispatchEvent(
                    new CustomEvent('vaadin-router-go', { detail: { pathname: '/account/feeds' } }));
            }, 1000);
        }).catch(error => {
            let errorInformation = JSON.parse(JSON.stringify(error));
            if (errorInformation.code === 'auth/user-not-found') {
                this.message = "Vous n'êtes pas encore inscrits";
                this.password = "";
                this.email = "";
                return;
            }

            if (errorInformation.code === 'auth/wrong-password') {
                this.message = "Votre mot de passe est incorrect";
                this.password = "";
                return;
            }

            if (!Utils.isEmpty(errorInformation)) {
                this.message = "Une erreur inconnu s'est produite. Réessayez";
                this.password = "";
            }
            console.log("Warning 🤪⚠️⚠️⚠️", errorInformation);
        });
    }

    render() {
        return html`
        <!--  Sign In  -->
        <section class="section sign-in">
            <form @submit="${this.handleForm}">
                ${this.message ? html`<twitbook-message type=${this.messageType} message=${this.message}></twitbook-message>` :
                ''}
                <input type="email" name="email" placeholder="Email" .value="${this.email}" @input="${e => this.email = e.target.value}">
                <input type="password" name="password" placeholder="Password" .value="${this.password}" @input="${e => this.password = e.target.value}">
                <button>Se connecter</button>
                <p class="opposite-btn opposite-btn1">
                    <a href="/auth/register">Pas encore de compte ?</a>
                </p>
            </form>
        </section>
        `;
    }
}
customElements.define('twitbook-login', TwitbookLogin);
