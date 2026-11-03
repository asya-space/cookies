import { initCookiesAgreement, resetPrevCookies } from '../src/cookiesPopup.js';
import '../src/style.css';

document.addEventListener('DOMContentLoaded', () => {
   resetPrevCookies();
   initCookiesAgreement({privacyUrl: 'https://google.com'});
})