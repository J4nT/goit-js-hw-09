function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var l=o("1GAPJ");const u=document.querySelector(".form"),a=document.querySelector("[name='delay']"),i=document.querySelector("[name='step']"),d=document.querySelectorAll("[type='number']"),c=document.querySelector("[name='amount']");u.addEventListener("submit",(t=>{t.preventDefault();let n=0;setTimeout((()=>{const t=setInterval((()=>{if(n>=c.value)return clearInterval(t),void d.forEach((e=>{e.value=""}));(function(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{n?r(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}))})(n+1,parseInt(a.value)+parseInt(i.value)*n).then((t=>e(l).Notify.success(t))).catch((t=>e(l).Notify.failure(t))),n++}),i.value)}),a.value)}));
//# sourceMappingURL=03-promises.33d2a599.js.map
