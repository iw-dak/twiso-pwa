import { LitElement, html } from 'lit-element';
import { TwitbookProfileStyles } from '../../../css/twitbook-profile-styles';
import { Firebase } from '../../../js/Firebase';

export class TwitbookProfil extends LitElement {

    constructor() {
        super();
        this.file = {};
    }
    static get properties() {
        return {
            file: { type: Object },
        };
    }

    getInputFile(e) {
        let file = e.target.files[0];
        this.file = file;
    }
    uploadFile(e) {
        e.preventDefault();

        var storageRef = Firebase.store;

        // File or Blob 
        var file = this.file;

        // Create the file metadata
        var metadata = {
            contentType: 'image/jpeg'
        };

        // Upload file and metadata to the object 'images/filename'
        var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);

        // Upload compvared successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL);
            var user = firebase.auth().currentUser;
            //Link profile picture to user
            user.updateProfile({
                photoURL: downloadURL
            }).then(function () {
                // Update successful.
            }).catch(function (error) {
                // An error happened.
            });
        });
    }

    static get styles() {
        return TwitbookProfileStyles;
    }
    render() {
        return html`
        <h3>Page de profil</h3>
        <form @submit="${this.uploadFile}">
             <input type="file" name="user-img"
            accept="image/png, image/jpeg" @input="${e => this.fileName = e.target.value}" @change=${this.getInputFile}>
            <button type="submit">Enregistrer</button>
        </form>
        `;
    }
}
customElements.define('twitbook-profil', TwitbookProfil);
