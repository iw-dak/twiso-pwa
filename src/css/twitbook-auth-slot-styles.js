import { css } from 'lit-element';

export const TwitbookAuthSlotStyles = css`
    form {
        margin: 0 auto;
        max-width: 18rem;
        overflow: auto;
    }

    form > * + * {
        margin-top: 1rem;
    }

    form > input {
        border: 0;
        border-bottom: 1px solid var(--theme-primary);
        border-radius: 0;
        width: 100%;
        height: 2rem;
        padding: 0 0 0.25rem 0;
        font-size: 1rem;
        color: var(--theme-primary);
        background: #fefefe;
    }

    form > input:focus {
        outline: none;
    }

    form > input::placeholder {
        color: var(--theme-primary);
    }

    form > button {
        margin-top: 2rem;
        border: 0;
        border-radius: 200px;
        width: 100%;
        padding: 0.85rem;
        font-size: 1rem;
        color: #fefefe;
        background: var(--theme-primary);
        cursor: pointer;
    }

    form > button:focus {
        outline: none;
    }

    form > p {
        margin: 0.25rem 0 0;
        text-align: center;
        color: var(--theme-primary);
    }

    .opposite-btn1,
    .opposite-btn2 {
        text-align: center;
        margin-top: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
    }

    .opposite-btn a {
        color: var(--theme-primary);
        text-decoration: none;
    }

    .section.sign-up button:disabled,
    .section.sign-in button:disabled,
    .section.sign-up button[disabled],
    .section.sign-in button[disabled] {
        border: 1px solid #999999;
        background-color: #cccccc;
        color: #666666;
        cursor: wait;
        pointer-events: none;
    }
`;
