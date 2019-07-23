import '../components/layout/twitbook-account'
import '../components/layout/twitbook-auth'
import '../components/pages/account/twitbook-feeds'
import '../components/pages/account/twitbook-messages'
import '../components/pages/account/twitbook-not-found'
import '../components/pages/account/twitbook-notifications'
import '../components/pages/account/twitbook-profil'
import '../components/pages/auth/twitbook-login'
import '../components/pages/auth/twitbook-register'
import '../components/pages/auth/twitbook-logout'

import { Router } from '@vaadin/router'

window.addEventListener('load', () => {
    initRouter();
});

function initRouter() {
    const router = new Router(document.querySelector('#root'));
    router.setRoutes([
        { path: '/', redirect: '/auth/login' },
        {
            path: '/auth', component: 'twitbook-auth',
            children: [
                { path: '/login', component: 'twitbook-login' },
                { path: '/register', component: 'twitbook-register' },
            ]
        },
        {
            path: '/account', component: 'twitbook-account',
            children: [
                { path: '/profil', component: 'twitbook-profil' },
                { path: '/feeds', component: 'twitbook-feeds' },
                { path: '/messages', component: 'twitbook-messages' },
                { path: '/notifications', component: 'twitbook-notifications' },
                { path: '/deconnexion', component: 'twitbook-logout' },
                { path: '(.*)', component: 'twitbook-not-found' }
            ]
        },
        {
            path: '(.*)',
            component: 'twitbook-not-found'
        }
    ]);
}
