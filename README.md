# Cookies Popup
A lightweight cookie consent popup for modern JavaScript applications.<br>

Demo: <br>
<img width="100%" height="897" alt="image" src="https://github.com/user-attachments/assets/6bf1853a-2bbf-4d92-a670-9820d9770a9f" />



## Features
- Simple setup
- Stores consent using localStorage
- Vanilla JavaScript
- No runtime dependencies
- Compatible with Vite projects

## Installation
Install from GitHub:

`npm install git+https://github.com/asya-space/cookies.git`<br>

Install with cmd:<br>
`npm install cookies-popup`<br>

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
    initCookiesAgreement({privacyUrl: '/privacy-policy'});
});
```
or just like this:
```
import { resetPrevCookies, initCookiesAgreement } from 'cookies-popup';

resetPrevCookies(); // <=
initCookiesAgreement({privacyUrl: '/privacy-policy'});
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
    privacyUrl: '/privacy-policy', // your custom link to Privacy Security rules
    color1: '#111111', // text color
    color2: '#ff9800', // link color (Privacy and Policy)
    color3: '#ffffff', // background
    color4: '#fafa28' // buttons
    hover: '#ff5722'
    active: 'your custom color'
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
