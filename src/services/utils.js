import firebase from 'firebase/app';
import 'firebase/auth';
import { Firebase } from '../js/firebase';

export const Utils = {
    isAuthenticated() {
        return localStorage.getItem('is-logged');
    },
    setAuthenticateStatus(status) {
        if (status) {
            localStorage.setItem('is-logged', status);
        } else {
            localStorage.removeItem('is-logged');
        }
    },
    getUser() {
        return Firebase.auth.currentUser;
    },
    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
};
