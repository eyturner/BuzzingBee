!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let r=document.getElementById("userInput"),o=document.getElementById("previousWords"),l=(document.getElementById("scoreRank"),["D","H","I","K","O","W","N"]);const u=()=>{document.querySelectorAll(".middle").forEach((e,t)=>{e.innerHTML=l[e.id]})},c=()=>r;let a=l,i=a[6],d=[],s=[],f=0,g=0;const p=(e,t)=>{for(let n of t)if(e==n)return!0;return!1},h=e=>{for(var t=0;t<e.length;t++)if(!a.includes(e[t]))return!1;return!0},m=e=>e.length<4?(console.log("Too short"),!1):e.includes(i)?p(e,d)?(console.log("Already found!"),!1):h(e)?!!(e=>{for(let t of s)if(t=t.toUpperCase(),t==e)return!0;return!1})(e)||(console.log("Not a real word!"),!1):(console.log("Used a wrong letter"),!1):(console.log("No",i),!1),b=e=>4==e.length?1:e.length<7?e.length:e.length+7,v=e=>!!m(e)&&(d.push(e),f+=b(e),(()=>{let e=r.value.toUpperCase(),t=document.createElement("div");t.innerHTML=e,o.appendChild(t)})(),document.getElementById("score").innerHTML=f+"/"+g,(()=>{let e=document.getElementById("rank");e.innerHTML=0==f?"Beginner":f<g/40?"Good Start!":f<g/20?"Moving Up!":f<g/10?"Good!":f<g/5?"Solid!":f<g/3?"Great!":f<g/2?"Amazing!":f<g?"Genius!":"Queen Bee!!"})(),!0);(async e=>{console.log("ATTEMPTING DICTIONARY");let t=await(async()=>{const e=await fetch("https://gist.githubusercontent.com/h3xx/1976236/raw/bbabb412261386673eff521dddbe1dc815373b1d/wiki-100k.txt");return(await e.text()).split("\n")})();console.log("COMPLETE");let n=[];for(var r=0;r<t.length;++r){var o=t[r];(o=o.toUpperCase()).length>3&&o.includes(i)&&h(o)&&(p(o,n)||(n.push(o),g+=b(o)))}s=n})();(()=>{u();let e=c();document.querySelectorAll(".btn").forEach(e=>{e.addEventListener("click",t=>{let n=c(),o=n.value.toUpperCase();switch(e.id){case"del":(()=>{let e=r.value;e=e.substring(0,e.length-1),r.value=e})();break;case"shuf":(()=>{let e=l[6],t=l.slice(0,l.length-1);t.sort(()=>Math.random()-.5),t.push(e),l=t,u()})();break;case"ent":v(o)&&(n.value="");break;default:console.log("ERROR")}})}),document.querySelectorAll(".middle").forEach(e=>{e.addEventListener("click",t=>{console.log("clicked a letter!"),c().value+=e.innerHTML})}),e.addEventListener("keypress",(function(e){if(13==e.which){let e=c(),t=e.value.toUpperCase();v(t)&&(e.value="")}}))})()}]);