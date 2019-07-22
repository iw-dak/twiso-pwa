import { LitElement, html } from 'lit-element';

export class TwitbookTweet extends LitElement {
    handleSubmit() {

    }

    render() {
        return html`
            <form onSubmit=${this.handleSubmit}>
                <input type="text">
            </form>
        `;
    }
}

customElements.define('twitbook-tweet', TwitbookTweet);
