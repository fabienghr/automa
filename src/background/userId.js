import { v4 as uuidv4 } from 'uuid';
import { setLocalStore } from './utils';

chrome.runtime.onInstalled.addListener(() => {
    setLocalStore({ userId: uuidv4() });
});
