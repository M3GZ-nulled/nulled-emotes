// ==UserScript==
// @name         Nulled Emotifier
// @namespace    https://www.nulled.to/user/4103370-m3gz/
// @version      1.0
// @description  Custom emotes for nulled.to Kappa
// @author       M3GZ
// @match        https://www.nulled.to/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js
// @updateURL	 https://github.com/M3GZ-nulled/nulled-emotes/raw/main/nulled-emotifier.user.js
// @downloadURL  https://github.com/M3GZ-nulled/nulled-emotes/raw/main/nulled-emotifier.user.js
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

if("/"==window.location.pathname){const a=document.querySelector("#shoutbox-announcement-text > p");a.innerHTML=a.innerHTML.replace("Do not trust anyone!","<a href=\"https://m3gz-nulled.github.io/\" target=\"_blank\" title=\"List of Custom Emotes\">For a list of custom emotes Click Here</a><br>Do not trust anyone!")}if("success"==GM_getValue("isauth"))(function a(){'use strict';var b=document.querySelectorAll(".entry-content");"/"==window.location.pathname?b=document.querySelectorAll(".cell-message"):"/reputation.php"==window.location.pathname&&(b=document.querySelectorAll(".reputation_trow"));for(let a=0,e=b.length;a<e;a++)try{var c=b[a].innerHTML.match(/:([a-z]{1,16}?):/g);for(let e=0,f=c.length;e<f;e++){var d="https://raw.githubusercontent.com/M3GZ-nulled/nulled-emotes/main/resources/".concat(b[a].innerHTML.match(c[e])[0].slice(1,-1),".gif");b[a].innerHTML=b[a].innerHTML.replace(c[e],"<img src='".concat(d,"' class='message-emoji'>"))}}catch(a){continue}setTimeout(a,250)})();else if("/auth.php"!=window.location.pathname&&"/misc.php"!=window.location.pathname){var auth=prompt("Enter auth");const a=new XMLHttpRequest;a.responseType="json",a.open("GET","https://www.nulled.to/misc.php?action=validateKey&authKey=".concat(CryptoJS.MD5(auth))),a.send(),a.responseType="json",a.onreadystatechange=()=>{GM_setValue("isauth",a.response.status)},window.location.reload()}
