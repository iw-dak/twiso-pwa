import { css } from 'lit-element';

export const TwitbookAuthStyles = css`
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
        height: 100%;
        min-height: 100vh;
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
        padding: 3.5rem 0 4rem;
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
        background: linear-gradient(var(--theme-primary), var(--theme-primary));
        background-position: top center;
        background-attachment: fixed;
    }
`;
