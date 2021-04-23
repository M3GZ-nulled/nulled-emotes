// ==UserScript==
// @name         Nulled Emotifier
// @namespace    https://www.nulled.to/user/4103370-m3gz/
// @version      0.4
// @description  Custom emotes for nulled.to Kappa
// @author       M3GZ
// @match        https://www.nulled.to/*
// @require      https://cdn.jsdelivr.net/npm/vue
// @updateURL	 https://github.com/M3GZ-nulled/nulled-emotes/raw/main/nulled-emotifier.user.js
// @downloadURL  https://github.com/M3GZ-nulled/nulled-emotes/raw/main/nulled-emotifier.user.js
// @grant        none
// ==/UserScript==

if (window.location.pathname=='/'){
    const toappend = document.querySelector('#shoutbox-announcement-text > p');
    /*const emoteList = document.createElement('a')
    emoteList.appendChild(document.createTextNode("List of Custom Emotes"));
    emoteList.title = "Custom Emotes List";
    emoteList.href = 'https://www.google.com';
    //emoteList.addClassName('maintitle');
    toappend.appendChild(emoteList);*/
    toappend.innerHTML = toappend.innerHTML.replace('Do not trust anyone!','');
    toappend.innerHTML += '<a href="https://m3gz-nulled.github.io/" target="_blank" title="List of Custom Emotes">For a list of custom emotes Click Here</a><br>Do not trust anyone!';
}

(function Do() {
    'use strict';
    var find = /:([a-z]{1,12}?):/g;
    var all = document.querySelectorAll(".entry-content");
    if (all.length==0){
        all = document.querySelectorAll(".cell-message");
    }
    for(let i = 0, max = all.length; i < max; i++)
    {
        try{
            var res = all[i].innerHTML.match(find);
            for (let j = 0, max = res.length; j < max; j++){
                var imgurl = 'https://raw.githubusercontent.com/M3GZ-nulled/nulled-emotes/main/resources/'.concat(all[i].innerHTML.match(res[j])[0].slice(1,-1),'.gif');
                all[i].innerHTML = all[i].innerHTML.replace(res[j], "<img src='".concat(imgurl,"' class='message-emoji'>"));
            }
        }
        catch(err){continue
                  }
    }
    setTimeout(Do, 1000);
})();
