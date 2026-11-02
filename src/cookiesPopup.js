import { template } from './template.js';

const COOKIE_NAME = 'cookieAgreement';
const CONSENT = {
    ACCEPTED: 'accepted',
    REJECTED: 'rejected'
}
const STORAGE_KEY = 'cookies-popup-consent';

function getCookie(name) {
    const cookies  = document.cookie.split('; ');
    for (let item of cookies) {
        const [key, value] = item.split('=');
        if (key === name) return value;
    }
    return null;
}

function setCookie(name, value, days) {
    const expire = new Date();
    expire.setTime(expire.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${expire.toUTCString()}; path=/; samesite=lax`;
}


function enableAnalytics() {
    console.log('Analytics is turned on 📈');
}

export function initCookiesAgreement() {
    if (document.cookie.includes('cookiesConsent=true')) return;

    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent) return;

    document.body.insertAdjacentHTML('beforeend', template);

    const banner = document.querySelector('.cookie');
    const acceptBtn = document.querySelector('#accept');
    const rejectBtn = document.querySelector('#reject');
    const changeBtn = document.querySelector('#change');

    if(!banner || !acceptBtn || !rejectBtn) return;
    
    const decision = getCookie(COOKIE_NAME);

    if(!decision) {
        banner.classList.add('cookie--visible');
    };

    if(decision === CONSENT.ACCEPTED) {
        enableAnalytics();
    };

    acceptBtn.addEventListener('click', () => {
        setCookie(COOKIE_NAME, CONSENT.ACCEPTED, 1);
        banner.classList.remove('cookie--visible');
        enableAnalytics();
    });

    rejectBtn.addEventListener('click', () => {
        setCookie(COOKIE_NAME, CONSENT.REJECTED, 1);
        banner.classList.remove('cookie--visible');
        setTimeout(() => {
            document.querySelector('.change-mind').classList.add('visible');
        }, 3000)
    });

    if(changeBtn) {
        changeBtn.addEventListener('click', () => {
            banner.classList.add('cookie--visible');
            document.querySelector('.change-mind').classList.remove('visible');
        })
    };
}

export function resetPrevCookies() {
    localStorage.removeItem(STORAGE_KEY);
}