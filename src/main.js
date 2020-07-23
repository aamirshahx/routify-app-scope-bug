import HMR from '@sveltech/routify/hmr'
import App from './App.svelte';

function createEl(id) {
    var el = document.createElement('div');
    el.setAttribute('id', id);
    document.body.appendChild(el);
    return el;
}

var target = document.getElementById('routify') || createEl('routify');
const app = HMR(App, { target }, 'routify-app')

export default app;


/** Service worker. Uncomment to use service worker */

// if ('serviceWorker' in navigator) {
//     import('workbox-window').then(async ({ Workbox }) => {
//         const wb = new Workbox('/sw.js')
//         const registration = await wb.register()
//         wb.addEventListener('installed', () => (console.log('installed service worker')))
//         wb.addEventListener('externalinstalled', () => (console.log('installed service worker')))  
//     })
// }
