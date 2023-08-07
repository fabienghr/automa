import { getLocalStore, setLocalStore } from './utils';

let usageTime = 0;

getLocalStore('usageTime').then((result) => {
    usageTime = result.usageTime || 0;
});

setInterval(() => {
    chrome.idle.queryState(60, (state) => {
        if (state === 'active') {
            usageTime++;
            setLocalStore({ usageTime });
        }
    });
}, 60 * 1000);
