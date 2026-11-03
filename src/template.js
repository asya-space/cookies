export const template = (privacyUrl) => `
    <div class="cookie">
        <div class="container">
            <p class="cookies-txt">We use cookies to understand how you use our website</p>
            <p class="cookies-txt">Please, read our <a class="privacy" href=${privacyUrl} target="_blank" rel="noreferrer noopener">Privacy Policy</a></p>
            <div class="buttons">
                <button class="tap" id="accept">Accept All</button>
                <button class="tap" id="reject">Reject All</button>
            </div>
        </div>
    </div>
    <div class="change-mind">
        <button class="change-btn" id="change">Change Mind</button>
    </div>
`;