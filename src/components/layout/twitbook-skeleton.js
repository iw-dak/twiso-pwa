import { LitElement, html, css } from 'lit-element';

export class TwitbookSkeleton extends LitElement {

    static get styles() {
        return css`
        .skeleton-img, .skeleton-avatar, .tweet-footer, .tweet-text, .tweet-header {
            animation: skeleton 1s ease-in-out forwards infinite;
            animation-direction: alternate;
          }

          @keyframes skeleton {
            0% {
              opacity: 0.2;
              transform: translateY(6px) scale(0.98);
            }
            85%, 100% {
              opacity: 1;
              transform: translateY(0px) scale(1);
            }
          }
          *,
          *::before,
          *::after {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }

          body {
            background-color: #10171E;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            min-height: 100vh;
            padding: 2rem 1rem;
          }

          .tweet {
            background-color: #e6ecf0;
            padding: 0.8rem 0.75rem;
            margin: 0 auto;
            width: 100vh;
            max-width: 100vw;
            overflow: hidden;
          }
          .tweet-content {
            margin-left: calc(48px + 10px);
          }
          .tweet-header {
            transform-origin: bottom;
          }
          .tweet-text {
            animation-delay: 200ms;
          }
          .tweet-footer {
            display: flex;
            margin-top: 1rem;
            transform-origin: bottom;
            animation-delay: 400ms;
          }

          .skeleton {
            background-color: ##e6ecf0;
          }
          .skeleton-avatar {
            width: 48px;
            height: 48px;
            background-color: #213243;
            border-radius: 100%;
            float: left;
          }
          .skeleton-line {
            height: 0.7rem;
            background-color: #213243;
            border-radius: 3px;
            margin-bottom: 0.3rem;
          }
          .skeleton-line.heading {
            height: 1rem;
            margin-bottom: 0.5rem;
          }
          .skeleton-img {
            height: 250px;
            background-color: #213243;
            border-radius: 0.75rem;
            margin-top: 1.5rem;
            animation-delay: 300ms;
          }
          .skeleton-button {
            display: block;
            width: 26px;
            height: 26px;
            background-color: #213243;
            flex-shrink: 0;
          }
          .skeleton-button:not(:last-child) {
            margin-right: 2rem;
          }
          .skeleton-button.rounded {
            border-radius: 100%;
          }
        `;
    }
    render() {
        return html`
        <div class="tweet">
            <div class="skeleton">
                <div class="skeleton-avatar"></div>
                <div class="tweet-content">
                    <div class="tweet-header">
                        <div class="skeleton-line heading" style="width: 60%"></div>
                    </div>
                    <div class="tweet-text">
                        <div class="skeleton-line" style="width: 90%"></div>
                        <div class="skeleton-line" style="width: 100%"></div>
                        <div class="skeleton-line" style="width: 35%"></div>
                    </div>

                    <div class="skeleton-img"></div>

                    <div class="tweet-footer">
                        <div class="skeleton-button rounded"></div>
                        <div class="skeleton-button rounded"></div>
                        <div class="skeleton-button rounded"></div>
                        <div class="skeleton-button rounded"></div>
                    </div>
                </div>
            </div>
        </div>
`;
    }
}
customElements.define('twitbook-skeleton', TwitbookSkeleton);
