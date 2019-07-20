import { LitElement, html, css } from 'lit-element';

export class TwitbookAuth extends LitElement {

    static get styles() {
        return css`
            :host {
                display: block;
            }

            * {
                box-sizing: border-box;
                font-family: inherit;
            }

            body {
                margin: 0;
                padding-bottom: 20px;
                font-family: "Nunito", sans-serif;
                color: #fefefe;
                background: #fefefe;
            }

            .wrapper {
                margin: 0 auto;
                width: 100%;
                height: 100vh;
                box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            }

            .section {
                padding: 1rem;
            }

            .header {
                position: relative;
                text-align: center;
            }

            .header__text {
                position: relative;
                padding: 3.5rem 0 7rem;
                color: white;
            }

            .header__text > h1 {
                margin: 0;
                font-size: 2.5rem;
            }

            .header > .trapezoid {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                transform: skewY(-10deg);
                transform-origin: top left;
               // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
                background: linear-gradient(#2D9CDB, #2D9CDB);
                background-position: top center;
                background-attachment: fixed;
            }

            form {
                margin: 0 auto;
                max-width: 17rem;
                overflow: auto;
            }

            form > * + * {
                margin-top: 1rem;
            }

            form > input {
                border: 0;
                border-bottom: 1px solid #2D9CDB;
                border-radius: 0;
                width: 100%;
                height: 2rem;
                padding: 0 0 0.25rem 0;
                font-size: 1rem;
                color: #2D9CDB;
                background: #fefefe;
            }

            form > input:focus {
                outline: none;
            }

            form > input::placeholder {
                color: #2D9CDB;
            }

            form > button {
                margin-top: 2rem;
                border: 0;
                border-radius: 200px;
                width: 100%;
                padding: 0.85rem;
                font-size: 1rem;
                color: #fefefe;
                background: #2D9CDB;
            }

            form > button:focus {
                outline: none;
            }

            form > p {
                margin: 0.25rem 0 0;
                text-align: center;
                color: #2D9CDB;
            }

            .sign-up {
                display: none;
            }

            .opposite-btn1,
            .opposite-btn2 {
                margin-top: 20px;
                cursor: pointer;
            }
        `;
    }

    firstUpdated() {
        const signUp = this.shadowRoot.querySelector('.sign-up');
        const signIn = this.shadowRoot.querySelector('.sign-in');

        // Switch btns: there are two only because I was in a hurry a didn't want to write all the javascript immediately. In a production environment, a better solution would be implemented.
        const btn1 = this.shadowRoot.querySelector('.opposite-btn1');
        const btn2 = this.shadowRoot.querySelector('.opposite-btn2');


        // Switches to 'Create Account'
        btn1.addEventListener('click', () => {
            signUp.style.display = 'block';
            signIn.style.display = 'none';
        });

        // Switches to 'Sign In'
        btn2.addEventListener('click', () => {
            signUp.style.display = 'none';
            signIn.style.display = 'block';
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

            <!--  Sign Up  -->
            <section class="section sign-up">
                <div class="trapezoid"></div>
                <form action="">
                    <input type="text" name="name" placeholder="Name">
                    <input type="text" name="email" placeholder="Email">
                    <input type="password" name="password" placeholder="Mot de passe">
                    <input type="password" name="confirm" placeholder="Confirmation du mot de passe">
                    <button>Create Account</button>
                    <p class="opposite-btn2">Avez-vous déjà un compte ?</p>
                </form>
            </section>

            <!--  Sign In  -->
            <section class="section sign-in">
                <form action="">
                    <input type="text" name="email" placeholder="Email">
                    <input type="password" name="password" placeholder="Password">
                    <button>Se connecter</button>
                    <p class="opposite-btn1">Pas encore de compte ?</p>
                </form>
            </section>
        </div>
        `;
    }
}

customElements.define('twitbook-auth', TwitbookAuth);
