// ==UserScript==
// @name         取消不可选择
// @namespace    https://ghproxy.net/https://raw.githubusercontent.com/Capslocka/myfiles/master/unlockcopy.js
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_notification
// @grant        window.onurlchange
// ==/UserScript==

(function() {
    'use strict';
         GM_addStyle(' * {user-select: text !important}')
    // Your code here...
})();