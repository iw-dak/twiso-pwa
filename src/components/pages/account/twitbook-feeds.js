import { LitElement, html, css } from 'lit-element';
import '../../layout/twitbook-tweet';
import '../../layout/twitbook-skeleton';
import '../../layout/twitbook-feed';
import '../../data/twitbook-store';

import { Firebase } from '../../../js/firebase';

class TwitbookFeeds extends LitElement {

    constructor() {
        super()
        this.tweets = null;
    }

    static get properties() {
        return {
            tweets: { type: Array },
        };
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }

        .wrapper {
            padding: 10px;
        }
        `;
    }
    updateFeeds(e) {
        console.log('Bonjour');
        this.tweets = e.detail;
    }

    firstUpdated() {
        setTimeout(() => {
            var tweetsRef = Firebase.database.ref('tweets');

            tweetsRef.on('value', (snapshot) => {
                var tweets = [];
                snapshot.forEach(function (childSnapshot) {
                    tweets.push(childSnapshot.val());
                });

                this.tweets = tweets;
            });
        }, 2000);
    }

    render() {
        return html`

        ${!this.tweets ? html`<twitbook-skeleton></twitbook-skeleton>
        <twitbook-skeleton></twitbook-skeleton>` :
            html`<twitbook-store collection="tweets" @child-changed="${this.updateFeeds}"></twitbook-store>
        <div class="wrapper">
            <twitbook-tweet></twitbook-tweet>
            ${this.tweets.map((tweet) =>
                html`<twitbook-feed .data="${tweet}"></twitbook-feed>`)
                }
        </div>`
            }
        `;
    }
}
customElements.define('twitbook-feeds', TwitbookFeeds);
