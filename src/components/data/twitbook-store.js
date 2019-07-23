import { LitElement, html } from 'lit-element';
import { Firebase } from '../../js/firebase';

class TwitbookStore extends LitElement {
    constructor() {
        super();
        this.data = [];
        this.collection = '';
    }

    static get properties() {
        return {
            data: { type: Array },
            collection: String
        }
    }

    firstUpdated() {
        Firebase.db.collection(this.collection).onSnapshot(ref => {
            ref.docChanges().forEach(change => {
                const { oldIndex, newIndex, doc, type } = change;
                if (type == 'added') {
                    this.data = [...this.data, doc.data()];
                    this.dispatchEvent(new CustomEvent('child-changed', { detail: this.data }))
                } else if (type == 'removed') {
                    this.data.splice(oldIndex, 1);
                    this.dispatchEvent(new CustomEvent('child-changed', { detail: this.data }))
                }
            })
        });
    }

    render() {
        return html``;
    }
}
customElements.define('twitbook-store', TwitbookStore);
