import '../components/pages/twitbook-feed'
import '../components/pages/twitbook-login'
import '../components/pages/twitbook-messages'
import '../components/pages/twitbook-not-found'
import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
    initRouter();
});

function initRouter() {
    const router = new Router(document.querySelector('#root'));
    router.setRoutes([
        {
            path: '/',
            component: 'twitbook-feed'
        },
        {
            path: '/connexion',
            component: 'twitbook-login'
        },
        {
            path: '/messages',
            component: 'twitbook-messages'
        },
        {
            path: '/notifications',
            component: 'twitbook-notifications'
        },
        {
            path: '(.*)',
            component: 'twitbook-not-found'
        }
    ]);
}
