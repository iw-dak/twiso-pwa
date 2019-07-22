import firebase from 'firebase/app';
import 'firebase/auth';
import { Firebase } from '../js/firebase';

export const Utils = {
    isAuthenticated() {
        return localStorage.getItem('is-logged');
    },
    setCredentials(user) {
        if (user) {
            localStorage.setItem('is-logged', true);
            localStorage.setItem('user', user);
        } else {
            localStorage.removeItem('is-logged');
            localStorage.removeItem('user');
        }
    },
    getUser() {
        return new Promise((resolve, reject) => {
            Firebase.auth.onAuthStateChanged((user) => {
                if (user) { // User is signed in.
                    console.log('Logged in');
                    this.setCredentials(user)
                    resolve(user);
                } else {
                    this.setCredentials(false);
                    reject(false);
                }
            });
        });
    },
    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    },

};
