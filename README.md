# Cookies Popup
A lightweight cookie consent popup for modern JavaScript applications.<br>

Demo: <br>
<img width="50%" height="325" alt="cookies" src="https://github.com/user-attachments/assets/2e16b13d-4713-4c54-927b-0f7572284289" />


## Features
- Simple setup
- Stores consent using localStorage
- Vanilla JavaScript
- No runtime dependencies
- Compatible with Vite projects

## Installation
Install from GitHub:

`npm install git+https://github.com/asya-space/cookies.git`

Usage
```
import { initCookiesAgreement } from 'cookies-popup';
initCookiesAgreement();
```

Example:
```
import { initCookiesAgreement } from 'cookies-popup';
document.addEventListener('DOMContentLoaded', () => {
    initCookiesAgreement();
});
```
If you don't see popup with Cookies Consent, use Reset function:
```
import { resetPrevCookies, initCookiesAgreement } from 'cookies-popup';

document.addEventListener('DOMContentLoaded', () => {
    resetPrevCookies(); // <=
    initCookiesAgreement();
});
```
or just like this:
```
import { resetPrevCookies, initCookiesAgreement } from 'cookies-popup';

resetPrevCookies(); // <=
initCookiesAgreement();
```
## Development 
Clone the repository: <br>
`git clone https://github.com/asya-space/cookies.git`

Install dependencies: <br>
`npm install` <br>

Start development server: <br>
`npm run dev` <br>

Build:
`npm run build` <br>

You also can add custom colors by replacing default. <br>
Example: <br>
Just write your custom color for buttons, background, link and text in `initCookiesAgreement()` function (add an object with colors properties). Check it out!<br>
```
initCookiesAgreement({
    color1: '#111111',
    color2: '#ff9800',
    color3: '#ffffff',
    hover: '#ff5722'
});
```

Project Structure <br>
```
cookies-popup/
├── src/
│   ├── cookiesPopup.js
│   ├── template.js
│   └── style.css
├── demo/
├── index.js
├── package.json
└── README.md
```
License: 
MIT
