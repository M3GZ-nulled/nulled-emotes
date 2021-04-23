// ==UserScript==
// @name         Nulled Emotifier
// @namespace    https://www.nulled.to/user/4103370-m3gz/
// @version      0.5
// @description  Custom emotes for nulled.to Kappa
// @author       M3GZ
// @match        https://www.nulled.to/*
// @updateURL	 https://github.com/M3GZ-nulled/nulled-emotes/raw/main/nulled-emotifier.user.js
// @downloadURL  https://github.com/M3GZ-nulled/nulled-emotes/raw/main/nulled-emotifier.user.js
// @grant        none
// ==/UserScript==

if("/"==window.location.pathname){const a=document.querySelector("#shoutbox-announcement-text > p");a.innerHTML=a.innerHTML.replace("Do not trust anyone!","<a href=\"https://m3gz-nulled.github.io/\" target=\"_blank\" title=\"List of Custom Emotes\">For a list of custom emotes Click Here</a><br>Do not trust anyone!")}(function a(){'use strict';var b=document.querySelectorAll(".entry-content");0==b.length&&(b=document.querySelectorAll(".cell-message"));for(let a=0,e=b.length;a<e;a++)try{var c=b[a].innerHTML.match(/:([a-z]{1,12}?):/g);for(let e=0,f=c.length;e<f;e++){var d="https://raw.githubusercontent.com/M3GZ-nulled/nulled-emotes/main/resources/".concat(b[a].innerHTML.match(c[e])[0].slice(1,-1),".gif");b[a].innerHTML=b[a].innerHTML.replace(c[e],"<img src='".concat(d,"' class='message-emoji'>"))}}catch(a){continue}setTimeout(a,1e3)})();
