import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(document.config);

export const Firebase = {
    auth: firebase.auth(),
    database: firebase.database()
}
