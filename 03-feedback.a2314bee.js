function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var o,r,i,u,a,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function S(e){return c=e,a=setTimeout(O,t),l?b(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function O(){var e=p();if(j(e))return h(e);a=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,i-(e-c)):n}(e))}function h(e){return a=void 0,v&&o?b(e):(o=r=void 0,u)}function w(){var e=p(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===a)return S(f);if(s)return a=setTimeout(O,t),b(f)}return void 0===a&&(a=setTimeout(O,t)),u}return t=y(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},w.flush=function(){return void 0===a?u:h(p())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),S=document.querySelector("input"),j=document.querySelector("textarea");document.querySelector("button");b.addEventListener("input",e(t)((()=>{localStorage.setItem("feedback-form-state",JSON.stringify({email:S.value,message:j.value}))}),500));const O=JSON.parse(localStorage.getItem("feedback-form-state")),h=null!==O?O.email:" ";S.value=h;const w=null!==O?O.message:" ";j.value=w,b.addEventListener("submit",(function(e){const t=JSON.parse(localStorage.getItem("feedback-form-state"));e.preventDefault(),console.log(t),localStorage.clear(),b.reset()}));
//# sourceMappingURL=03-feedback.a2314bee.js.map
