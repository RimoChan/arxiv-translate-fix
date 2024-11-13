// ==UserScript==
// @name         arxiv-translate-fix
// @namespace    http://tampermonkey.net/
// @version      2024-11-13
// @description  arxiv-translate-fix
// @author       rimochan
// @match        https://arxiv.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=arxiv.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    for (const i of document.querySelectorAll('math, table, cite')) {
        i.setAttribute('translate', 'no')
    }
})();
