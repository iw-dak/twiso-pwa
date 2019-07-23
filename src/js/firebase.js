import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// to avoid Firebase App named '[DEFAULT]' already exists (app/duplicate-app) error...
if (!firebase.apps.length) {
    firebase.initializeApp(document.config);
}

export const Firebase = {
    auth: firebase.auth(),
    database: firebase.database(),
    store: firebase.storage().ref(),
}
