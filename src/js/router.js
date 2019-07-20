import '../components/pages/twitbook-feeds'
import '../components/pages/twitbook-messages'
import '../components/pages/twitbook-not-found'
import '../components/pages/twitbook-notifications'
import '../components/pages/twitbook-auth'
import '../components/layout/twitbook-app'

import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
    initRouter();
});

function initRouter() {
    const router = new Router(document.querySelector('#root'));
    router.setRoutes([
        { path: '/', component: 'twitbook-auth' },
        {
            path: '/account', component: 'twitbook-app',
            children: [
                { path: '/feeds', component: 'twitbook-feeds' },
                { path: '/messages', component: 'twitbook-messages' },
                { path: '/notifications', component: 'twitbook-notifications' },
                { path: '(.*)', component: 'twitbook-not-found' }
            ]
        },
        {
            path: '(.*)',
            component: 'twitbook-not-found'
        }
    ]);
}
