import { LitElement, html, css } from 'lit-element';

export class TwitbookMessage extends LitElement {

    static get properties() {
        return {
            message: { type: String },
            type: { type: String }
        };
    }

    static get styles() {
        return css`

          .alert__container {
            background-color: rgba(255, 255, 255, 0.75);
            width: 100%;
          }

          .alert__container .alert {
            border-radius: 0.125rem;
            padding: 0 0.5rem;
            color: black;
          }

          .alert__container .alert__icon {
            margin: 0 1rem;
          }

          .alert__container .alert__text {
            display: inline-block;
            font-size: 1rem;
          }

          .alert__container .alert__close span {
            font-size: 1rem;
          }

          .alert__container .alert__primary {
            background-color: #ccf2ff;
          }

          .alert__container .alert__secondary {
            background-color: #E2E3E3;
          }

          .alert__container .alert__warning {
            background-color: #ffff99;
          }

          .alert__container .alert__error {
            color: #721c24;
            background-color: #ffb3b3;
          }

          .alert__container .alert__success {
            background-color: #d6f5d6;
          }

          p {
              margin: 0.5em;
          }

          .closed {
            display: none;
          }
        `;
    }

    render() {
        return html`
            <div class='alert__container ${this.type}'>
                <div class='alert alert__${this.type} spacer' role='alert'>
                    <p class='alert__text'>${this.message}</p>
                </div>
            </div>
        `;
    }
}
customElements.define('twitbook-message', TwitbookMessage);
