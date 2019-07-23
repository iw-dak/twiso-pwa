import { LitElement, html, css } from 'lit-element';

export class TwitbookFeed extends LitElement {

    static get styles() {
        return css`
        *,
        *::before,
        *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

          .tweet {
            border: 1px solid #e1e8ed;
            border-radius: 5px;
            position: relative;
            padding: 20px;
            background-color: #fff;
            width: 100%;
            cursor: pointer;
            transition: border-color 0.1s;
            margin-top: 10px;
          }

          .tweet:hover {
            border-color: #ccd6dd;
          }

          .tweet .tweet-head {
            display: flex;
            line-height: 1.2;
          }

          .tweet .tweet-head .tweet-image {
            display: flex;
            align-items: center;
            margin-right: 9px;
          }

          .tweet .tweet-head .tweet-image img {
            border-radius: 999px;
            height: 38px;
            width: 38px;
          }

          .tweet .tweet-head .tweet-author {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .tweet .tweet-head .tweet-author:hover .name {
            color: #3b94d9;
          }

          .tweet .tweet-head .tweet-author .name {
            font-weight: 800;
            transition: color 0.1s;
          }

          .tweet .tweet-head .tweet-author .handle {
            color: #697882;
            font-size: 0.875rem;
          }

          .tweet .tweet-footer .icons .fas {
            color: #697882;
            margin-right: 1rem;
            transition: color 0.1s;
          }

          .tweet .tweet-footer .icons .fas .icon-number {
            font-family: "Roboto", sans-serif;
            font-size: 1rem;
            font-weight: normal;
          }

          .tweet .tweet-footer .icons .fa-reply:hover {
            color: #3b94d9;
          }

          .tweet .tweet-footer .icons .fa-retweet:hover {
            color: #3da50d;
          }

          .tweet .tweet-footer .icons .fa-heart:hover {
            color: #E0245E;
          }

          .tweet .icons img {
              margin: 5px;
              width: 20px;
          }

          .tweet .icons {
              margin-top: 10px;
          }

          .tweet .tweet-body {
              margin-top: 10px;
          }

          @keyframes refresh {
            0% {
              transform: rotate(0);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `;
    }

    constructor() {
        super();
        this.data = '';
    }

    static get properties() {
        return {
            data: { type: Object }
        };
    }

    render() {

        return html`
        <div class="tweet">
            <div class="tweet-head">
                <div class="tweet-image">
                    <img src="${this.data.user.image}" alt="avatar">
                </div>
                <div class="tweet-author">
                    <div class="name">${`${this.data.user.firstname} ${this.data.user.lastname}`}</div>
                    <div class="handle">${this.data.user.username}</div>
                </div>
            </div>

            <div class="tweet-body">
                <p id="tweet-text">${this.data.text}</p>
            </div>

            <div class="tweet-footer">
                <div class="icons">
                    <img src="/src/assets/images/feeds/reply.png" alt="Répondre" title="Répondre">
                    <img src="/src/assets/images/feeds/retweet.png" alt="Retweeter" title="Retweeter">
                    <img src="/src/assets/images/feeds/like.png" alt="Like" title="Like">
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define('twitbook-feed', TwitbookFeed);
