function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,y=function(){return l.Date.now()};function v(t,e,n){var i,r,o,u,f,a,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=i,o=r;return i=r=void 0,c=e,u=t.apply(o,n)}function j(t){return c=t,f=setTimeout(T,e),l?b(t):u}function w(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=o}function T(){var t=y();if(w(t))return h(t);f=setTimeout(T,function(t){var n=e-(t-a);return s?p(n,o-(t-c)):n}(t))}function h(t){return f=void 0,v&&i?b(t):(i=r=void 0,u)}function O(){var t=y(),n=w(t);if(i=arguments,r=this,a=t,n){if(void 0===f)return j(a);if(s)return f=setTimeout(T,e),b(a)}return void 0===f&&(f=setTimeout(T,e)),u}return e=g(e)||0,m(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(g(n.maxWait)||0,e):o,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},O.flush=function(){return void 0===f?u:h(y())},O}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var n=o.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(t,e,{leading:i,maxWait:e,trailing:r})};const b=document.querySelector("iframe"),j=new Vimeo.Player(b);j.on("timeupdate",t(e)((function(t){localStorage.setItem("videoplayer-current-time",JSON.stringify(t.seconds))}),1e3));const w=JSON.parse(localStorage.getItem("videoplayer-current-time"))||0;j.setCurrentTime(w);
//# sourceMappingURL=02-video.0f939aff.js.map