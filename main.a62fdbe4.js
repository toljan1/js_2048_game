parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return l(e)||t(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,n){if(e){if("string"==typeof e)return i(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,n):void 0}}function t(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return i(e)}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var c,o=document.querySelector(".game-score"),d=document.querySelector(".start"),a=document.querySelector(".restart"),f=document.querySelectorAll(".field-row"),u=document.querySelectorAll(".field-cell"),s=document.querySelector(".message-start"),h=document.querySelector(".message-win"),m=document.querySelector(".message-lose"),T=document.querySelector("tbody"),x=f[0].children,y="ArrowLeft",v="ArrowUp",g="ArrowRight",L="ArrowDown",A=!1;function S(){e(u).map(function(e){return e.innerText}).some(function(e){return"2048"===e})&&h.classList.remove("hidden")}function q(n){if(!e(u).map(function(e){return e.innerText}).some(function(e){return"2048"===e||""===e})){for(var r=0;r<4;r++)for(var t=0;t<3;t++)if(n.children[r].children[t].innerText===n.children[r].children[t+1].innerText)return;for(var l=0;l<3;l++)for(var i=0;i<4;i++)if(n.children[l].children[i].innerText===n.children[l+1].children[i].innerText)return;m.classList.remove("hidden")}}function b(e){return Math.floor(Math.random()*e)}function p(e,n){return 4!==Math.floor(Math.random()*(n-e+1)+e)?2:4}function w(){(c={column:0,cell:0}).column=b(f.length),c.cell=b(x.length),""!==f[c.column].children[c.cell].innerText&&w()}function E(){w();var e=f[c.column].children[c.cell];e.innerText=2,e.classList.add("field-cell--2"),u=document.querySelectorAll(".field-cell")}function k(e){o.innerText=+o.innerText+e}function M(){w();var e=f[c.column].children[c.cell];e.innerText=p(1,10),e.classList.add("field-cell--".concat(e.innerText))}function j(e,n){e.insertAdjacentHTML("".concat(n),'\n    <td class="field-cell"></td>\n  ')}function I(n){e(f).forEach(function(e){n.forEach(function(e){""===e.innerText&&(e.remove(),f=document.querySelectorAll(".field-row"))})}),u=document.querySelectorAll(".field-cell")}function O(n,r){I(n),e(u).some(function(e){return""===e.innerText})&&I(n),e(f).forEach(function(e){if(e.children.length<4)for(;e.children.length<4;)j(e,r)}),u=document.querySelectorAll(".field-cell")}function C(e,n){e.forEach(function(r){for(var t=0;t<r.children.length-1;t++){var l=r.children[t],i=r.children[t+1];if(l.innerText===i.innerText&&l.innerText>=2){if("left"===n){l.classList.remove("field-cell--".concat(l.innerText)),l.innerText=2*l.innerText,l.classList.add("field-cell--".concat(l.innerText)),i.innerText="",i.classList="field-cell",k(+l.innerText);break}if("right"===n){i.classList.remove("field-cell--".concat(i.innerText)),i.innerText=2*i.innerText,i.classList.add("field-cell--".concat(i.innerText)),l.innerText="",l.classList="field-cell",k(+i.innerText);break}}}O(e)})}function U(e,n){for(var r=1;r<e.length;r++){if(null!==e[r-1])for(var t=e[r-1].children,l=e[r].children,i=0;i<t.length;i++)t[i].innerText===l[i].innerText&&""!==t[i].innerText&&(t[i].innerText=2*t[i].innerText,t[i].classList.add("field-cell--".concat(t[i].innerText)),l[i].innerText="",l[i].classList="field-cell",k(+t[i].innerText));u=document.querySelectorAll(".field-cell")}}function D(e){for(var n=e.length-1;n>0;n--)for(var r=0;r<e[n].children.length;r++){var t=e[n-1].children[r],l=e[n].children[r];""===t.innerText&&(t.innerText=l.innerText,t.classList.add("field-cell--".concat(t.innerText)),l.innerText="",l.classList="field-cell")}}d.addEventListener("click",function(){E(),E(),A=!0,d.classList.add("hidden"),a.classList.remove("hidden"),s.classList.add("hidden")}),document.body.addEventListener("keydown",function(n){n.key===y&&A&&(O(e(u),"beforeend"),C(e(f),"left"),M(),u=document.querySelectorAll(".field-cell")),n.key===g&&A&&(O(e(u).reverse(),"afterbegin"),C(e(f).reverse(),"right"),M(),u=document.querySelectorAll(".field-cell")),n.key===v&&A&&(D(e(f)),U(e(f),"top"),M(),u=document.querySelectorAll(".field-cell")),n.key===L&&A&&(D(e(f).reverse()),U(e(f).reverse(),"down"),M(),u=document.querySelectorAll(".field-cell")),q(T),S()}),a.addEventListener("click",function(){if(o.innerText="0",T.children.length>4)for(;T.children.length>4;)T.lastElementChild.remove();m.classList.add("hidden"),e(u).forEach(function(e){e.innerText="",e.classList="field-cell"}),E(),E()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a62fdbe4.js.map