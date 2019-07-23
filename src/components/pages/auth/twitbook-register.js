import { LitElement, html } from 'lit-element';
import { TwitbookAuthSlotStyles } from '../../../css/twitbook-auth-slot-styles';
import { Utils } from '../../../services/utils';
import { Firebase } from '../../../js/firebase';

export class TwitbookRegister extends LitElement {

    constructor() {
        super();
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.password = '';
        this.passwordConfirmation = '';
        this.message = false;
        this.messageType = 'error';
    }

    static get properties() {
        return {
            firstname: { type: String },
            lastname: { type: String },
            email: { type: String },
            password: { type: String },
            passwordConfirmation: { type: String },
            submitted: { type: String },
            message: { type: String },
            messageType: { type: String }
        };
    }

    static get styles() {
        return TwitbookAuthSlotStyles;
    }

    handleForm(e) {
        e.preventDefault();

        if (!this.firstname) {
            this.message = "Saisissez votre prénom";
            return;
        }

        if (!this.lastname) {
            this.message = "Saisissez votre nom de famille";
            return;
        }

        if (!this.email) {
            this.message = "Saisissez votre email";
            return;
        }

        if (!this.password) {
            this.message = "Saisissez votre mot de passe";
            return;
        }

        if (!this.passwordConfirmation) {
            this.message = "Saisissez votre mot de passe de confirmation";
            return;
        }

        if (this.password !== this.passwordConfirmation) {
            this.message = "Vos deux mots de passe ne sont pas identiques";
            return;
        }

        Firebase.auth.createUserWithEmailAndPassword(this.email, this.password).then(user => {
            console.log('Registration successful', user);

            var usersRef = Firebase.database.ref(`users/${user.user.uid}`);
            var userInfo = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                image: 'https://s3.amazonaws.com/uifaces/faces/twitter/edkf/128.jpg',
                username: '@' + Utils.sluggify(this.firstname + ' ' + this.lastname)
            };

            usersRef.set(userInfo);
            localStorage.setItem('user-local', JSON.stringify(userInfo));

            Firebase.auth.currentUser.updateProfile({
                displayName: this.firstname
            });

            let email = this.email;
            let password = this.password;

            this.firstname = "";
            this.lastname = "";
            this.email = "";
            this.password = "";
            this.passwordConfirmation = "";
            this.message = "Inscription effectuée avec succès";
            this.messageType = 'success';

            this.shadowRoot.querySelector('button').disabled = true;

            setTimeout(() => {
                Firebase.auth.signInWithEmailAndPassword(email, password).then((user) => {
                    console.log('Login successfully', user);
                    window.dispatchEvent(
                        new CustomEvent('vaadin-router-go', { detail: { pathname: '/account/feeds' } }));
                });
            }, 1000);

        }).catch(error => {
            let errorInformation = JSON.parse(JSON.stringify(error));
            if (errorInformation.code === 'auth/email-already-in-use') {
                this.password = "";
                this.passwordConfirmation = "";
                this.message = "L'adresse email est déjà utilisée par un autre compte";
                this.messageType = 'error';
                return;
            }

            if (errorInformation.code === 'auth/invalid-email') {
                this.password = "";
                this.passwordConfirmation = "";
                this.message = "L'adresse email est invalide";
                this.messageType = 'error';
                return;
            }

            if (!Utils.isEmpty()) {
                this.message = "Une erreur s'est produite lors de l'inscription";
            }
        })
    }

    render() {
        return html`
        <!--  Sign Up  -->
        <section class="section sign-up">
            <div class="trapezoid"></div>
            <form @submit="${this.handleForm}">
                ${this.message ? html`<twitbook-message type=${this.messageType} message=${this.message}></twitbook-message>` :
                ''}
                <input type="text" name="firstname" placeholder="Prénom" .value="${this.firstname}" @input="${e => this.firstname = e.target.value}">

                <input type="text" name="lastname" placeholder="Nom" .value="${this.lastname}" @input="${e => this.lastname = e.target.value}">

                <input type="text" name="email" placeholder="Email" .value="${this.email}" @input="${e => this.email = e.target.value}">

                <input type="password" name="password" placeholder="Mot de passe" .value="${this.password}" @input="${e => this.password = e.target.value}">

                <input type="password" name="confirm" placeholder="Confirmation du mot de passe" .value="${this.passwordConfirmation}"
                    @input="${e => this.passwordConfirmation = e.target.value}">

                <button type="submit">S'incrire</button>

                <p class="opposite-btn opposite-btn2">
                    <a href="/auth/login">Avez-vous déjà un compte ?</a>
                </p>
            </form>
        </section>
        `;
    }
}
customElements.define('twitbook-register', TwitbookRegister);
