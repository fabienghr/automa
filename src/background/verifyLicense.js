import { getLocalStore } from './utils';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'verifyLicense') {
        getLocalStore(['userId', 'usageTime']).then((result) => {
            const userId = result.userId;
            const usageTime = result.usageTime;

            fetch('https://your-server.com/verify-license', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, usageTime })
            })
                .then(response => response.json())
                .then(data => sendResponse({ licenseValid: data.licenseValid }))
                .catch(console.error);
        });

        return true;
    }
});
