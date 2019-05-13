/*!
 * banner:
 * asyncloops: 1.0.0
 * Aleksandrov Sergey <gooddev.sergey@gmail.com> (https://github.com/AlexSergey/asyncloops)
 * Async loop and inverse async loop
 * ISC
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.asyncloops=t():e.asyncloops=t()}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"asyncLoop",function(){return o}),n.d(t,"inverseAsyncLoop",function(){return i});var r=n(1);const o=(e,t,n)=>{if(!Object(r.isArray)(e))return!1;let o=e.length;if(0===o)return!1;let i=0,u=!1,f={next:function(){if(!u)if(i<o){i++;let n=e[f.iteration()];t(n,f)}else u=!0,Object(r.isFunction)(n)&&n()},iteration:function(){return i-1},break:function(){u=!0,Object(r.isFunction)(n)&&n()}};return f.next(),f},i=(e,t,n)=>{if(!Object(r.isArray)(e))return!1;let o=e.length;if(0===o)return!1;let i=o+1,u=!1,f={next:function(){if(!u)if(0===i)u=!0,Object(r.isFunction)(n)&&n();else{i--;let n=e[f.iteration()];t(n,f)}},iteration:function(){return i-1},break:function(){u=!0,Object(r.isFunction)(n)&&n()}};return f.next(),f}},function(e,t,n){
/*!
 * banner:
 * valid-types: 1.0.2
 * A small JS type checker
 * ISC
 */
e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t){const n=e=>{let t=typeof e;return"object"==typeof e?null===e?t="null":"undefined"!=typeof window&&e instanceof HTMLElement||"[object HTMLDocument]"===e.toString()?t="[object HTMLDocument]"===e.toString()?"document":"dom":Array.isArray(e)?t="array":e instanceof Date?t="date":"number"==typeof e.length&&"object"==typeof e&&!1===Array.isArray(e)&&(t="arguments"):"number"==typeof e?(t="number",isNaN(e)&&"number"==typeof e&&(t="NaN")):"function"==typeof e&&(t="function",e.toString)&&0===e.toString().indexOf("class")&&(t="class"),t},r=e=>"array"===n(e),o=e=>"string"===n(e),i=e=>"object"===n(e);e.exports={isType:n,isArray:r,isNan:e=>isNaN(e),isString:o,isNumber:e=>"number"===n(e)&&!1===isNaN(e),isBoolean:e=>"boolean"===n(e),isUndefined:e=>"undefined"===n(e),isDefined:e=>void 0!==e,isEmpty:e=>""===e||0===e||"0"===e||null===e||!1===e||!e,isClass:e=>"class"===n(e),isFunction:e=>"function"===n(e),isObject:i,isNull:e=>"null"===n(e),isDOM:e=>"dom"===n(e),isArguments:e=>"arguments"===n(e),isDate:e=>"date"===n(e),isAsync:e=>e instanceof Promise,isUrl:e=>"string"===n(e)&&function(e){return/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e)}(e),isBase64:e=>o(e)&&e.indexOf("base64")>=0&&0===e.indexOf("data:"),isEmptyObject:e=>!!i(e)&&0===Object.keys(e).length,isEmptyArray:e=>!!r(e)&&0===e.length}}])}])});