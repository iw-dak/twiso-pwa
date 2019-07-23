import { LitElement, html, css } from 'lit-element';
import { Firebase } from '../../js/firebase';
import { Utils } from '../../services/utils';

export class TwitbookTweet extends LitElement {
    constructor() {
        super();
        this.text = '';
    }

    static get styles() {
        return css`
        *,
        *::before,
        *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        input {
            width: 100%;
            background-color: #e6ecf0;
            border: 0;
            outline: 0;
            padding: 10px;
            border-radius: 5px;
        }
        `;
    }

    static get properties() {
        return {
            text: { type: String }
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Utils.getUser();
        console.log(user);
        // Add tweet to user
        var newTweetText = this.text;
        var tweets = Firebase.database.ref(`users/${user.uid}`).child('tweets');
        tweets.push({ text: newTweetText });

        // get user information
        var userRef = Firebase.database.ref(`users/${user.uid}`);
        var userChange = JSON.parse(localStorage.getItem('user-local'));
        console.log(userChange)
        userRef.on('value', function (snapshot) {
            userChange = snapshot.val();
        });

        // save tweet
        var newRef = Firebase.database.ref('tweets').push({
            text: newTweetText
        });

        var newID = newRef.getKey();
        Firebase.database.ref(`tweets/${newID}/user`).set({
            firstname: userChange.firstname,
            lastname: userChange.lastname,
            email: userChange.email,
            image: userChange.image,
            username: userChange.username
        });

        // Clear tweet input
        this.text = '';
    }

    render() {
        return html`
            <form @submit="${this.handleSubmit}">
                <input type="text" placeholder="Quoi de neuf ?" name="text" .value="${this.text}" @input="${e => this.text = e.target.value}">
            </form>
        `;
    }
}

customElements.define('twitbook-tweet', TwitbookTweet);
