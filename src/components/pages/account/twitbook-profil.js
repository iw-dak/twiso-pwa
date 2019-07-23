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

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(Firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case Firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case Firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            }, function () {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) 
                {
                    console.log('File available at', downloadURL);
                });
            });
    }

    static get styles() {
        return TwitbookProfileStyles;
    }
    render() {
        return html`
        <span>Page de profil</span><br>
        <form @submit="${this.uploadFile}">
             <input type="file" name="user-img"
            accept="image/png, image/jpeg" @input="${e => this.fileName = e.target.value}" @change=${this.getInputFile}>
            <button type="submit">Enregistrer</button>
        </form>
        `;
    }
}
customElements.define('twitbook-profil', TwitbookProfil);
