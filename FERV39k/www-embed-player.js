(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function p(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
p("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
p("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(ba(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}}
function ja(a){if(!(a instanceof Array)){a=q(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function r(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.aa=b.prototype}
function ra(){this.D=!1;this.l=null;this.i=void 0;this.h=1;this.o=this.m=0;this.A=this.j=null}
function sa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
ra.prototype.u=function(a){this.i=a};
function ta(a,b){a.j={vb:b,zb:!0};a.h=a.m||a.o}
ra.prototype.return=function(a){this.j={return:a};this.h=this.o};
function v(a,b,c){a.h=c;return{value:b}}
ra.prototype.s=function(a){this.h=a};
function ua(a,b,c){a.m=b;void 0!=c&&(a.o=c)}
function va(a,b){a.h=b;a.m=0}
function wa(a){a.m=0;var b=a.j.vb;a.j=null;return b}
function xa(a){a.A=[a.j];a.m=0;a.o=0}
function ya(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.zb?a.h=a.m||a.o:void 0!=b.s&&a.o<b.s?(a.h=b.s,a.j=null):a.h=a.o:a.h=0}
function za(a){this.h=new ra;this.i=a}
function Aa(a,b){sa(a.h);var c=a.h.l;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.l=null,ta(a.h,g),Ca(a)}a.h.l=null;d.call(a.h,f);return Ca(a)}
function Ca(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ta(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.zb)throw b.vb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){sa(a.h);a.h.l?b=Ba(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=Ca(a));return b};
this.throw=function(b){sa(a.h);a.h.l?b=Ba(a,a.h.l["throw"],b,a.h.u):(ta(a.h,b),b=Ca(a));return b};
this.return=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ea(new Da(new za(a)))}
function Fa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
p("Reflect",function(a){return a?a:{}});
p("Reflect.construct",function(){return la});
p("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
p("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.D=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.o()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.o=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.S),reject:g(this.o)}};
b.prototype.S=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ga(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.M(g):this.m(g)}};
b.prototype.M=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.qa(h,g):this.m(g)};
b.prototype.o=function(g){this.u(2,g)};
b.prototype.m=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Z();this.A()};
b.prototype.Z=function(){var g=this;e(function(){if(g.L()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.L=function(){if(this.D)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ga=function(g){var h=this.l();g.Ka(h.resolve,h.reject)};
b.prototype.qa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(z,u){return"function"==typeof z?function(D){try{l(z(D))}catch(E){n(E)}}:u}
var l,n,t=new b(function(z,u){l=z;n=u});
this.Ka(k(g,l),k(h,n));return t};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ka=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.D=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=q(g),n=l.next();!n.done;n=l.next())d(n.value).Ka(h,k)})};
b.all=function(g){var h=q(g),k=h.next();return k.done?d([]):new b(function(l,n){function t(D){return function(E){z[D]=E;u--;0==u&&l(z)}}
var z=[],u=0;do z.push(void 0),u++,d(k.value).Ka(t(z.length-1),n),k=h.next();while(!k.done)})};
return b});
function Ga(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
p("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=q(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ga(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(t){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ga(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Ga(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ga(k,g)&&Ga(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Ga(k,g)&&Ga(k[g],this.h)?delete k[g][this.h]:!1};
return b});
p("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ia(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Ga(h.data_,l))for(h=0;h<n.length;h++){var t=n[h];if(k!==k&&t.key!==t.key||k===t.key)return{id:l,list:n,index:h,entry:t}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=q(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(q([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(t){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
p("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
p("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
p("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
p("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
p("Object.setPrototypeOf",function(a){return a||qa});
var Ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ga(d,e)&&(a[e]=d[e])}return a};
p("Object.assign",function(a){return a||Ja});
p("Set",function(a){function b(c){this.h=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
p("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ga(b,d)&&c.push([d,b[d]]);return c}});
p("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
p("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
p("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
p("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
p("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
p("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
p("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
p("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
p("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ga(b,d)&&c.push(b[d]);return c}});
var x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function A(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(){}
function La(a){a.ma=void 0;a.getInstance=function(){return a.ma?a.ma:a.ma=new a}}
function Ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ua=Sa:Ua=Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(a,b){y(a,b,void 0)}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.oo=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Ob=b)}
Xa($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function hb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function ib(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qb(){var a=B("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;function xb(){if(void 0===wb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){x.console&&x.console.error(c.message)}wb=a}else wb=a}return wb}
;function yb(a,b){this.j=a===zb&&b||""}
yb.prototype.i=!0;yb.prototype.h=function(){return this.j};
function Ab(a){return new yb(zb,a)}
var zb={};Ab("");var Bb={};function Cb(a){this.j=Bb===Bb?a:"";this.i=!0}
Cb.prototype.h=function(){return this.j.toString()};
Cb.prototype.toString=function(){return this.j.toString()};function Db(a,b){this.j=b===Eb?a:""}
Db.prototype.i=!0;Db.prototype.h=function(){return this.j.toString()};
Db.prototype.toString=function(){return this.j+""};
function Fb(a){if(a instanceof Db&&a.constructor===Db)return a.j;Ma(a);return"type_error:TrustedResourceUrl"}
var Eb={};function Gb(a){var b=xb();a=b?b.createScriptURL(a):a;return new Db(a,Eb)}
;var Hb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Ib(a,b){this.j=b===Jb?a:""}
Ib.prototype.i=!0;Ib.prototype.h=function(){return this.j.toString()};
Ib.prototype.toString=function(){return this.j.toString()};
function Kb(a){if(a instanceof Ib&&a.constructor===Ib)return a.j;Ma(a);return"type_error:SafeUrl"}
var Lb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Jb={};function Mb(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Mb().indexOf(a)}
;function Nb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
;var Ob={};function Pb(a){this.j=Ob===Ob?a:"";this.i=!0}
Pb.prototype.h=function(){return this.j.toString()};
Pb.prototype.toString=function(){return this.j.toString()};function Qb(a,b){b instanceof Ib||b instanceof Ib||(b="object"==typeof b&&b.i?b.h():String(b),Lb.test(b)||(b="about:invalid#zClosurez"),b=new Ib(b,Jb));a.href=Kb(b)}
function Rb(a,b){a.rel="stylesheet";a.href=Fb(b).toString();(b=Sb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Tb(){return Sb("script[nonce]",void 0)}
var Ub=/^[\w+/_-]+[=]{0,2}$/;function Sb(a,b){b=(b||x).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Ub.test(a)?a:"":""}
;function Vb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Wb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xb(a){return a?decodeURI(a):a}
function Yb(a){return Xb(a.match(Wb)[3]||null)}
function Zb(a){var b=a.match(Wb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function $b(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)$b(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ac(a){var b=[],c;for(c in a)$b(c,a[c],b);return b.join("&")}
function bc(a,b){b=ac(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var cc=/#|$/;function dc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
;function ec(a){ec[" "](a);return a}
ec[" "]=Ka;var fc=C("Opera"),gc=C("Trident")||C("MSIE"),hc=C("Edge"),ic=C("Gecko")&&!(-1!=Mb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),jc=-1!=Mb().toLowerCase().indexOf("webkit")&&!C("Edge"),kc=C("Android");function lc(){var a=x.document;return a?a.documentMode:void 0}
var mc;a:{var nc="",oc=function(){var a=Mb();if(ic)return/rv:([^\);]+)(\)|;)/.exec(a);if(hc)return/Edge\/([\d\.]+)/.exec(a);if(gc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jc)return/WebKit\/(\S+)/.exec(a);if(fc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
oc&&(nc=oc?oc[1]:"");if(gc){var pc=lc();if(null!=pc&&pc>parseFloat(nc)){mc=String(pc);break a}}mc=nc}var qc=mc,rc;if(x.document&&gc){var sc=lc();rc=sc?sc:parseInt(qc,10)||void 0}else rc=void 0;var tc=rc;var uc=dc()||C("iPod"),vc=C("iPad");!C("Android")||Nb();Nb();var wc=C("Safari")&&!(Nb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||C("Firefox")||C("FxiOS")||C("Silk")||C("Android"))&&!(dc()||C("iPad")||C("iPod"));var xc={},yc=null;
function zc(a,b){Na(a);void 0===b&&(b=0);if(!yc){yc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));xc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===yc[h]&&(yc[h]=g)}}}b=xc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Ac="function"===typeof Uint8Array;var Bc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Cc(a,b){Object.isFrozen(a)||(Bc?a[Bc]|=b:void 0!==a.h?a.h|=b:Object.defineProperties(a,{h:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Dc(a){var b;Bc?b=a[Bc]:b=a.h;return null==b?0:b}
function Ec(a){Cc(a,1);return a}
function Fc(a){return Array.isArray(a)?!!(Dc(a)&2):!1}
function Gc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Cc(a,2)}
;function Hc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Ic,Jc=Object.freeze(Ec([]));function Kc(a){if(Fc(a.G))throw Error("Cannot mutate an immutable Message");}
var Lc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Mc(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.G[b+a.j]}
function F(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Kc(a);b<a.l&&!d?a.G[b+a.j]=c:(a.i||(a.i=a.G[a.l+a.j]={}))[b]=c;return a}
function Nc(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=Mc(a,b,d);null==e&&(e=Jc);if(Fc(a.G))c&&(Gc(e),Object.freeze(e));else if(e===Jc||Fc(e))e=Ec(e.slice()),F(a,b,e,d);return e}
function Oc(a,b,c,d){Kc(a);(c=Pc(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),F(a,c,void 0));return F(a,b,d)}
function Pc(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Mc(a,e)&&(0!==c&&F(a,c,void 0,!1,!0),c=e)}return c}
function Qc(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=Mc(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);Fc(a.G)&&Gc(b.G);return a.h[c]=b}
function Rc(a,b,c,d){d=void 0===d?!1:d;a.h||(a.h={});var e=Fc(a.G),f=a.h[c];if(!f){d=Nc(a,c,!0,d);f=[];e=e||Fc(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&Gc(f[g].G);e&&(Gc(f),Object.freeze(f));a.h[c]=f}return f}
function G(a,b,c,d){d=void 0===d?!1:d;Kc(a);a.h||(a.h={});var e=c?c.G:c;a.h[b]=c;return F(a,b,e,d)}
function Sc(a,b,c){var d=Tc;Kc(a);a.h||(a.h={});var e=c?c.G:c;a.h[b]=c;Oc(a,b,d,e)}
function Uc(a,b,c,d){var e=void 0===e?!1:e;Kc(a);e=Rc(a,c,b,e);c=d?d:new c;a=Nc(a,b);e.push(c);a.push(c.G)}
;function Vc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Ac&&null!=a&&a instanceof Uint8Array)return zc(a)}return a}
;function Wc(a,b){b=void 0===b?Xc:b;return Yc(a,b)}
function Zc(a,b){if(null!=a){if(Array.isArray(a))a=Yc(a,b);else if(Hc(a)){var c={},d;for(d in a)c[d]=Zc(a[d],b);a=c}else a=b(a);return a}}
function Yc(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=Zc(c[d],b);Array.isArray(a)&&Dc(a)&1&&Ec(c);return c}
function $c(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Vc(a);return Array.isArray(a)?Wc(a,$c):a}
function Xc(a){return Ac&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;var ad;function bd(a,b,c){var d=ad;ad=null;a||(a=d);d=this.constructor.i;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.h||0);this.h=void 0;this.G=a;a:{d=this.G.length;a=d-1;if(d&&(d=this.G[a],Hc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.G[a])?Array.isArray(d)&&Ec(d):this.G[a]=Jc;else{d=this.i||(this.i=this.G[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
Ec(e):d[a]=Jc}}
bd.prototype.toJSON=function(){var a=this.G;return Ic?a:Wc(a,$c)};
bd.prototype.clone=function(){var a=this.constructor,b=Wc(this.G);ad=b;a=new a(b);ad=null;cd(a,this);return a};
bd.prototype.toString=function(){return this.G.toString()};
function dd(a,b){return Vc(b)}
function cd(a,b){b.o&&(a.o=b.o.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Rc(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)cd(f[g],e[g])}else(f=Qc(a,e.constructor,g,void 0,f))&&cd(f,e)}}}}
;function ed(){bd.apply(this,arguments)}
r(ed,bd);function fd(){var a={};Object.defineProperties(ed,(a[Symbol.hasInstance]={value:Object[Symbol.hasInstance],configurable:!1,writable:!1,enumerable:!1},a))}
Lc&&fd();function gd(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;Kc(a);if(b){var e=Ec([]);for(var f=0;f<b.length;f++)e[f]=b[f].G;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=Jc;a=F(a,c,e,d)}else a=G(a,c,b,!0);return a}
;function hd(a){x.setTimeout(function(){throw a;},0)}
;function H(){ed.apply(this,arguments)}
r(H,ed);function id(){var a={};Object.defineProperties(H,(a[Symbol.hasInstance]={value:Object[Symbol.hasInstance],configurable:!1,writable:!1,enumerable:!1},a))}
Lc&&id();function jd(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function kd(a){this.i=!1;var b=a.program;a=a.globalName;var c=new jd;this.j=c.promise;this.l=q((0,x[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Nb:d,vc:e})})},!0)).next().value;
this.uc=c.promise.then(function(){})}
kd.prototype.snapshot=function(a){if(this.i)throw Error("Already disposed");return this.j.then(function(b){var c=b.Nb;return new Promise(function(d){c(function(e){d(e)},[a.qb,
a.wc])})})};
kd.prototype.dispose=function(){this.i=!0;this.j.then(function(a){(a=a.vc)&&a()})};
kd.prototype.h=function(){return this.i};var ld=window;Ab("csi.gstatic.com");Ab("googleads.g.doubleclick.net");Ab("partner.googleadservices.com");Ab("pubads.g.doubleclick.net");Ab("securepubads.g.doubleclick.net");Ab("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var md={};function nd(){}
function od(a){this.h=a}
r(od,nd);od.prototype.toString=function(){return this.h};
var pd=new od("about:invalid#zTSz",md);function qd(a){if(a instanceof nd)if(a instanceof od)a=a.h;else throw Error("");else a=Kb(a);return a}
;function rd(a,b){a.src=Fb(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var d=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]");(c=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function sd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=sd.prototype;m.clone=function(){return new sd(this.x,this.y)};
m.equals=function(a){return a instanceof sd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function td(a,b){this.width=a;this.height=b}
m=td.prototype;m.clone=function(){return new td(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function ud(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function vd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function wd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function xd(a){var b=yd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function zd(){var a=[];xd(function(b){a.push(b)});
return a}
var yd={Lc:"allow-forms",Mc:"allow-modals",Nc:"allow-orientation-lock",Oc:"allow-pointer-lock",Pc:"allow-popups",Qc:"allow-popups-to-escape-sandbox",Rc:"allow-presentation",Sc:"allow-same-origin",Tc:"allow-scripts",Uc:"allow-top-navigation",Vc:"allow-top-navigation-by-user-activation"},Ad=bb(function(){return zd()});
function Bd(){var a=Cd(),b={};db(Ad(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Cd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Ed(a){this.isValid=a}
function Fd(a){return new Ed(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Gd=[Fd("data"),Fd("http"),Fd("https"),Fd("mailto"),Fd("ftp"),new Ed(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Hd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Id=(new Date).getTime();var Jd=new function(a,b){this.flag=a;this.defaultValue=void 0===b?!1:b}(1959,!0);function Kd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Ld(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(t){for(var z=g,u=0;64>u;u+=4)z[u/4]=t[u]<<24|t[u+1]<<16|t[u+2]<<8|t[u+3];for(u=16;80>u;u++)t=z[u-3]^z[u-8]^z[u-14]^z[u-16],z[u]=(t<<1|t>>>31)&4294967295;t=e[0];var D=e[1],E=e[2],L=e[3],P=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var S=L^D&(E^L);var W=1518500249}else S=D^E^L,W=1859775393;else 60>u?(S=D&E|L&(D|E),W=2400959708):(S=D^E^L,W=3395469782);S=((t<<5|t>>>27)&4294967295)+S+P+W+z[u]&4294967295;P=L;L=E;E=(D<<30|D>>>2)&4294967295;D=t;t=S}e[0]=e[0]+t&4294967295;e[1]=e[1]+D&4294967295;e[2]=
e[2]+E&4294967295;e[3]=e[3]+L&4294967295;e[4]=e[4]+P&4294967295}
function c(t,z){if("string"===typeof t){t=unescape(encodeURIComponent(t));for(var u=[],D=0,E=t.length;D<E;++D)u.push(t.charCodeAt(D));t=u}z||(z=t.length);u=0;if(0==l)for(;u+64<z;)b(t.slice(u,u+64)),u+=64,n+=64;for(;u<z;)if(f[l++]=t[u++],n++,64==l)for(l=0,b(f);u+64<z;)b(t.slice(u,u+64)),u+=64,n+=64}
function d(){var t=[],z=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var u=63;56<=u;u--)f[u]=z&255,z>>>=8;b(f);for(u=z=0;5>u;u++)for(var D=24;0<=D;D-=8)t[z++]=e[u]>>D&255;return t}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Rb:function(){for(var t=d(),z="",u=0;u<t.length;u++)z+="0123456789ABCDEF".charAt(Math.floor(t[u]/16))+"0123456789ABCDEF".charAt(t[u]%16);return z}}}
;function Md(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,Nd(Kd(d),a,c||null)].join(" "):null}
function Nd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),Od(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=Od(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Od(a){var b=Ld();b.update(a);return b.Rb().toLowerCase()}
;var Pd={};function Qd(a){this.h=a||{cookie:""}}
m=Qd.prototype;m.isEnabled=function(){if(!x.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ao;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Qa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Hb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Qa:0,path:b,domain:c});return d};
m.ab=function(){return Rd(this).keys};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=Rd(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Rd(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Hb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Sd=new Qd("undefined"==typeof document?null:document);function Td(a){return!!Pd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Ud(a){a=void 0===a?!1:a;var b=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;Td(a)&&(b=b||x.__1PSAPISID);if(b)return!0;var c=new Qd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");Td(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Vd(a,b,c,d){(a=x[a])||(a=(new Qd(document)).get(b));return a?Md(a,c,d):null}
function Wd(a){var b=void 0===b?!1:b;var c=Kd(String(x.location.href)),d=[];if(Ud(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?x.__SAPISID:x.__APISID;e||(e=new Qd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Md(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Td(b)&&((b=Vd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Vd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Xd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Yd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?Yd.apply(null,d):Xd(d)}}
;function I(){this.D=this.D;this.o=this.o}
I.prototype.D=!1;I.prototype.h=function(){return this.D};
I.prototype.dispose=function(){this.D||(this.D=!0,this.I())};
function Zd(a,b){a.D?b():(a.o||(a.o=[]),a.o.push(b))}
I.prototype.I=function(){if(this.o)for(;this.o.length;)this.o.shift()()};function $d(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
$d.prototype.stopPropagation=function(){this.j=!0};
$d.prototype.preventDefault=function(){this.defaultPrevented=!0};function ae(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=be(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ce[c])c=ce[c];else{c=String(c);if(!ce[c]){var f=/function\s+([^\(]+)/m.exec(c);ce[c]=f?f[1]:"[Anonymous]"}c=ce[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function be(a,b){b||(b={});b[de(a)]=!0;var c=a.stack||"";(a=a.Ob)&&!b[de(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=be(a,b));return c}
function de(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ce={};var ee=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{x.addEventListener("test",Ka,b),x.removeEventListener("test",Ka,b)}catch(c){}return a}();function fe(a,b){$d.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa(fe,$d);var ge={2:"touch",3:"pen",4:"mouse"};
fe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(ic){a:{try{ec(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ge[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&fe.aa.preventDefault.call(this)};
fe.prototype.stopPropagation=function(){fe.aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
fe.prototype.preventDefault=function(){fe.aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var he="closure_listenable_"+(1E6*Math.random()|0);var ie=0;function je(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Na=e;this.key=++ie;this.Aa=this.Ja=!1}
function ke(a){a.Aa=!0;a.listener=null;a.proxy=null;a.src=null;a.Na=null}
;function le(a){this.src=a;this.listeners={};this.h=0}
le.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=me(a,b,d,e);-1<g?(b=a[g],c||(b.Ja=!1)):(b=new je(b,this.src,f,!!d,e),b.Ja=c,a.push(b));return b};
le.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=me(e,b,c,d);return-1<b?(ke(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ne(a,b){var c=b.type;c in a.listeners&&ib(a.listeners[c],b)&&(ke(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function me(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Aa&&f.listener==b&&f.capture==!!c&&f.Na==d)return e}return-1}
;var oe="closure_lm_"+(1E6*Math.random()|0),pe={},qe=0;function re(a,b,c,d,e){if(d&&d.once)se(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)re(a,b[f],c,d,e);else c=te(c),a&&a[he]?a.W(b,c,Oa(d)?!!d.capture:!!d,e):ue(a,b,c,!1,d,e)}
function ue(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=ve(a);h||(a[oe]=h=new le(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=we();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ee||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(xe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");qe++}}
function we(){function a(c){return b.call(a.src,a.listener,c)}
var b=ye;return a}
function se(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)se(a,b[f],c,d,e);else c=te(c),a&&a[he]?a.i.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):ue(a,b,c,!0,d,e)}
function ze(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ze(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=te(c),a&&a[he])?a.i.remove(String(b),c,d,e):a&&(a=ve(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=me(b,c,d,e)),(c=-1<a?b[a]:null)&&Ae(c))}
function Ae(a){if("number"!==typeof a&&a&&!a.Aa){var b=a.src;if(b&&b[he])ne(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(xe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);qe--;(c=ve(b))?(ne(c,a),0==c.h&&(c.src=null,b[oe]=null)):ke(a)}}}
function xe(a){return a in pe?pe[a]:pe[a]="on"+a}
function ye(a,b){if(a.Aa)a=!0;else{b=new fe(b,this);var c=a.listener,d=a.Na||a.src;a.Ja&&Ae(a);a=c.call(d,b)}return a}
function ve(a){a=a[oe];return a instanceof le?a:null}
var Be="__closure_events_fn_"+(1E9*Math.random()>>>0);function te(a){if("function"===typeof a)return a;a[Be]||(a[Be]=function(b){return a.handleEvent(b)});
return a[Be]}
;function Ce(){I.call(this);this.i=new le(this);this.Z=this;this.L=null}
Xa(Ce,I);Ce.prototype[he]=!0;Ce.prototype.addEventListener=function(a,b,c,d){re(this,a,b,c,d)};
Ce.prototype.removeEventListener=function(a,b,c,d){ze(this,a,b,c,d)};
function De(a,b){var c=a.L;if(c){var d=[];for(var e=1;c;c=c.L)d.push(c),++e}a=a.Z;c=b.type||b;"string"===typeof b?b=new $d(b,a):b instanceof $d?b.target=b.target||a:(e=b,b=new $d(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Ee(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ee(g,c,!0,b)&&e,b.j||(e=Ee(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ee(g,c,!1,b)&&e}
Ce.prototype.I=function(){Ce.aa.I.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ke(d[e]);delete a.listeners[c];a.h--}}this.L=null};
Ce.prototype.W=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Ee(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Aa&&g.capture==c){var h=g.listener,k=g.Na||g.src;g.Ja&&ne(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Fe(a){var b,c;Ce.call(this);var d=this;this.A=this.l=0;this.V=null!==a&&void 0!==a?a:{N:function(e,f){return setTimeout(e,f)},
U:clearTimeout};this.j=null!==(c=null===(b=window.navigator)||void 0===b?void 0:b.onLine)&&void 0!==c?c:!0;this.m=function(){return w(function(e){return v(e,Ge(d),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||He(this)}
r(Fe,Ce);Fe.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.V.U(this.A);delete Fe.h};
Fe.prototype.H=function(){return this.j};
function He(a){a.A=a.V.N(function(){var b;return w(function(c){if(1==c.h)return a.j?(null===(b=window.navigator)||void 0===b?0:b.onLine)?c.s(3):v(c,Ge(a),3):v(c,Ge(a),3);He(a);c.h=0})},3E4)}
function Ge(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f;return w(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ua(g,2,3),d&&(a.l=a.V.N(function(){d.abort()},b||2E4)),v(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:xa(g);a.u=void 0;a.l&&(a.V.U(a.l),a.l=0);f!==a.j&&(a.j=f,a.j?De(a,"networkstatus-online"):De(a,"networkstatus-offline"));c(f);ya(g);break;case 2:wa(g),f=!1,g.s(3)}})})}
;var Ie={Vn:"WEB_DISPLAY_MODE_UNKNOWN",Rn:"WEB_DISPLAY_MODE_BROWSER",Tn:"WEB_DISPLAY_MODE_MINIMAL_UI",Un:"WEB_DISPLAY_MODE_STANDALONE",Sn:"WEB_DISPLAY_MODE_FULLSCREEN"};function Je(){this.data_=[];this.h=-1}
Je.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Je.prototype.get=function(a){return!!this.data_[a]};
function Ke(a){-1==a.h&&(a.h=gb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Le(){var a={};this.B=function(b,c){return null!=a[b]?a[b]:c}}
;function Me(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Me.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ne(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Oe;function Pe(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=vd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ob;c.ob=null;e()}};
return function(e){d.next={ob:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Qe(){this.i=this.h=null}
Qe.prototype.add=function(a,b){var c=Re.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Qe.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Re=new Me(function(){return new Se},function(a){return a.reset()});
function Se(){this.next=this.scope=this.h=null}
Se.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Se.prototype.reset=function(){this.next=this.scope=this.h=null};function Te(a,b){Ue||Ve();We||(Ue(),We=!0);Xe.add(a,b)}
var Ue;function Ve(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);Ue=function(){a.then(Ye)}}else Ue=function(){var b=Ye;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!C("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Oe||(Oe=Pe()),Oe(b)):x.setImmediate(b)}}
var We=!1,Xe=new Qe;function Ye(){for(var a;a=Xe.remove();){try{a.h.call(a.scope)}catch(b){hd(b)}Ne(Re,a)}We=!1}
;function Ze(a,b){this.h=a[x.Symbol.iterator]();this.i=b;this.j=0}
Ze.prototype[Symbol.iterator]=function(){return this};
Ze.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function $e(a,b){return new Ze(a,b)}
;function af(){this.blockSize=-1}
;function bf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.o=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Xa(bf,af);bf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function cf(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
bf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)cf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){cf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){cf(this,e);f=0;break}}this.i=f;this.l+=b}};
bf.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;cf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function df(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function ef(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ff(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:df(a).match(/\S+/g)||[],b=0<=cb(a,b));return b}
function gf(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ff(a,"inverted-hdpi")&&ef(a,Array.prototype.filter.call(a.classList?a.classList:df(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var hf="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function jf(){}
jf.prototype.da=function(){throw hf;};
jf.prototype.next=function(){return kf};
var kf={done:!0,value:void 0};function lf(a){return{value:a,done:!1}}
function mf(a){if(a.done)throw hf;return a.value}
jf.prototype.T=function(){return this};function nf(a){if(a instanceof of||a instanceof pf||a instanceof qf)return a;if("function"==typeof a.da)return new of(function(){return rf(a)});
if("function"==typeof a[Symbol.iterator])return new of(function(){return a[Symbol.iterator]()});
if("function"==typeof a.T)return new of(function(){return rf(a.T())});
throw Error("Not an iterator or iterable.");}
function rf(a){if(!(a instanceof jf))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.da();break}catch(d){if(d!==hf)throw d;b=!0}return{value:c,done:b}}}}
function of(a){this.h=a}
of.prototype.T=function(){return new pf(this.h())};
of.prototype[Symbol.iterator]=function(){return new qf(this.h())};
of.prototype.i=function(){return new qf(this.h())};
function pf(a){this.h=a}
r(pf,jf);pf.prototype.da=function(){var a=this.h.next();if(a.done)throw hf;return a.value};
pf.prototype.next=function(){return this.h.next()};
pf.prototype[Symbol.iterator]=function(){return new qf(this.h)};
pf.prototype.i=function(){return new qf(this.h)};
function qf(a){of.call(this,function(){return a});
this.j=a}
r(qf,of);qf.prototype.next=function(){return this.j.next()};function sf(a,b){this.i={};this.h=[];this.ja=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof sf)for(c=a.ab(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=sf.prototype;m.ab=function(){tf(this);return this.h.concat()};
m.has=function(a){return uf(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||vf;tf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function vf(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.ja=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return uf(this.i,a)?(delete this.i[a],--this.size,this.ja++,this.h.length>2*this.size&&tf(this),!0):!1};
function tf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];uf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],uf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return uf(this.i,a)?this.i[a]:b};
m.set=function(a,b){uf(this.i,a)||(this.size+=1,this.h.push(a),this.ja++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.ab(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new sf(this)};
m.keys=function(){return nf(this.T(!0)).i()};
m.values=function(){return nf(this.T(!1)).i()};
m.entries=function(){var a=this;return $e(this.keys(),function(b){return[b,a.get(b)]})};
m.T=function(a){tf(this);var b=0,c=this.ja,d=this,e=new jf;e.next=function(){if(c!=d.ja)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return kf;var g=d.h[b++];return lf(a?g:d.i[g])};
var f=e.next;e.da=function(){return mf(f.call(e))};
return e};
function uf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function wf(a){xf();return Gb(a)}
var xf=Ka;function yf(a){var b=[];zf(new Af,a,b);return b.join("")}
function Af(){}
function zf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),zf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Bf(d,c),c.push(":"),zf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Bf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Cf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Df=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Bf(a,b){b.push('"',a.replace(Df,function(c){var d=Cf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Cf[c]=d);return d}),'"')}
;function Ef(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Ff(a){this.h=0;this.D=void 0;this.l=this.i=this.j=null;this.o=this.m=!1;if(a!=Ka)try{var b=this;a.call(void 0,function(c){Gf(b,2,c)},function(c){Gf(b,3,c)})}catch(c){Gf(this,3,c)}}
function Hf(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Hf.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var If=new Me(function(){return new Hf},function(a){a.reset()});
function Jf(a,b,c){var d=If.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Kf(a){return new Ff(function(b,c){c(a)})}
Ff.prototype.then=function(a,b,c){return Lf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ff.prototype.$goog_Thenable=!0;function Mf(a,b){return Lf(a,null,b,void 0)}
Ff.prototype.cancel=function(a){if(0==this.h){var b=new Nf(a);Te(function(){Of(this,b)},this)}};
function Of(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Of(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Pf(c),Qf(c,e,3,b)))}a.j=null}else Gf(a,3,b)}
function Rf(a,b){a.i||2!=a.h&&3!=a.h||Sf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Lf(a,b,c,d){var e=Jf(null,null,null);e.h=new Ff(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Nf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Rf(a,e);return e.h}
Ff.prototype.A=function(a){this.h=0;Gf(this,2,a)};
Ff.prototype.L=function(a){this.h=0;Gf(this,3,a)};
function Gf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.A,f=a.L;if(d instanceof Ff){Rf(d,Jf(e||Ka,f||null,a));var g=!0}else if(Ef(d))d.then(e,f,a),g=!0;else{if(Oa(d))try{var h=d.then;if("function"===typeof h){Tf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.D=c,a.h=b,a.j=null,Sf(a),3!=b||c instanceof Nf||Uf(a,c))}}
function Tf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Sf(a){a.m||(a.m=!0,Te(a.u,a))}
function Pf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Ff.prototype.u=function(){for(var a;a=Pf(this);)Qf(this,a,this.h,this.D);this.m=!1};
function Qf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.o;a=a.j)a.o=!1;if(b.h)b.h.j=null,Vf(b,c,d);else try{b.j?b.i.call(b.context):Vf(b,c,d)}catch(e){Wf.call(null,e)}Ne(If,b)}
function Vf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Uf(a,b){a.o=!0;Te(function(){a.o&&Wf.call(null,b)})}
var Wf=hd;function Nf(a){$a.call(this,a)}
Xa(Nf,$a);Nf.prototype.name="cancel";function J(a){I.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
Xa(J,I);m=J.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function Xf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.wa(b)}}
m.wa=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ka):(c&&ib(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.ka=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Yf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.wa(c)}}return 0!=e}return!1};
function Yf(a,b,c){Te(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.wa,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.I=function(){J.aa.I.call(this);this.clear();this.l.length=0};function Zf(a){this.h=a}
Zf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,yf(b))};
Zf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Zf.prototype.remove=function(a){this.h.remove(a)};function $f(a){this.h=a}
Xa($f,Zf);function ag(a){this.data=a}
function bg(a){return void 0===a||a instanceof ag?a:new ag(a)}
$f.prototype.set=function(a,b){$f.aa.set.call(this,a,bg(b))};
$f.prototype.i=function(a){a=$f.aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
$f.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function cg(a){this.h=a}
Xa(cg,$f);cg.prototype.set=function(a,b,c){if(b=bg(b)){if(c){if(c<Date.now()){cg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}cg.aa.set.call(this,a,b)};
cg.prototype.i=function(a){var b=cg.aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())cg.prototype.remove.call(this,a);else return b}};function dg(){}
;function eg(){}
Xa(eg,dg);eg.prototype[Symbol.iterator]=function(){return nf(this.T(!0)).i()};
eg.prototype.clear=function(){var a=Array.from(this);a=q(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function fg(a){this.h=a}
Xa(fg,eg);m=fg.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.T=function(a){var b=0,c=this.h,d=new jf;d.next=function(){if(b>=c.length)return kf;var f=c.key(b++);if(a)return lf(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return lf(f)};
var e=d.next;d.da=function(){return mf(e.call(d))};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function gg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Xa(gg,fg);function hg(a,b){this.i=a;this.h=null;var c;if(c=gc)c=!(9<=Number(tc));if(c){ig||(ig=new sf);this.h=ig.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),ig.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Xa(hg,eg);var jg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ig=null;function kg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return jg[b]})}
m=hg.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(kg(a),b);lg(this)};
m.get=function(a){a=this.h.getAttribute(kg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(kg(a));lg(this)};
m.T=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new jf;d.next=function(){if(b>=c.length)return kf;var f=c[b++];if(a)return lf(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return lf(f)};
var e=d.next;d.da=function(){return mf(e.call(d))};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);lg(this)};
function lg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function mg(a,b){this.i=a;this.h=b+"::"}
Xa(mg,eg);mg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
mg.prototype.get=function(a){return this.i.get(this.h+a)};
mg.prototype.remove=function(a){this.i.remove(this.h+a)};
mg.prototype.T=function(a){var b=this.i.T(!0),c=this,d=new jf;d.next=function(){try{var f=b.da()}catch(g){if(g===hf)return kf;throw g;}for(;f.substr(0,c.h.length)!=c.h;)try{f=b.da()}catch(g){if(g===hf)return kf;throw g;}return lf(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.da=function(){return mf(e.call(d))};
return d};function ng(a){H.call(this,a)}
r(ng,H);ng.prototype.getKey=function(){return Mc(this,1)};
ng.prototype.getValue=function(){return Mc(this,2===Pc(this,og)?2:-1)};
ng.prototype.setValue=function(a){return Oc(this,2,og,a)};
var og=[2,3,4,5,6];function pg(a){H.call(this,a)}
r(pg,H);function qg(a){H.call(this,a)}
r(qg,H);function rg(a){H.call(this,a)}
r(rg,H);function sg(a){H.call(this,a,-1,tg)}
r(sg,H);sg.prototype.getPlayerType=function(){return Mc(this,36)};
sg.prototype.setHomeGroupInfo=function(a){return G(this,81,a)};
var tg=[9,66,24,32,86,100,101];function ug(a){H.call(this,a,-1,vg)}
r(ug,H);var vg=[15,26,28];function wg(a){H.call(this,a)}
r(wg,H);wg.prototype.setToken=function(a){return F(this,2,a)};function xg(a){H.call(this,a,-1,yg)}
r(xg,H);xg.prototype.setSafetyMode=function(a){return F(this,5,a)};
var yg=[12];function zg(a){H.call(this,a,-1,Ag)}
r(zg,H);var Ag=[12];function Bg(a){H.call(this,a)}
r(Bg,H);var Cg={qh:0,ah:1,hh:2,ih:4,nh:8,jh:16,kh:32,ph:64,oh:128,dh:256,fh:512,mh:1024,eh:2048,gh:4096,bh:8192,lh:16384};function Dg(a){H.call(this,a)}
r(Dg,H);function Eg(a,b){G(a,1,b)}
Dg.prototype.Y=function(a){F(this,2,a)};
function Fg(a){H.call(this,a)}
r(Fg,H);function Gg(a,b){G(a,1,b)}
;function Hg(a){H.call(this,a,-1,Ig)}
r(Hg,H);Hg.prototype.Y=function(a){F(this,1,a)};
function Jg(a,b){G(a,2,b)}
var Ig=[3];function Kg(a){H.call(this,a)}
r(Kg,H);Kg.prototype.Y=function(a){F(this,1,a)};function Lg(a){H.call(this,a)}
r(Lg,H);Lg.prototype.Y=function(a){F(this,1,a)};function Mg(a){H.call(this,a)}
r(Mg,H);Mg.prototype.Y=function(a){F(this,1,a)};function Ng(a){H.call(this,a)}
r(Ng,H);function Og(a){H.call(this,a)}
r(Og,H);function Pg(a){H.call(this,a,-1,Qg)}
r(Pg,H);Pg.prototype.getPlayerType=function(){var a=Mc(this,7);return null==a?0:a};
Pg.prototype.setVideoId=function(a){return F(this,19,a)};
function Rg(a,b){Uc(a,68,Sg,b)}
function Sg(a){H.call(this,a)}
r(Sg,H);Sg.prototype.getId=function(){var a=Mc(this,2);return null==a?"":a};
var Qg=[83,68];function Tg(a){H.call(this,a)}
r(Tg,H);function Ug(a){H.call(this,a)}
r(Ug,H);function Vg(a){H.call(this,a)}
r(Vg,H);function Wg(a){H.call(this,a,427)}
r(Wg,H);
var Tc=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,413,414,415,416,417,418,419,420,423,424,425,426,117];function Xg(a){H.call(this,a)}
r(Xg,H);function Yg(a){H.call(this,a)}
r(Yg,H);Yg.prototype.setVideoId=function(a){return Oc(this,1,Zg,a)};
Yg.prototype.getPlaylistId=function(){return Mc(this,2===Pc(this,Zg)?2:-1)};
var Zg=[1,2];function $g(a){H.call(this,a,-1,ah)}
r($g,H);var ah=[3];function bh(a){H.call(this,a,1)}
r(bh,H);function ch(a){H.call(this,a)}
r(ch,H);var dh;dh=new function(a,b){this.h=a;this.fieldName=b;this.isRepeated=0;this.i=gd}(406606992,{so:0},ch);function eh(){ch.apply(this,arguments)}
r(eh,ch);function fh(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var gh,hh,ih,jh=x.window,kh=(null===(gh=null===jh||void 0===jh?void 0:jh.yt)||void 0===gh?void 0:gh.config_)||(null===(hh=null===jh||void 0===jh?void 0:jh.ytcfg)||void 0===hh?void 0:hh.data_)||{},lh=(null===(ih=null===jh||void 0===jh?void 0:jh.ytcfg)||void 0===ih?void 0:ih.obfuscatedData_)||[];function mh(){bh.apply(this,arguments)}
r(mh,bh);var nh=new mh(lh),oh=kh.EXPERIMENT_FLAGS;if(!oh||!oh.jspb_i18n_extension){var ph=new eh;dh.i(nh,ph)}y("yt.config_",kh,void 0);y("yt.configJspb_",lh,void 0);function qh(){fh(kh,arguments)}
function B(a,b){return a in kh?kh[a]:b}
function rh(a){return B(a,void 0)}
;function K(a){a=sh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function th(a,b){a=sh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function uh(){return B("EXPERIMENTS_TOKEN","")}
function sh(a){var b=B("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:B("EXPERIMENT_FLAGS",{})[a]}
function vh(){var a=[],b=B("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=B("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var wh={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},xh={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var yh=0,zh=jc?"webkit":ic?"moz":gc?"ms":fc?"o":"";y("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++yh},void 0);var Ah=[];function Bh(a){Ah.forEach(function(b){return b(a)})}
function Ch(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){M(b)}}:a}
function M(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=B("ERRORS",[]),e.push([a,"ERROR",b,c,d]),qh("ERRORS",e));Bh(a)}
function Dh(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=B("ERRORS",[]),e.push([a,"WARNING",b,c,d]),qh("ERRORS",e))}
;var Eh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Fh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Eh||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Gh(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Fh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Fh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Fh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=x.ytEventsEventsListeners||{};y("ytEventsEventsListeners",nb,void 0);var Hh=x.ytEventsEventsCounter||{count:0};y("ytEventsEventsCounter",Hh,void 0);
function Ih(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Jh=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Kh(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ih(a,b,c,d);if(e)return e;e=++Hh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Fh(h);if(!wd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Fh(h);
h.currentTarget=a;return c.call(a,h)};
g=Ch(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Jh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function Lh(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Jh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;var Mh=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Nh(a,b){"function"===typeof a&&(a=Ch(a));return window.setTimeout(a,b)}
function Oh(a){window.clearTimeout(a)}
;function Ph(a){this.L=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.S=Kh(window,"mousemove",Ua(this.Z,this));a=Ua(this.M,this);"function"===typeof a&&(a=Ch(a));this.ga=window.setInterval(a,25)}
Xa(Ph,I);Ph.prototype.Z=function(a){void 0===a.h&&Gh(a);var b=a.h;void 0===a.i&&Gh(a);this.i=new sd(b,a.i)};
Ph.prototype.M=function(){if(this.i){var a=Mh();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.L();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
Ph.prototype.I=function(){window.clearInterval(this.ga);Lh(this.S)};function Qh(){}
function Rh(a,b){return Sh(a,0,b)}
Qh.prototype.N=function(a,b){return Sh(a,1,b)};
function Th(a,b){Sh(a,2,b)}
function Uh(a){var b=A("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Vh(){Qh.apply(this,arguments)}
r(Vh,Qh);function Wh(){Vh.h||(Vh.h=new Vh);return Vh.h}
function Sh(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Nh(a,c||0)}
Vh.prototype.U=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):Oh(a)}};
Vh.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Vh.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};var Xh=Wh();var Yh={};
function Zh(a){var b=void 0===a?{}:a;a=void 0===b.ec?!1:b.ec;b=void 0===b.Tb?!0:b.Tb;if(null==A("_lact",window)){var c=parseInt(B("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&$h();Kh(document,"keydown",$h);Kh(document,"keyup",$h);Kh(document,"mousedown",$h);Kh(document,"mouseup",$h);a?Kh(window,"touchmove",function(){ai("touchmove",200)},{passive:!0}):(Kh(window,"resize",function(){ai("resize",200)}),b&&Kh(window,"scroll",function(){ai("scroll",200)}));
new Ph(function(){ai("mouse",100)});
Kh(document,"touchstart",$h,{passive:!0});Kh(document,"touchend",$h,{passive:!0})}}
function ai(a,b){Yh[a]||(Yh[a]=!0,Xh.N(function(){$h();Yh[a]=!1},b))}
function $h(){null==A("_lact",window)&&Zh();var a=Date.now();y("_lact",a,window);-1==A("_fact",window)&&y("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function bi(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function ci(){var a=di;A("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function ei(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;var fi=/^[\w.]*$/,gi={q:!0,search_query:!0};function hi(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=ii(f[0]||""),h=ii(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(t){var k=t,l=f[0],n=String(hi);k.args=[{key:l,value:f[1],query:a,method:ji==n?"unchanged":n}];gi.hasOwnProperty(l)||Dh(k)}}return c}
var ji=String(hi);function ki(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function li(a){"?"==a.charAt(0)&&(a=a.substr(1));return hi(a,"&")}
function mi(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),li(1<a.length?a[1]:a[0])):{}}
function ni(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=li(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return bc(a,e)+d}
function oi(a){if(!b)var b=window.location.href;var c=a.match(Wb)[1]||null,d=Yb(a);c&&d?(a=a.match(Wb),b=b.match(Wb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Yb(b)==d&&(Number(b.match(Wb)[4]||null)||null)==(Number(a.match(Wb)[4]||null)||null):!0;return a}
function ii(a){return a&&a.match(fi)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function pi(a){var b=qi;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Id;e.flash="0";a:{try{var f=b.h.top.location.href}catch(jb){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?ld:g;try{var h=g.history.length}catch(jb){h=0}e.u_his=h;var k;e.u_h=null==(k=ld.screen)?void 0:k.height;var l;e.u_w=null==(l=ld.screen)?void 0:l.width;var n;e.u_ah=null==(n=ld.screen)?void 0:n.availHeight;var t;e.u_aw=
null==(t=ld.screen)?void 0:t.availWidth;var z;e.u_cd=null==(z=ld.screen)?void 0:z.colorDepth}catch(jb){}h=b.h;try{var u=h.screenX;var D=h.screenY}catch(jb){}try{var E=h.outerWidth;var L=h.outerHeight}catch(jb){}try{var P=h.innerWidth;var S=h.innerHeight}catch(jb){}try{var W=h.screenLeft;var aa=h.screenTop}catch(jb){}try{P=h.innerWidth,S=h.innerHeight}catch(jb){}try{var Dd=h.screen.availWidth;var fa=h.screen.availTop}catch(jb){}u=[W,aa,u,D,Dd,fa,E,L,P,S];try{var Y=(b.h.top||window).document,ha="CSS1Compat"==
Y.compatMode?Y.documentElement:Y.body;var Za=(new td(ha.clientWidth,ha.clientHeight)).round()}catch(jb){Za=new td(-12245933,-12245933)}Y=Za;Za={};ha=new Je;x.SVGElement&&x.document.createElementNS&&ha.set(0);D=Bd();D["allow-top-navigation-by-user-activation"]&&ha.set(1);D["allow-popups-to-escape-sandbox"]&&ha.set(2);x.crypto&&x.crypto.subtle&&ha.set(3);x.TextDecoder&&x.TextEncoder&&ha.set(4);ha=Ke(ha);Za.bc=ha;Za.bih=Y.height;Za.biw=Y.width;Za.brdim=u.join();b=b.i;Y="ma";Le.ma&&Le.hasOwnProperty(Y)?
Y=Le.ma:(ha=new Le,Le.ma=ha,Le.hasOwnProperty(Y),Y=ha);b=(Za.vis=Y.B(Jd.flag,Jd.defaultValue)&&b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Za.wgl=!!ld.WebGLRenderingContext,Za);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var qi=new function(){var a=window.document;this.h=window;this.i=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return ki(pi(a))},void 0);Date.now();var ri="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function si(){if(!ri)return null;var a=ri();return"open"in a?a:null}
function ti(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var ui={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},vi="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja("client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" "))),wi=!1;
function xi(a,b){b=void 0===b?{}:b;var c=oi(a),d=K("web_ajax_ignore_global_headers_if_set"),e;for(e in ui){var f=B(ui[e]);!f||!c&&Yb(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!Yb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Yb(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Yb(a))b["X-YouTube-Ad-Signals"]=ki(pi(void 0));return b}
function yi(a){var b=window.location.search,c=Yb(a);K("debug_handle_relative_url_for_query_forward_killswitch")||c||!oi(a)||(c=document.location.hostname);var d=Xb(a.match(Wb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=li(b),f={};db(vi,function(g){e[g]&&(f[g]=e[g])});
return ni(a,f||{},!1)}
function zi(a,b){var c=b.format||"JSON";a=Ai(a,b);var d=Bi(a,b),e=!1,f=Ci(a,function(k){if(!e){e=!0;h&&Oh(h);var l=ti(k),n=null,t=400<=k.status&&500>k.status,z=500<=k.status&&600>k.status;if(l||t||z)n=Di(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};t=b.context||x;l?b.onSuccess&&b.onSuccess.call(t,k,n):b.onError&&b.onError.call(t,k,n);b.onFinish&&b.onFinish.call(t,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Nh(function(){e||(e=!0,f.abort(),Oh(h),g.call(b.context||x,f))},b.timeout)}return f}
function Ai(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=B("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=ni(a,b||{},!0);return a}
function Bi(a,b){var c=B("XSRF_FIELD_NAME",void 0),d=B("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=rh("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Yb(a)&&!b.withCredentials&&Yb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=li(e),vb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):ac(e));f=e||f&&!ob(f);!wi&&f&&"POST"!=
b.method&&(wi=!0,M(Error("AJAX request with postData should use POST")));return e}
function Di(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Dh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ei(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=Fi(g)})}d&&Gi(e);
return e}
function Gi(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Ab("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=xb();d=e?e.createHTML(d):d;a[c]=new Pb(d)}else Gi(a[b])}}
function Ei(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Fi(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ci(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Ch(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=si();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;K("debug_forward_web_query_parameters")&&(a=yi(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=xi(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Hi=x.ytPubsubPubsubInstance||new J,Ii=x.ytPubsubPubsubSubscribedKeys||{},Ji=x.ytPubsubPubsubTopicToKeys||{},Ki=x.ytPubsubPubsubIsSynchronous||{};function Li(a,b){var c=Mi();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Ii[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Ki[a]?f():Nh(f,0)}catch(g){M(g)}},void 0);
Ii[d]=!0;Ji[a]||(Ji[a]=[]);Ji[a].push(d);return d}return 0}
function Ni(a){var b=Mi();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),db(a,function(c){b.unsubscribeByKey(c);delete Ii[c]}))}
function Oi(a,b){var c=Mi();c&&c.publish.apply(c,arguments)}
function Pi(a){var b=Mi();if(b)if(b.clear(a),a)Qi(a);else for(var c in Ji)Qi(c)}
function Mi(){return x.ytPubsubPubsubInstance}
function Qi(a){Ji[a]&&(a=Ji[a],db(a,function(b){Ii[b]&&delete Ii[b]}),a.length=0)}
J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.wa;J.prototype.publish=J.prototype.ka;J.prototype.clear=J.prototype.clear;y("ytPubsubPubsubInstance",Hi,void 0);y("ytPubsubPubsubTopicToKeys",Ji,void 0);y("ytPubsubPubsubIsSynchronous",Ki,void 0);y("ytPubsubPubsubSubscribedKeys",Ii,void 0);var Ri=window,N=Ri.ytcsi&&Ri.ytcsi.now?Ri.ytcsi.now:Ri.performance&&Ri.performance.timing&&Ri.performance.now&&Ri.performance.timing.navigationStart?function(){return Ri.performance.timing.navigationStart+Ri.performance.now()}:function(){return(new Date).getTime()};var Si=th("initial_gel_batch_timeout",2E3),Ti=Math.pow(2,16)-1,Ui=void 0;function Vi(){this.j=this.h=this.i=0}
var Wi=new Vi,Xi=new Vi,Yi=!0,Zi=x.ytLoggingTransportGELQueue_||new Map;y("ytLoggingTransportGELQueue_",Zi,void 0);var $i=x.ytLoggingTransportGELProtoQueue_||new Map;y("ytLoggingTransportGELProtoQueue_",$i,void 0);var aj=x.ytLoggingTransportTokensToCttTargetIds_||{};y("ytLoggingTransportTokensToCttTargetIds_",aj,void 0);var bj=x.ytLoggingTransportTokensToJspbCttTargetIds_||{};y("ytLoggingTransportTokensToJspbCttTargetIds_",bj,void 0);
function cj(a,b){if("log_event"===a.endpoint){var c=dj(a),d=Zi.get(c)||[];Zi.set(c,d);d.push(a.payload);ej(b,d,c)}}
function fj(a,b){if("log_event"===a.endpoint){var c=dj(a,!0),d=$i.get(c)||[];$i.set(c,d);d.push(a.payload);ej(b,d,c,!0)}}
function ej(a,b,c,d){d=void 0===d?!1:d;a&&(Ui=new a);a=th("tvhtml5_logging_max_batch")||th("web_logging_max_batch")||100;var e=N(),f=d?Xi.j:Wi.j;b.length>=a?gj({writeThenSend:!0},K("flush_only_full_queue")?c:void 0,d):10<=e-f&&(hj(d),d?Xi.j=e:Wi.j=e)}
function ij(a,b){if("log_event"===a.endpoint){var c=dj(a),d=new Map;d.set(c,[a.payload]);b&&(Ui=new b);return new Ff(function(e){Ui&&Ui.isReady()?jj(d,e,{bypassNetworkless:!0},!0):e()})}}
function kj(a,b){if("log_event"===a.endpoint){var c=dj(a,!0),d=new Map;d.set(c,[a.payload]);b&&(Ui=new b);return new Ff(function(e){Ui&&Ui.isReady()?lj(d,e,{bypassNetworkless:!0},!0):e()})}}
function dj(a,b){var c="";if(a.xa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Yg;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Oc(d,2,Zg,c.playlistId);bj[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),aj[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function gj(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Ff(function(d){c?(Oh(Xi.i),Oh(Xi.h),Xi.h=0):(Oh(Wi.i),Oh(Wi.h),Wi.h=0);if(Ui&&Ui.isReady())if(void 0!==b)if(c){var e=new Map,f=$i.get(b)||[];e.set(b,f);lj(e,d,a);$i.delete(b)}else e=new Map,f=Zi.get(b)||[],e.set(b,f),jj(e,d,a),Zi.delete(b);else c?(lj($i,d,a),$i.clear()):(jj(Zi,d,a),Zi.clear());else hj(c),d()})}
function hj(a){a=void 0===a?!1:a;if(K("web_gel_timeout_cap")&&(!a&&!Wi.h||a&&!Xi.h)){var b=Nh(function(){gj({writeThenSend:!0},void 0,a)},6E4);
a?Xi.h=b:Wi.h=b}Oh(a?Xi.i:Wi.i);b=B("LOGGING_BATCH_TIMEOUT",th("web_gel_debounce_ms",1E4));K("shorten_initial_gel_batch_timeout")&&Yi&&(b=Si);b=Nh(function(){gj({writeThenSend:!0},void 0,a)},b);
a?Xi.i=b:Wi.i=b}
function jj(a,b,c,d){var e=Ui;c=void 0===c?{}:c;var f=Math.round(N()),g=a.size;a=q(a);for(var h=a.next();!h.done;h=a.next()){var k=q(h.value);h=k.next().value;var l=k=k.next().value;k=tb({context:mj(e.config_||nj())});k.events=l;(l=aj[h])&&oj(k,h,l);delete aj[h];h="visitorOnlyApprovedKey"===h;pj(k,f,h);qj(c);rj(e,"log_event",k,sj(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
Yi=!1}}
function lj(a,b,c,d){var e=Ui;c=void 0===c?{}:c;var f=Math.round(N()),g=a.size;a=q(a);for(var h=a.next();!h.done;h=a.next()){var k=q(h.value);h=k.next().value;var l=k=k.next().value;k=new $g;var n=tj(e.config_||nj());G(k,1,n);for(n=0;n<l.length;n++)Uc(k,3,Wg,l[n]);(l=bj[h])&&uj(k,h,l);delete bj[h];h="visitorOnlyApprovedKey"===h;vj(k,f,h);qj(c);a:{Ic=!0;try{var t=JSON.stringify(k.toJSON(),dd);break a}finally{Ic=!1}t=void 0}k=t;h=sj(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;rj(e,"log_event","",h);Yi=!1}}
function qj(a){K("always_send_and_write")&&(a.writeThenSend=!1)}
function sj(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Bb:a,xa:b,po:!!e,headers:{},postBodyFormat:"",postBody:""}}
function pj(a,b,c){a.requestTimeMs=String(b);K("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=B("EVENT_ID",void 0))&&(c=wj(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function vj(a,b,c){F(a,2,b);if(!c&&(b=B("EVENT_ID",void 0))){c=wj();var d=new Xg;F(d,1,b);F(d,2,c);G(a,5,d)}}
function wj(){var a=B("BATCH_CLIENT_COUNTER",void 0)||0;a||(a=Math.floor(Math.random()*Ti/2));a++;a>Ti&&(a=1);qh("BATCH_CLIENT_COUNTER",a);return a}
function oj(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function uj(a,b,c){if(Mc(c,1===Pc(c,Zg)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,4,c);a=Qc(a,zg,1)||new zg;c=Qc(a,xg,3)||new xg;var e=new wg;e.setToken(b);F(e,1,d);Uc(c,12,wg,e);G(a,3,c)}
;var xj=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",xj,void 0);
function yj(a,b,c,d){d=void 0===d?{}:d;if(K("lr_drop_other_and_business_payloads")){if(xh[a]||wh[a])return}else if(K("lr_drop_other_payloads")&&xh[a])return;var e={},f=Math.round(d.timestamp||N());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=bi();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};K("log_sequence_info_on_gel_web")&&d.X&&(a=e.context,b=d.X,b={index:zj(b),groupKey:b},a.sequence=b,d.ub&&delete xj[d.X]);(d.mc?ij:cj)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
xa:d.xa},c)}
function zj(a){xj[a]=a in xj?xj[a]+1:0;return xj[a]}
;function Aj(a){var b=this;this.h=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.h=c})}
function Bj(){if(!x.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return x.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":x.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":x.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":x.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
function Cj(){var a=Bj();a=Object.keys(Ie).indexOf(a);return-1===a?null:a}
;function Dj(a,b,c,d,e){Sd.set(""+a,b,{Qa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Ej(a){return Sd.get(""+a,void 0)}
function Fj(){if(!Sd.isEnabled())return!1;if(!Sd.isEmpty())return!0;Sd.set("TESTCOOKIESENABLED","1",{Qa:60});if("1"!==Sd.get("TESTCOOKIESENABLED"))return!1;Sd.remove("TESTCOOKIESENABLED");return!0}
;var Gj=A("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",Gj,void 0);function Hj(){this.h=B("ALT_PREF_COOKIE_NAME","PREF");this.i=B("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Ej(this.h);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Gj[d]=c.toString())}}}
Hj.prototype.get=function(a,b){Ij(a);Jj(a);a=void 0!==Gj[a]?Gj[a].toString():null;return null!=a?a:b?b:""};
Hj.prototype.set=function(a,b){Ij(a);Jj(a);if(null==b)throw Error("ExpectedNotNull");Gj[a]=b.toString()};
function Kj(a){return!!((Lj("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
Hj.prototype.remove=function(a){Ij(a);Jj(a);delete Gj[a]};
Hj.prototype.clear=function(){for(var a in Gj)delete Gj[a]};
function Jj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ij(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Lj(a){a=void 0!==Gj[a]?Gj[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
La(Hj);var Mj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Nj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Oj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Pj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Qj(){var a=x.navigator;return a?a.connection:void 0}
function Rj(){var a=Qj();if(a){var b=Mj[a.type||"unknown"]||"CONN_UNKNOWN";a=Mj[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Sj(){var a=Qj();if(null!==a&&void 0!==a&&a.effectiveType)return Pj.hasOwnProperty(a.effectiveType)?Pj[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Tj(){return"INNERTUBE_API_KEY"in kh&&"INNERTUBE_API_VERSION"in kh}
function nj(){return{innertubeApiKey:B("INNERTUBE_API_KEY",void 0),innertubeApiVersion:B("INNERTUBE_API_VERSION",void 0),cb:B("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),eb:B("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Vb:B("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),yb:B("INNERTUBE_CONTEXT_HL",void 0),xb:B("INNERTUBE_CONTEXT_GL",void 0),Wb:B("INNERTUBE_HOST_OVERRIDE",void 0)||"",Yb:!!B("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Xb:!!B("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:B("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function mj(a){var b={client:{hl:a.yb,gl:a.xb,clientName:a.eb,clientVersion:a.innertubeContextClientVersion,configInfo:a.cb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=x.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=uh();""!==c&&(b.client.experimentsToken=c);c=vh();0<c.length&&(b.request={internalExperimentFlags:c});Uj(a,void 0,b);Vj(a,void 0,b);Wj(void 0,b);Xj(a,void 0,b);Yj(void 0,b);B("DELEGATED_SESSION_ID")&&!K("pageid_as_header_web")&&(b.user=
{onBehalfOfUser:B("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=q(Object.entries(li(B("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=q(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function tj(a){var b=new zg,c=new sg;F(c,1,a.yb);F(c,2,a.xb);F(c,16,a.Vb);F(c,17,a.innertubeContextClientVersion);if(a.cb){var d=a.cb,e=new pg;d.coldConfigData&&F(e,1,d.coldConfigData);d.appInstallData&&F(e,6,d.appInstallData);d.coldHashData&&F(e,3,d.coldHashData);d.hotHashData&&F(e,5,d.hotHashData);G(c,62,e)}(d=x.devicePixelRatio)&&1!=d&&F(c,65,d);d=uh();""!==d&&F(c,54,d);d=vh();if(0<d.length){e=new ug;for(var f=0;f<d.length;f++){var g=new ng;F(g,1,d[f].key);g.setValue(d[f].value);Uc(e,15,ng,g)}G(b,
5,e)}Uj(a,c);Vj(a,c);Wj(c);Xj(a,c);Yj(c);B("DELEGATED_SESSION_ID")&&!K("pageid_as_header_web")&&(a=new xg,F(a,3,B("DELEGATED_SESSION_ID")));a=q(Object.entries(li(B("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=q(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?F(c,12,e):"cmodel"===d?F(c,13,e):"cbr"===d?F(c,87,e):"cbrver"===d?F(c,88,e):"cos"===d?F(c,18,e):"cosver"===d?F(c,19,e):"cplatform"===d&&F(c,42,e);G(b,1,c);return b}
function Uj(a,b,c){a=a.eb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Qc(b,qg,96)||new qg;var d=Cj();null!==d&&F(c,3,d);G(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Bj())}
function Vj(a,b,c){a=a.eb;if(("WEB_REMIX"===a||76===a)&&!K("music_web_display_mode_killswitch"))if(b){var d;c=null!=(d=Qc(b,rg,70))?d:new rg;d=Cj();null!==d&&F(c,10,d);G(b,70,c)}else if(c){var e;c.client.Ab=null!=(e=c.client.Ab)?e:{};c.client.Ab.webDisplayMode=Bj()}}
function Wj(a,b){var c;if(K("web_log_memory_total_kbytes")&&(null==(c=x.navigator)?0:c.deviceMemory)){var d;c=null==(d=x.navigator)?void 0:d.deviceMemory;a?F(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Xj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Qc(b,pg,62))?d:new pg;F(c,6,a.appInstallData);G(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Yj(a,b){var c=Rj();c&&(a?F(a,61,Nj[c]):b&&(b.client.connectionType=c));K("web_log_effective_connection_type")&&(c=Sj())&&(a?F(a,94,Oj[c]):b&&(b.client.effectiveConnectionType=c))}
function Zj(a,b,c){c=void 0===c?{}:c;var d={};K("enable_web_eom_visitor_data")&&B("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":B("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||B("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.no||B("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().mo:b=Wd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=B("SESSION_INDEX",0),K("pageid_as_header_web")&&(d["X-Goog-PageId"]=B("DELEGATED_SESSION_ID")));return d}
;function ak(a){a=Object.assign({},a);delete a.Authorization;var b=Wd();if(b){var c=new bf;c.update(B("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=zc(c.digest(),3)}return a}
;function bk(a){var b=new gg;(b=b.isAvailable()?a?new mg(b,a):b:null)||(a=new hg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new cg(a):null;this.i=document.domain||window.location.hostname}
bk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(yf(b))}catch(f){return}else e=escape(b);Dj(a,e,c,this.i)};
bk.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Ej(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
bk.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Sd.remove(""+a,"/",void 0===b?"youtube.com":b)};var ck;function dk(){ck||(ck=new bk("yt.innertube"));return ck}
function ek(a,b,c,d){if(d)return null;d=dk().get("nextId",!0)||1;var e=dk().get("requests",!0)||{};e[d]={method:a,request:b,authState:ak(c),requestTime:Math.round(N())};dk().set("nextId",d+1,86400,!0);dk().set("requests",e,86400,!0);return d}
function fk(a){var b=dk().get("requests",!0)||{};delete b[a];dk().set("requests",b,86400,!0)}
function gk(a){var b=dk().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(N())-d.requestTime)){var e=d.authState,f=ak(Zj(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(N())),rj(a,d.method,e,{}));delete b[c]}}dk().set("requests",b,86400,!0)}}
;var hk=uc||vc;function ik(a){var b=Mb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var jk=function(){var a;return function(){a||(a=new bk("ytidb"));return a}}();
function kk(){var a;return null===(a=jk())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var lk=[],mk,nk=!1;function ok(){var a={};for(mk=new pk(void 0===a.handleError?qk:a.handleError,void 0===a.logEvent?rk:a.logEvent);0<lk.length;)switch(a=lk.shift(),a.type){case "ERROR":mk.handleError(a.payload);break;case "EVENT":mk.logEvent(a.eventType,a.payload)}}
function sk(a){nk||(mk?mk.handleError(a):(lk.push({type:"ERROR",payload:a}),10<lk.length&&lk.shift()))}
function tk(a,b){nk||(mk?mk.logEvent(a,b):(lk.push({type:"EVENT",eventType:a,payload:b}),10<lk.length&&lk.shift()))}
;function uk(a){var b=Fa.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
r(uk,Error);function vk(){try{return wk(),!0}catch(a){return!1}}
function wk(){if(void 0!==B("DATASYNC_ID",void 0))return B("DATASYNC_ID",void 0);throw new uk("Datasync ID not set","unknown");}
;function xk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function yk(a){return a.substr(0,a.indexOf(":"))||a}
;var zk={},Ak=(zk.AUTH_INVALID="No user identifier specified.",zk.EXPLICIT_ABORT="Transaction was explicitly aborted.",zk.IDB_NOT_SUPPORTED="IndexedDB is not supported.",zk.MISSING_INDEX="Index not created.",zk.MISSING_OBJECT_STORES="Object stores not created.",zk.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",zk.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",zk.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
zk.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",zk.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",zk.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",zk.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",zk),Bk={},Ck=(Bk.AUTH_INVALID="ERROR",Bk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Bk.EXPLICIT_ABORT="IGNORED",Bk.IDB_NOT_SUPPORTED="ERROR",Bk.MISSING_INDEX=
"WARNING",Bk.MISSING_OBJECT_STORES="ERROR",Bk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Bk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Bk.QUOTA_EXCEEDED="WARNING",Bk.QUOTA_MAYBE_EXCEEDED="WARNING",Bk.UNKNOWN_ABORT="WARNING",Bk.INCOMPATIBLE_DB_VERSION="WARNING",Bk),Dk={},Ek=(Dk.AUTH_INVALID=!1,Dk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Dk.EXPLICIT_ABORT=!1,Dk.IDB_NOT_SUPPORTED=!1,Dk.MISSING_INDEX=!1,Dk.MISSING_OBJECT_STORES=!1,Dk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Dk.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Dk.QUOTA_EXCEEDED=!1,Dk.QUOTA_MAYBE_EXCEEDED=!0,Dk.UNKNOWN_ABORT=!0,Dk.INCOMPATIBLE_DB_VERSION=!1,Dk);function Fk(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Ak[a]:c;d=void 0===d?Ck[a]:d;e=void 0===e?Ek[a]:e;uk.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Fk.prototype)}
r(Fk,uk);function Gk(a,b){Fk.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ak.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Gk.prototype)}
r(Gk,Fk);function Hk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Hk.prototype)}
r(Hk,Error);var Ik=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Jk(a,b,c,d){b=yk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Fk)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Fk("QUOTA_EXCEEDED",a);if(wc&&"UnknownError"===e.name)return new Fk("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Hk)return new Fk("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ik.some(function(f){return e.message.includes(f)}))return new Fk("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Fk("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",Cb:e.name})];e.level="WARNING";return e}
function Kk(a,b,c){var d=kk();return new Fk("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null===d||void 0===d?void 0:d.hasSucceededOnce}})}
;function Lk(a){if(!a)throw Error();throw a;}
function Mk(a){return a}
function Nk(a){this.h=a}
function Ok(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=q(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=q(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Ok.all=function(a){return new Ok(new Nk(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={oa:0};f.oa<a.length;f={oa:f.oa},++f.oa)Pk(Ok.resolve(a[f.oa]).then(function(g){return function(h){d[g.oa]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
Ok.resolve=function(a){return new Ok(new Nk(function(b,c){a instanceof Ok?a.then(b,c):b(a)}))};
Ok.reject=function(a){return new Ok(new Nk(function(b,c){c(a)}))};
Ok.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:Mk,e=null!==b&&void 0!==b?b:Lk;return new Ok(new Nk(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Qk(c,c,d,f,g)}),c.onRejected.push(function(){Rk(c,c,e,f,g)})):"FULFILLED"===c.state.status?Qk(c,c,d,f,g):"REJECTED"===c.state.status&&Rk(c,c,e,f,g)}))};
function Pk(a,b){a.then(void 0,b)}
function Qk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Ok?Sk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Rk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Ok?Sk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Sk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Ok?Sk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Tk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Uk(a){return new Promise(function(b,c){Tk(a,b,c)})}
function Vk(a){return new Ok(new Nk(function(b,c){Tk(a,b,c)}))}
;function Wk(a,b){return new Ok(new Nk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Xk(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(N());this.i=!1}
m=Xk.prototype;m.add=function(a,b,c){return Yk(this,[a],{mode:"readwrite",O:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Yk(this,[a],{mode:"readwrite",O:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Yk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).count(b)})};
function Zk(a,b,c){a=a.h.createObjectStore(b,c);return new $k(a)}
m.delete=function(a,b){return Yk(this,[a],{mode:"readwrite",O:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Yk(this,[a],{mode:"readonly",O:!0},function(c){return c.objectStore(a).get(b)})};
function al(a,b){return Yk(a,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(c){c=c.objectStore("LogsRequestsStore");return Vk(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Yk(a,b,c,d){var e,f,g,h,k,l,n,t,z,u,D,E;return w(function(L){switch(L.h){case 1:var P={mode:"readonly",O:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?P.mode=c:Object.assign(P,c);e=P;a.transactionCount++;f=e.O?3:1;g=0;case 2:if(h){L.s(3);break}g++;k=Math.round(N());ua(L,4);l=a.h.transaction(b,e.mode);P=new bl(l);P=cl(P,d);return v(L,P,6);case 6:return n=L.i,t=Math.round(N()),dl(a,k,t,g,void 0,b.join(),e),L.return(n);case 4:z=wa(L);u=Math.round(N());D=Jk(z,a.h.name,b.join(),a.h.version);
if((E=D instanceof Fk&&!D.h)||g>=f)dl(a,k,u,g,D,b.join(),e),h=D;L.s(2);break;case 3:return L.return(Promise.reject(h))}})}
function dl(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Fk&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&tk("QUOTA_EXCEEDED",{dbName:yk(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Fk&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),tk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),el(a,!1,d,f,b,g.tag),sk(e)):el(a,!0,d,f,b,g.tag)}
function el(a,b,c,d,e,f){tk("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function $k(a){this.h=a}
m=$k.prototype;m.add=function(a,b){return Vk(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Vk(this.h.clear()).then(function(){})};
m.count=function(a){return Vk(this.h.count(a))};
function fl(a,b){return gl(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?fl(this,a):Vk(this.h.delete(a))};
m.get=function(a){return Vk(this.h.get(a))};
m.index=function(a){try{return new hl(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Hk(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function gl(a,b,c){a=a.h.openCursor(b.query,b.direction);return il(a).then(function(d){return Wk(d,c)})}
function bl(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Fk;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function cl(a,b){var c=new Promise(function(d,e){try{Pk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return q(d).next().value})}
bl.prototype.abort=function(){this.h.abort();this.i=!0;throw new Fk("EXPLICIT_ABORT");};
bl.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new $k(a),this.j.set(a,b));return b};
function hl(a){this.h=a}
m=hl.prototype;m.count=function(a){return Vk(this.h.count(a))};
m.delete=function(a){return jl(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Vk(this.h.get(a))};
m.getKey=function(a){return Vk(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function jl(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return il(a).then(function(d){return Wk(d,c)})}
function kl(a,b){this.request=a;this.cursor=b}
function il(a){return Vk(a).then(function(b){return b?new kl(a,b):null})}
m=kl.prototype;m.advance=function(a){this.cursor.advance(a);return il(this.request)};
m.continue=function(a){this.cursor.continue(a);return il(this.request)};
m.delete=function(){return Vk(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Vk(this.cursor.update(a))};function ll(a,b,c){return new Promise(function(d,e){function f(){z||(z=new Xk(g.result,{closed:t}));return z}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.yc,n=c.upgrade,t=c.closed,z;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&tk("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:yk(a)});var D=f(),E=new bl(g.transaction);
n&&n(D,function(L){return u.oldVersion<L&&u.newVersion>=L},E);
E.done.catch(function(L){e(L)})}catch(L){e(L)}});
g.addEventListener("success",function(){var u=g.result;k&&u.addEventListener("versionchange",function(){k(f())});
u.addEventListener("close",function(){tk("IDB_UNEXPECTEDLY_CLOSED",{dbName:yk(a),dbVersion:u.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function ml(a,b,c){c=void 0===c?{}:c;return ll(a,b,c)}
function nl(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.h)return ua(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),v(g,Uk(c),4);
if(2!=g.h)return va(g,0);f=wa(g);throw Jk(f,a,"",-1);})}
;function ol(a){return new Promise(function(b){Th(function(){b()},a)})}
function pl(a,b){this.name=a;this.options=b;this.l=!0;this.m=this.o=0;this.i=500}
pl.prototype.j=function(a,b,c){c=void 0===c?{}:c;return ml(a,b,c)};
pl.prototype.delete=function(a){a=void 0===a?{}:a;return nl(this.name,a)};
function ql(a,b){return new Fk("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function rl(a,b){if(!b)throw Kk("openWithToken",yk(a.name));return a.open()}
pl.prototype.open=function(){function a(){var f,g,h,k,l,n,t,z,u,D;return w(function(E){switch(E.h){case 1:return h=null!==(f=Error().stack)&&void 0!==f?f:"",ua(E,2),v(E,c.j(c.name,c.options.version,e),4);case 4:k=E.i;for(var L=c.options,P=[],S=q(Object.keys(L.za)),W=S.next();!W.done;W=S.next()){W=W.value;var aa=L.za[W],Dd=void 0===aa.hc?Number.MAX_VALUE:aa.hc;!(k.h.version>=aa.Xa)||k.h.version>=Dd||k.h.objectStoreNames.contains(W)||P.push(W)}l=P;if(0===l.length){E.s(5);break}n=Object.keys(c.options.za);
t=k.objectStoreNames();if(c.m<th("ytidb_reopen_db_retries",0))return c.m++,k.close(),sk(new Fk("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:n,foundObjectStores:t})),E.return(a());if(!(c.o<th("ytidb_remake_db_retries",1))){E.s(6);break}c.o++;if(!K("ytidb_remake_db_enable_backoff_delay")){E.s(7);break}return v(E,ol(c.i),8);case 8:c.i*=2;case 7:return v(E,c.delete(),9);case 9:return sk(new Fk("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:n,foundObjectStores:t})),
E.return(a());case 6:throw new Gk(t,n);case 5:return E.return(k);case 2:z=wa(E);if(z instanceof DOMException?"VersionError"!==z.name:"DOMError"in self&&z instanceof DOMError?"VersionError"!==z.name:!(z instanceof Object&&"message"in z)||"An attempt was made to open a database using a lower version than the existing version."!==z.message){E.s(10);break}return v(E,c.j(c.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),11);case 11:u=E.i;D=u.h.version;if(void 0!==c.options.version&&D>
c.options.version+1)throw u.close(),c.l=!1,ql(c,D);return E.return(u);case 10:throw b(),z instanceof Error&&!K("ytidb_async_stack_killswitch")&&(z.stack=z.stack+"\n"+h.substring(h.indexOf("\n")+1)),Jk(z,c.name,"",null!==(g=c.options.version)&&void 0!==g?g:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw ql(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,yc:b,upgrade:this.options.upgrade};return this.h=d=a()};var sl=new pl("YtIdbMeta",{za:{databases:{Xa:1}},upgrade:function(a,b){b(1)&&Zk(a,"databases",{keyPath:"actualName"})}});
function tl(a,b){var c;return w(function(d){if(1==d.h)return v(d,rl(sl,b),2);c=d.i;return d.return(Yk(c,["databases"],{O:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Vk(f.h.put(a,void 0)).then(function(){})})}))})}
function ul(a,b){var c;return w(function(d){if(1==d.h)return a?v(d,rl(sl,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function vl(a,b){var c,d;return w(function(e){return 1==e.h?(c=[],v(e,rl(sl,b),2)):3!=e.h?(d=e.i,v(e,Yk(d,["databases"],{O:!0,mode:"readonly"},function(f){c.length=0;return gl(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function wl(a){return vl(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function xl(a,b){return vl(function(c){return void 0!==c.userIdentifier&&!a.includes(c.userIdentifier)},b)}
;var yl,zl=new function(){}(new function(){});
function Al(){var a,b,c;return w(function(d){switch(d.h){case 1:a=kk();if(null===a||void 0===a?0:a.hasSucceededOnce)return d.return(!0);var e;if(e=hk)e=/WebKit\/([0-9]+)/.exec(Mb()),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Mb()),e=!(e&&602<=parseInt(e[1],10)));if(e||hc)return d.return(!1);try{if(b=self,!(b.indexedDB&&b.IDBIndex&&b.IDBKeyRange&&b.IDBObjectStore))return d.return(!1)}catch(f){return d.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);
ua(d,2);c={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(d,tl(c,zl),4);case 4:return v(d,ul("yt-idb-test-do-not-use",zl),5);case 5:return d.return(!0);case 2:return wa(d),d.return(!1)}})}
function Bl(){if(void 0!==yl)return yl;nk=!0;return yl=Al().then(function(a){nk=!1;var b,c;null!==(b=jk())&&void 0!==b&&b.h&&(b=kk(),b={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a},null===(c=jk())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0));return a})}
function Cl(){return A("ytglobal.idbToken_")||void 0}
function Dl(){var a=Cl();return a?Promise.resolve(a):Bl().then(function(b){(b=b?zl:void 0)&&y("ytglobal.idbToken_",b,void 0);return b})}
;var El=0;function Fl(a){El||(El=Xh.N(function(){var b,c,d,e,f;return w(function(g){switch(g.h){case 1:return v(g,Dl(),2);case 2:b=g.i;if(!b)return g.return();c=!0;ua(g,3);return v(g,xl(a,b),5);case 5:d=g.i;if(!d.length){c=!1;g.s(6);break}e=d[0];return v(g,nl(e.actualName),7);case 7:return v(g,ul(e.actualName,b),6);case 6:va(g,4);break;case 3:f=wa(g),sk(f),c=!1;case 4:Xh.U(El),El=0,c&&Fl(a),g.h=0}})}))}
new jd;function Gl(a){if(!vk())throw a=new Fk("AUTH_INVALID",{dbName:a}),sk(a),a;var b=wk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Hl(a,b,c,d){var e,f,g,h,k,l;return w(function(n){switch(n.h){case 1:return f=null!==(e=Error().stack)&&void 0!==e?e:"",v(n,Dl(),2);case 2:g=n.i;if(!g)throw h=Kk("openDbImpl",a,b),K("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),sk(h),h;xk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Gl(a);ua(n,3);return v(n,tl(k,g),5);case 5:return v(n,ml(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=wa(n),ua(n,7),v(n,ul(k.actualName,
g),9);case 9:va(n,8);break;case 7:wa(n);case 8:throw l;}})}
function Il(a,b,c){c=void 0===c?{}:c;return Hl(a,b,!1,c)}
function Jl(a,b,c){c=void 0===c?{}:c;return Hl(a,b,!0,c)}
function Kl(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.h)return v(e,Dl(),2);if(3!=e.h){c=e.i;if(!c)return e.return();xk(a);d=Gl(a);return v(e,nl(d.actualName,b),3)}return v(e,ul(d.actualName,c),0)})}
function Ll(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.h?v(e,nl(d.actualName,b),2):v(e,ul(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Ml(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.h)return v(d,Dl(),2);if(3!=d.h){b=d.i;if(!b)return d.return();xk("LogsDatabaseV2");return v(d,wl(b),3)}c=d.i;return v(d,Ll(c,a,b),0)})}
function Nl(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.h)return v(d,Dl(),2);if(3!=d.h){c=d.i;if(!c)return d.return();xk(a);return v(d,nl(a,b),3)}return v(d,ul(a,c),0)})}
;function Ol(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.sa=function(){};
this.now=Date.now;this.ya=!1;this.Jb=null!==(b=a.Jb)&&void 0!==b?b:100;this.Hb=null!==(c=a.Hb)&&void 0!==c?c:1;this.Fb=null!==(d=a.Fb)&&void 0!==d?d:2592E6;this.Db=null!==(e=a.Db)&&void 0!==e?e:12E4;this.Gb=null!==(f=a.Gb)&&void 0!==f?f:5E3;this.v=null!==(g=a.v)&&void 0!==g?g:void 0;this.Ma=!!a.Ma;this.La=null!==(h=a.La)&&void 0!==h?h:.1;this.Sa=null!==(k=a.Sa)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.sa&&(this.sa=a.sa);a.ya&&(this.ya=a.ya);this.B=a.B;this.V=a.V;this.K=a.K;
this.J=a.J;this.ea=a.ea;this.ib=a.ib;this.hb=a.hb;this.v&&(!this.B||this.B("networkless_logging"))&&Pl(this)}
function Pl(a){a.v&&!a.ya&&(a.h=!0,a.Ma&&Math.random()<=a.La&&a.K.Pb(a.v),Ql(a),a.J.H()&&a.Ca(),a.B&&!a.B("use_new_nwl_initialization")&&(a.J.W(a.ib,a.Ca.bind(a)),a.J.W(a.hb,a.nb.bind(a))))}
m=Ol.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.K.set(d,this.v).then(function(e){d.id=e;c.J.H()&&Rl(c,d)}).catch(function(e){Rl(c,d);
Sl(c,e)})}else this.ea(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.v&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.B&&this.B("nwl_skip_retry")&&(e.skipRetry=c);if(this.J.H()||this.B&&this.B("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.h)return v(k,d.K.set(e,d.v).catch(function(l){Sl(d,l)}),2);
f(g,h);k.h=0})}}this.ea(a,b,e.skipRetry)}else this.K.set(e,this.v).catch(function(g){d.ea(a,b,e.skipRetry);
Sl(d,g)})}else this.ea(a,b,this.B&&this.B("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.K.ra(d.id,c.v):e=!0;c.J.ca&&c.B&&c.B("vss_network_hint")&&c.J.ca(!0);f(g,h)};
this.ea(d.url,d.options);this.K.set(d,this.v).then(function(g){d.id=g;e&&c.K.ra(d.id,c.v)}).catch(function(g){Sl(c,g)})}else this.ea(a,b)};
m.Ca=function(){var a=this;if(!this.v)throw Kk("throttleSend");this.i||(this.i=this.V.N(function(){var b;return w(function(c){if(1==c.h)return v(c,a.K.wb("NEW",a.v),2);if(3!=c.h)return b=c.i,b?v(c,Rl(a,b),3):(a.nb(),c.return());a.i&&(a.i=0,a.Ca());c.h=0})},this.Jb))};
m.nb=function(){this.V.U(this.i);this.i=0};
function Rl(a,b){var c,d;return w(function(e){switch(e.h){case 1:if(!a.v)throw c=Kk("immediateSend"),c;if(void 0===b.id){e.s(2);break}return v(e,a.K.Zb(b.id,a.v),3);case 3:(d=e.i)?b=d:a.sa(Error("The request cannot be found in the database."));case 2:if(Tl(a,b,a.Fb)){e.s(4);break}a.sa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return v(e,a.K.ra(b.id,a.v),5);case 5:return e.return();case 4:b.skipRetry||(b=Ul(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return v(e,a.K.ra(b.id,a.v),8);case 8:a.ea(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Ul(a,b){if(!a.v)throw Kk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g;return w(function(h){switch(h.h){case 1:g=Vl(f);if(!(a.B&&a.B("nwl_consider_error_code")&&g||a.B&&!a.B("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Sa)){h.s(2);break}if(!a.J.fa){h.s(3);break}return v(h,a.J.fa(),3);case 3:if(a.J.H()){h.s(2);break}c(e,f);if(!a.B||!a.B("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){h.s(6);break}return v(h,a.K.jb(b.id,a.v,!1),6);case 6:return h.return();case 2:if(a.B&&a.B("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Sa)return h.return();a.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){h.s(8);break}return b.sendCount<a.Hb?v(h,a.K.jb(b.id,a.v),12):v(h,a.K.ra(b.id,a.v),8);case 12:a.V.N(function(){a.J.H()&&a.Ca()},a.Gb);
case 8:c(e,f),h.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return w(function(g){if(1==g.h)return void 0===(null===b||void 0===b?void 0:b.id)?g.s(2):v(g,a.K.ra(b.id,a.v),2);a.J.ca&&a.B&&a.B("vss_network_hint")&&a.J.ca(!0);d(e,f);g.h=0})};
return b}
function Tl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Ql(a){if(!a.v)throw Kk("retryQueuedRequests");a.K.wb("QUEUED",a.v).then(function(b){b&&!Tl(a,b,a.Db)?a.V.N(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):v(c,a.K.jb(b.id,a.v),2);Ql(a);c.h=0})}):a.J.H()&&a.Ca()})}
function Sl(a,b){a.Kb&&!a.J.H()?a.Kb(b):a.handleError(b)}
function Vl(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Wl(a,b){this.version=a;this.args=b}
;function Xl(a,b){this.topic=a;this.h=b}
Xl.prototype.toString=function(){return this.topic};var Yl=A("ytPubsub2Pubsub2Instance")||new J;J.prototype.subscribe=J.prototype.subscribe;J.prototype.unsubscribeByKey=J.prototype.wa;J.prototype.publish=J.prototype.ka;J.prototype.clear=J.prototype.clear;y("ytPubsub2Pubsub2Instance",Yl,void 0);var Zl=A("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",Zl,void 0);var $l=A("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",$l,void 0);var am=A("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",am,void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function bm(a,b){var c=cm();c&&c.publish.call(c,a.toString(),a,b)}
function dm(a){var b=em,c=cm();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Zl[d])try{if(f&&b instanceof Xl&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ja){var l=new h;h.ja=l.version}var n=h.ja}catch(L){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var t=n.construct;
var z=k.args,u=z.length;if(0<u){var D=Array(u);for(k=0;k<u;k++)D[k]=z[k];var E=D}else E=[];f=t.call(n,h,E)}catch(L){throw L.message="yt.pubsub2.Data.deserialize(): "+L.message,L;}}catch(L){throw L.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+L.message,L;}a.call(window,f)}catch(L){M(L)}},am[b.toString()]?A("yt.scheduler.instance")?Xh.N(g):Nh(g,0):g())});
Zl[d]=!0;$l[b.toString()]||($l[b.toString()]=[]);$l[b.toString()].push(d);return d}
function fm(){var a=gm,b=dm(function(c){a.apply(void 0,arguments);hm(b)});
return b}
function hm(a){var b=cm();b&&("number"===typeof a&&(a=[a]),db(a,function(c){b.unsubscribeByKey(c);delete Zl[c]}))}
function cm(){return A("ytPubsub2Pubsub2Instance")}
;function im(a,b){pl.call(this,a,b);this.options=b;xk(a)}
r(im,pl);function jm(a,b){var c;return function(){c||(c=new im(a,b));return c}}
im.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.kb?Jl:Il)(a,b,Object.assign({},c))};
im.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.kb?Nl:Kl)(this.name,a)};
function km(a,b){return jm(a,b)}
;var lm;
function mm(){if(lm)return lm();var a={};lm=km("LogsDatabaseV2",{za:(a.LogsRequestsStore={Xa:2},a),kb:!1,upgrade:function(b,c,d){c(2)&&Zk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return lm()}
;function nm(a){return rl(mm(),a)}
function om(a,b){var c,d,e,f;return w(function(g){if(1==g.h)return c={startTime:N(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,nm(b),2);if(3!=g.h)return d=g.i,e=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:B("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,al(d,e),3);f=g.i;c.zc=N();pm(c);return g.return(f)})}
function qm(a,b){var c,d,e,f,g,h,k;return w(function(l){if(1==l.h)return c={startTime:N(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(l,nm(b),2);if(3!=l.h)return d=l.i,e=B("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,N()],h=IDBKeyRange.bound(f,g),k=void 0,v(l,Yk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(n){return jl(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(t){t.getValue()&&(k=t.getValue(),"NEW"===a&&(k.status="QUEUED",
t.update(k)))})}),3);
c.zc=N();pm(c);return l.return(k)})}
function rm(a,b){var c;return w(function(d){if(1==d.h)return v(d,nm(b),2);c=d.i;return d.return(Yk(c,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Vk(f.h.put(g,void 0)).then(function(){return g})})}))})}
function sm(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.h)return v(e,nm(b),2);d=e.i;return e.return(Yk(d,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Vk(g.h.put(h,void 0)).then(function(){return h})):Ok.resolve(void 0)})}))})}
function tm(a,b){var c;return w(function(d){if(1==d.h)return v(d,nm(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function um(a){var b,c;return w(function(d){if(1==d.h)return v(d,nm(a),2);b=d.i;c=N()-2592E6;return v(d,Yk(b,["LogsRequestsStore"],{mode:"readwrite",O:!0},function(e){return gl(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function vm(){return w(function(a){return v(a,Ml(),0)})}
function pm(a){K("nwl_csi_killswitch")||.01>=Math.random()&&bm("nwl_transaction_latency_payload",a)}
;var wm={},xm=km("ServiceWorkerLogsDatabase",{za:(wm.SWHealthLog={Xa:1},wm),kb:!0,upgrade:function(a,b){b(1)&&Zk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function ym(a){return rl(xm(),a)}
function zm(a){var b,c;return w(function(d){if(1==d.h)return v(d,ym(a),2);b=d.i;c=N()-2592E6;return v(d,Yk(b,["SWHealthLog"],{mode:"readwrite",O:!0},function(e){return gl(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Am(a){var b;return w(function(c){if(1==c.h)return v(c,ym(a),2);b=c.i;return v(c,b.clear("SWHealthLog"),0)})}
;var Bm={},Cm=0;
function Dm(a){var b=void 0===b?"":b;if(a)if(b)Ci(a,void 0,"POST",b,void 0);else if(B("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Ci(a,void 0,"GET","",void 0);else{b:{try{var c=new ab({url:a});if(c.j&&c.i||c.l){var d=Xb(a.match(Wb)[5]||null),e;if(!(e=!d||!d.endsWith("/aclk"))){var f=a.search(cc);d:{for(b=0;0<=(b=a.indexOf("ri",b))&&b<f;){var g=a.charCodeAt(b-1);if(38==g||63==g){var h=a.charCodeAt(b+2);if(!h||61==h||38==h||35==h){var k=b;break d}}b+=3}k=-1}if(0>k)var l=null;else{var n=a.indexOf("&",k);if(0>
n||n>f)n=f;k+=3;l=decodeURIComponent(a.substr(k,n-k).replace(/\+/g," "))}e="1"!==l}var t=!e;break b}}catch(u){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(u){}z=!1}t=z?!0:!1}else t=!1;t||Em(a)}}
function Em(a){var b=new Image,c=""+Cm++;Bm[c]=b;b.onload=b.onerror=function(){delete Bm[c]};
b.src=a}
;function Fm(){this.h=new Map;this.i=!1}
function Gm(){if(!Fm.h){var a=A("yt.networkRequestMonitor.instance")||new Fm;y("yt.networkRequestMonitor.instance",a,void 0);Fm.h=a}return Fm.h}
Fm.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Fm.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
Fm.prototype.removeParams=function(a){return a.split("?")[0]};
Fm.prototype.removeParams=Fm.prototype.removeParams;Fm.prototype.isEndpointCFR=Fm.prototype.isEndpointCFR;Fm.prototype.requestComplete=Fm.prototype.requestComplete;Fm.getInstance=Gm;var Hm;function Im(){Hm||(Hm=new bk("yt.offline"));return Hm}
function Jm(a){if(K("offline_error_handling")){var b=Im().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Im().set("errors",b,2592E3,!0)}}
function Km(){if(K("offline_error_handling")){var a=Im().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new uk(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;M(c)}Im().set("errors",{},2592E3,!0)}}}
;var Lm=th("network_polling_interval",3E4);function O(){Ce.call(this);this.M=0;this.S=this.m=!1;this.l=this.bb();K("use_shared_nsm")?(Fe.h||(Fe.h=new Fe(Xh)),this.j=Fe.h):(Mm(this),Nm(this))}
r(O,Ce);function Om(){if(!O.h){var a=A("yt.networkStatusManager.instance")||new O;y("yt.networkStatusManager.instance",a,void 0);O.h=a}return O.h}
m=O.prototype;m.H=function(){var a;return K("use_shared_nsm")&&this.j?null===(a=this.j)||void 0===a?void 0:a.H():this.l};
m.ca=function(a){var b;K("use_shared_nsm")&&this.j?null===(b=this.j)||void 0===b?void 0:b.j=a:a!==this.l&&(this.l=a)};
m.ac=function(a){!K("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.M||Pm(this))};
m.bb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Sb=function(){this.S=!0};
m.W=function(a,b){return K("use_shared_nsm")&&this.j?this.j.W(a,b):Ce.prototype.W.call(this,a,b)};
function Nm(a){window.addEventListener("online",function(){return w(function(b){if(1==b.h)return v(b,a.fa(),2);a.S&&Km();b.h=0})})}
function Mm(a){window.addEventListener("offline",function(){return w(function(b){return v(b,a.fa(),0)})})}
function Pm(a){a.M=Rh(function(){return w(function(b){if(1==b.h)return a.l?a.bb()||!a.m?b.s(3):v(b,a.fa(),3):v(b,a.fa(),3);Pm(a);b.h=0})},Lm)}
m.fa=function(a){var b=this;if(K("use_shared_nsm")&&this.j){var c=Ge(this.j,a);c.then(function(d){K("use_cfr_monitor")&&Gm().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g;return w(function(h){switch(h.h){case 1:return e=window.AbortController?new window.AbortController:void 0,f=null===e||void 0===e?void 0:e.signal,g=!1,ua(h,2,3),e&&(b.A=Xh.N(function(){e.abort()},a||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:xa(h);K("use_cfr_monitor")&&Gm().requestComplete("generate_204",g);b.u=void 0;b.A&&Xh.U(b.A);g!==b.l&&(b.l=g,b.l&&b.m?De(b,"ytnetworkstatus-online"):b.m&&De(b,"ytnetworkstatus-offline"));d(g);ya(h);break;case 2:wa(h),g=!1,h.s(3)}})})};
O.prototype.sendNetworkCheckRequest=O.prototype.fa;O.prototype.listen=O.prototype.W;O.prototype.enableErrorFlushing=O.prototype.Sb;O.prototype.getWindowStatus=O.prototype.bb;O.prototype.monitorNetworkStatusChange=O.prototype.ac;O.prototype.networkStatusHint=O.prototype.ca;O.prototype.isNetworkAvailable=O.prototype.H;O.getInstance=Om;function Qm(a){a=void 0===a?{}:a;Ce.call(this);var b=this;this.l=this.M=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";K("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.j=Om();var c=A("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.tb);a.Pa&&!K("use_shared_nsm")&&(c=A("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=A("yt.networkStatusManager.instance.listen").bind(this.j))a.Ua?
(this.Ua=a.Ua,c(this.u,function(){Rm(b,"publicytnetworkstatus-online");K("use_shared_nsm")&&a.Pa&&Km()}),c(this.m,function(){Rm(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){De(b,"publicytnetworkstatus-online");
K("use_shared_nsm")&&a.Pa&&Km()}),c(this.m,function(){De(b,"publicytnetworkstatus-offline")}))}
r(Qm,Ce);Qm.prototype.H=function(){var a=A("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Qm.prototype.ca=function(a){var b=A("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Qm.prototype.fa=function(a){var b=this,c;return w(function(d){c=A("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return K("skip_network_check_if_cfr")&&Gm().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ca((null===(f=window.navigator)||void 0===f?void 0:f.onLine)||!0);e(b.H())})):c?d.return(c(a)):d.return(!0)})};
function Rm(a,b){a.Ua?a.l?(Xh.U(a.M),a.M=Xh.N(function(){a.A!==b&&(De(a,b),a.A=b,a.l=N())},a.Ua-(N()-a.l))):(De(a,b),a.A=b,a.l=N()):De(a,b)}
;var Sm;function Tm(){Ol.call(this,{K:{Pb:um,ra:tm,wb:qm,Zb:rm,jb:sm,set:om},J:Um(),handleError:M,sa:Dh,ea:Vm,now:N,Kb:Jm,V:Wh(),ib:"publicytnetworkstatus-online",hb:"publicytnetworkstatus-offline",Ma:!0,La:.1,Sa:th("potential_esf_error_limit",10),B:K,ya:!(vk()&&Wm())});this.j=new jd;K("networkless_immediately_drop_all_requests")&&vm();Nl("LogsDatabaseV2")}
r(Tm,Ol);function Xm(){var a=A("yt.networklessRequestController.instance");a||(a=new Tm,y("yt.networklessRequestController.instance",a,void 0),K("networkless_logging")&&Dl().then(function(b){a.v=b;Pl(a);a.j.resolve();a.Ma&&Math.random()<=a.La&&a.v&&zm(a.v);K("networkless_immediately_drop_sw_health_store")&&Ym(a)}));
return a}
Tm.prototype.writeThenSend=function(a,b){b||(b={});vk()||(this.h=!1);Ol.prototype.writeThenSend.call(this,a,b)};
Tm.prototype.sendThenWrite=function(a,b,c){b||(b={});vk()||(this.h=!1);Ol.prototype.sendThenWrite.call(this,a,b,c)};
Tm.prototype.sendAndWrite=function(a,b){b||(b={});vk()||(this.h=!1);Ol.prototype.sendAndWrite.call(this,a,b)};
Tm.prototype.awaitInitialization=function(){return this.j.promise};
function Ym(a){var b;w(function(c){if(!a.v)throw b=Kk("clearSWHealthLogsDb"),b;return c.return(Am(a.v).catch(function(d){a.handleError(d)}))})}
function Vm(a,b,c){K("use_cfr_monitor")&&Zm(a,b);var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(N());c&&0===Object.keys(b).length?Dm(a):zi(a,b)}
function Um(){Sm||(Sm=new Qm({Pa:!0,tb:!0}));return Sm}
function Zm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Gm().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Gm().requestComplete(a,!0);d(e,f)}}
function Wm(){return K("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==Yb(document.location.toString()):!0}
;var $m=!1,an=0,bn=0,cn,dn=x.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:$m,potentialEsfErrorCounter:bn};y("ytNetworklessLoggingInitializationOptions",dn,void 0);
function en(){var a;w(function(b){switch(b.h){case 1:return v(b,Dl(),2);case 2:a=b.i;if(!a||!vk()&&!K("nwl_init_require_datasync_id_killswitch")||!Wm()){b.s(0);break}$m=!0;dn.isNwlInitialized=$m;if(!K("use_new_nwl_initialization")){b.s(4);break}return v(b,Xm().awaitInitialization(),5);case 5:return fn().W("publicytnetworkstatus-online",gn),fn().W("publicytnetworkstatus-offline",hn),b.return();case 4:return v(b,Nl("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.s(7);break}return v(b,um(a),8);
case 8:return v(b,zm(a),7);case 7:jn();fn().H()&&gn();fn().W("publicytnetworkstatus-online",gn);fn().W("publicytnetworkstatus-offline",hn);if(!K("networkless_immediately_drop_sw_health_store")){b.s(10);break}return v(b,kn(),10);case 10:if(K("networkless_immediately_drop_all_requests"))return v(b,vm(),0);b.s(0)}})}
function ln(a,b){function c(d){var e=fn().H();if(!mn()||!d||e&&K("vss_networkless_bypass_write"))nn(a,b);else{var f={url:a,options:b,timestamp:N(),status:"NEW",sendCount:0};om(f,d).then(function(g){f.id=g;fn().H()&&on(f)}).catch(function(g){on(f);
fn().H()?M(g):Jm(g)})}}
b=void 0===b?{}:b;K("skip_is_supported_killswitch")?Dl().then(function(d){c(d)}):c(Cl())}
function pn(a,b){function c(d){if(mn()&&d){var e={url:a,options:b,timestamp:N(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){K("use_cfr_monitor")&&Gm().requestComplete(e.url,!0);void 0!==e.id?tm(e.id,d):f=!0;K("vss_network_hint")&&fn().ca(!0);g(k,l)};
if(K("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){Gm().requestComplete(e.url,!1);h(k,l)}}nn(e.url,e.options);
om(e,d).then(function(k){e.id=k;f&&tm(e.id,d)}).catch(function(k){fn().H()?M(k):Jm(k)})}else nn(a,b)}
b=void 0===b?{}:b;K("skip_is_supported_killswitch")?Dl().then(function(d){c(d)}):c(Cl())}
function gn(){var a=Cl();if(!a)throw Kk("throttleSend");an||(an=Xh.N(function(){var b;return w(function(c){if(1==c.h)return v(c,qm("NEW",a),2);if(3!=c.h)return b=c.i,b?v(c,on(b),3):(hn(),c.return());an&&(an=0,gn());c.h=0})},100))}
function hn(){Xh.U(an);an=0}
function on(a){var b,c,d;return w(function(e){switch(e.h){case 1:b=Cl();if(!b)throw c=Kk("immediateSend"),c;if(void 0===a.id){e.s(2);break}return v(e,rm(a.id,b),3);case 3:(d=e.i)?a=d:Dh(Error("The request cannot be found in the database."));case 2:if(qn(a,2592E6)){e.s(4);break}Dh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return v(e,tm(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=rn(a));var f=a,g,h;if(null===(h=null===(g=null===
f||void 0===f?void 0:f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(N());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return v(e,tm(a.id,b),8);case 8:nn(a.url,a.options,!!a.skipRetry),e.h=0}})}
function rn(a){var b=Cl();if(!b)throw Kk("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g;return w(function(h){switch(h.h){case 1:K("use_cfr_monitor")&&Gm().requestComplete(a.url,!1);g=Vl(f);if(!(K("nwl_consider_error_code")&&g||!K("nwl_consider_error_code")&&sn()<=th("potential_esf_error_limit",10))){h.s(2);break}if(K("skip_checking_network_on_cfr_failure")&&(!K("skip_checking_network_on_cfr_failure")||Gm().isEndpointCFR(a.url))){h.s(3);break}return v(h,fn().fa(),3);case 3:if(fn().H()){h.s(2);break}c(e,f);if(!K("nwl_consider_error_code")||void 0===
(null===a||void 0===a?void 0:a.id)){h.s(6);break}return v(h,sm(a.id,b,!1),6);case 6:return h.return();case 2:if(K("nwl_consider_error_code")&&!g&&sn()>th("potential_esf_error_limit",10))return h.return();A("ytNetworklessLoggingInitializationOptions")&&dn.potentialEsfErrorCounter++;bn++;if(void 0===(null===a||void 0===a?void 0:a.id)){h.s(8);break}return 1>a.sendCount?v(h,sm(a.id,b),12):v(h,tm(a.id,b),8);case 12:Xh.N(function(){fn().H()&&gn()},5E3);
case 8:c(e,f),h.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return w(function(g){if(1==g.h)return K("use_cfr_monitor")&&Gm().requestComplete(a.url,!0),void 0===(null===a||void 0===a?void 0:a.id)?g.s(2):v(g,tm(a.id,b),2);K("vss_network_hint")&&fn().ca(!0);d(e,f);g.h=0})};
return a}
function qn(a,b){a=a.timestamp;return N()-a>=b?!1:!0}
function jn(){var a=Cl();if(!a)throw Kk("retryQueuedRequests");qm("QUEUED",a).then(function(b){b&&!qn(b,12E4)?Xh.N(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.s(2):v(c,sm(b.id,a),2);jn();c.h=0})}):fn().H()&&gn()})}
function kn(){var a,b;return w(function(c){a=Cl();if(!a)throw b=Kk("clearSWHealthLogsDb"),b;return c.return(Am(a).catch(function(d){M(d)}))})}
function fn(){if(K("use_new_nwl"))return Um();cn||(cn=new Qm({Pa:!0,tb:!0}));return cn}
function nn(a,b,c){c&&0===Object.keys(b).length?Dm(a):zi(a,b)}
function mn(){return A("ytNetworklessLoggingInitializationOptions")?dn.isNwlInitialized:$m}
function sn(){return A("ytNetworklessLoggingInitializationOptions")?dn.potentialEsfErrorCounter:bn}
;function tn(a){var b=this;this.config_=null;a?this.config_=a:Tj()&&(this.config_=nj());Rh(function(){gk(b)},5E3)}
tn.prototype.isReady=function(){!this.config_&&Tj()&&(this.config_=nj());return!!this.config_};
function rj(a,b,c,d){function e(D){D=void 0===D?!1:D;var E;if(d.retry&&"www.youtube-nocookie.com"!=h&&(D||K("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(E=ek(b,c,l,k)),E)){var L=g.onSuccess,P=g.onFetchSuccess;g.onSuccess=function(S,W){fk(E);L(S,W)};
c.onFetchSuccess=function(S,W){fk(E);P(S,W)}}try{D&&d.retry&&!d.Bb.bypassNetworkless?(g.method="POST",d.Bb.writeThenSend?K("use_new_nwl")?Xm().writeThenSend(u,g):ln(u,g):K("use_new_nwl")?Xm().sendAndWrite(u,g):pn(u,g)):(g.method="POST",g.postParams||(g.postParams={}),zi(u,g))}catch(S){if("InvalidAccessError"==S.name)E&&(fk(E),E=0),Dh(Error("An extension is blocking network request."));
else throw S;}E&&Rh(function(){gk(a)},5E3)}
!B("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Dh(new uk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new uk("innertube xhrclient not ready",b,c,d);M(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(D,E){if(d.onSuccess)d.onSuccess(E)},
onFetchSuccess:function(D){if(d.onSuccess)d.onSuccess(D)},
onError:function(D,E){if(d.onError)d.onError(E)},
onFetchError:function(D){if(d.onError)d.onError(D)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Wb)&&(h=f);var k=a.config_.Yb||!1,l=Zj(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,t={alt:"json"},z=a.config_.Xb&&f;z=z&&f.startsWith("Bearer");z||(t.key=a.config_.innertubeApiKey);var u=ni(""+h+n,t||{},!0);K("use_new_nwl")&&Xm().h||!K("use_new_nwl")&&
mn()?Bl().then(function(D){e(D)}):e(!1)}
;function rk(a,b,c){c=void 0===c?{}:c;var d=tn;B("ytLoggingEventsDefaultDisabled",!1)&&tn==tn&&(d=null);yj(a,b,d,c)}
;var un=[{gb:function(a){return"Cannot read property '"+a.key+"'"},
Ra:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{gb:function(a){return"Cannot call '"+a.key+"'"},
Ra:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{gb:function(a){return a.key+" is not defined"},
Ra:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var wn={ia:[],ha:[{la:vn,weight:500}]};function vn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function xn(){this.ha=[];this.ia=[]}
var yn;function zn(){if(!yn){var a=yn=new xn;a.ia.length=0;a.ha.length=0;wn.ia&&a.ia.push.apply(a.ia,wn.ia);wn.ha&&a.ha.push.apply(a.ha,wn.ha)}return yn}
;var An=new J;function Bn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Cn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Cn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Cn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Cn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Dn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=En(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Bn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?En(e+".ve",f,g,h):0;d+=g;d+=En(e,a[e],b,c);if(500<d)break}}else c[b]=Fn(a),d+=c[b].length;else c[b]=Fn(a),d+=c[b].length;return d}
function En(a,b,c,d){c+="."+a;a=Fn(b);d[c]=a;return c.length+a.length}
function Fn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Gn=new Set,Hn=0,In=0,Jn=0,Kn=[],Ln=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function qk(a){Mn(a)}
function Nn(a){Mn(a,"WARNING")}
function Mn(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||B("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||B("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),K("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=Hn))){d=Kn;var g=ae(a);e=g.message||"Unknown Error";f=g.name||"UnknownError";var h=g.stack||a.i||"Not available";if(h.startsWith(f+": "+e)){var k=h.split("\n");k.shift();h=k.join("\n")}k=g.lineNumber||"Not available";g=g.fileName||"Not available";var l=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var n=0;n<a.args.length&&!(l=Dn(a.args[n],"params."+n,c,l),500<=l);n++);else if(a.hasOwnProperty("params")&&
a.params){var t=a.params;if("object"===typeof a.params)for(n in t){if(t[n]){var z="params."+n,u=Fn(t[n]);c[z]=u;l+=z.length+u.length;if(500<l)break}}else c.params=Fn(t)}if(d.length)for(n=0;n<d.length&&!(l=Dn(d[n],"params.context."+n,c,l),500<=l);n++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);n={message:e,name:f,lineNumber:k,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(n.lineNumber=n.lineNumber+":"+c);if("IGNORED"===a.level)a=
0;else a:{a=zn();c=q(a.ia);for(d=c.next();!d.done;d=c.next())if(d=d.value,n.message&&n.message.match(d.uo)){a=d.weight;break a}a=q(a.ha);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.la(n)){a=c.weight;break a}a=1}n.sampleWeight=a;a=q(un);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Ra[n.name])for(e=q(c.Ra[n.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=n.message.match(f.regexp)){n.params["params.error.original"]=d[0];e=f.groups;f={};for(k=0;k<e.length;k++)f[e[k]]=d[k+1],n.params["params.error."+
e[k]]=d[k+1];n.message=c.gb(f);break}n.params||(n.params={});a=zn();n.params["params.errorServiceSignature"]="msg="+a.ia.length+"&cb="+a.ha.length;n.params["params.serviceWorker"]="false";x.document&&x.document.querySelectorAll&&(n.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Ab("sample").constructor!==yb&&(n.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(n);if(0!==n.sampleWeight&&!Gn.has(n.message)){"ERROR"===
b?(An.ka("handleError",n),K("record_app_crashed_web")&&0===Jn&&1===n.sampleWeight&&(Jn++,a={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},K("report_client_error_with_app_crash_ks")||(a.systemHealth={crashData:{clientError:{logMessage:{message:n.message}}}}),rk("appCrashed",a)),In++):"WARNING"===b&&An.ka("handleWarning",n);if(K("kevlar_gel_error_routing")){a=b;b:{c=q(Ln);for(d=c.next();!d.done;d=c.next())if(ik(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:n.stack};n.fileName&&
(d.filename=n.fileName);c=n.lineNumber&&n.lineNumber.split?n.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:n.message,errorClassName:n.name,sampleWeight:n.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};
e={pageUrl:window.location.href,kvPairs:[]};B("FEXP_EXPERIMENTS")&&(e.experimentIds=B("FEXP_EXPERIMENTS"));f=B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);k=kh.EXPERIMENT_FLAGS;if((!k||!k.web_disable_gel_stp_ecatcher_killswitch)&&f)for(g=q(Object.keys(f)),k=g.next();!k.done;k=g.next())k=k.value,e.kvPairs.push({key:k,value:String(f[k])});if(f=n.params)for(g=q(Object.keys(f)),k=g.next();!k.done;k=g.next())k=k.value,e.kvPairs.push({key:"client."+k,value:String(f[k])});f=rh("SERVER_NAME");k=rh("SERVER_VERSION");
f&&k&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:k}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(rk("clientError",c),("ERROR"===a||K("errors_flush_gel_always_killswitch"))&&gj())}if(!K("suppress_error_204_logging")){a=n.params||{};b={urlParams:{a:"logerror",t:"jserror",type:n.name,msg:n.message.substr(0,250),line:n.lineNumber,level:b,"client.name":a.name},postParams:{url:B("PAGE_NAME",window.location.href),file:n.fileName},method:"POST"};a.version&&
(b["client.version"]=a.version);if(b.postParams){n.stack&&(b.postParams.stack=n.stack);c=q(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=B("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=q(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=B("SERVER_NAME",void 0);c=B("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}zi(B("ECATCHER_REPORT_HOST","")+"/error_204",b)}try{Gn.add(n.message)}catch(D){}Hn++}}}
function On(a){var b=Fa.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,ja(b))}
;function Pn(){this.register=new Map}
function Qn(a){a=q(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.xo("ABORTED")}
Pn.prototype.clear=function(){Qn(this);this.register.clear()};
var Rn=new Pn;var Sn=Date.now().toString();
function Tn(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Sn)for(a=1,b=0;b<Sn.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Sn.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Un,Vn=x.ytLoggingDocDocumentNonce_;Vn||(Vn=Tn(),Wa("ytLoggingDocDocumentNonce_",Vn));Un=Vn;var Wn={mg:0,md:1,ud:2,Oj:3,og:4,Kn:5,Ek:6,em:7,Gl:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function Xn(a){this.h=a}
function Yn(a){return new Xn({trackingParams:a})}
Xn.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Xn.prototype.getAsJspb=function(){var a=new Bg;void 0!==this.h.trackingParams?F(a,1,this.h.trackingParams):(void 0!==this.h.veType&&F(a,2,this.h.veType),void 0!==this.h.veCounter&&F(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&F(a,3,this.h.elementIndex));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();G(a,7,b)}void 0!==this.h.youtubeData&&G(a,8,this.h.jspbYoutubeData);return a};
Xn.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Xn.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Zn(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function $n(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ao(a){return B($n(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",ao,void 0);function bo(a){return(a=ao(void 0===a?0:a))?new Xn({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function co(){var a=B("csn-to-ctt-auth-info");a||(a={},qh("csn-to-ctt-auth-info",a));return a}
function eo(a){a=void 0===a?0:a;var b=B(Zn(a));if(!b&&!B("USE_CSN_FALLBACK",!0))return null;b||!K("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
y("yt_logging_screen.getCurrentCsn",eo,void 0);function fo(a,b,c){var d=co();(c=eo(c))&&delete d[c];b&&(d[a]=b)}
function go(a){return co()[a]}
y("yt_logging_screen.getCttAuthInfo",go,void 0);function ho(a,b,c,d){c=void 0===c?0:c;if(a!==B(Zn(c))||b!==B($n(c)))fo(a,d,c),qh(Zn(c),a),qh($n(c),b),b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:Un,clientScreenNonce:a};K("use_default_heartbeat_client")?rk("foregroundHeartbeatScreenAssociated",e):yj("foregroundHeartbeatScreenAssociated",e,tn)}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
y("yt_logging_screen.setCurrentScreen",ho,void 0);var io=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",io,void 0);function jo(a){fh(io,arguments)}
;var ko={ld:3611,Ac:27686,Bc:85013,Cc:23462,Ec:42016,Fc:62407,Gc:26926,Dc:43781,Hc:51236,Ic:79148,Jc:50160,Kc:77504,Wc:87907,Xc:18630,Yc:54445,Zc:80935,bd:105675,cd:37521,dd:47786,ed:98349,fd:123695,gd:6827,hd:29434,jd:7282,kd:124448,od:32276,nd:76278,pd:93911,qd:106531,rd:27259,sd:27262,td:27263,vd:21759,wd:27107,xd:62936,yd:49568,zd:38408,Ad:80637,Bd:68727,Cd:68728,Dd:80353,Ed:80356,Fd:74610,Gd:45707,Hd:83962,Id:83970,Jd:46713,Kd:89711,Ld:74612,Md:93265,Nd:74611,Od:131380,Qd:128979,Rd:139311,Sd:128978,
Pd:131391,Td:105350,Vd:139312,Wd:134800,Ud:131392,Yd:113533,Zd:93252,ae:99357,ce:94521,de:114252,ee:113532,ge:94522,be:94583,he:88E3,ie:139580,je:93253,ke:93254,le:94387,me:94388,ne:93255,oe:97424,Xd:72502,pe:110111,qe:76019,se:117092,te:117093,re:89431,ue:110466,we:77240,xe:60508,ye:137401,ze:137402,Ae:137046,Be:73393,Ce:113534,De:92098,Ee:131381,Fe:84517,Ge:83759,He:80357,Ie:86113,Je:72598,Ke:72733,Le:107349,Me:124275,Ne:118203,Oe:133275,Pe:133274,Qe:133272,Re:133273,Se:133276,Te:144507,Ue:143247,
Ve:143248,We:143249,Xe:143250,Ye:143251,Ze:144401,bf:117431,af:133797,cf:128572,df:133405,ef:117429,ff:117430,gf:117432,hf:120080,jf:117259,kf:121692,lf:132972,mf:133051,nf:133658,pf:132971,qf:97615,sf:143359,rf:143356,uf:143361,tf:143358,wf:143360,vf:143357,xf:142303,yf:143353,zf:143354,Af:144479,Bf:143355,Cf:31402,Ef:133624,Ff:133623,Gf:133622,Df:133621,Hf:84774,If:95117,Jf:98930,Kf:98931,Lf:98932,Mf:43347,Nf:129889,Of:45474,Pf:100352,Qf:84758,Rf:98443,Sf:117985,Tf:74613,Uf:74614,Vf:64502,Wf:136032,
Xf:74615,Yf:74616,Zf:122224,ag:74617,cg:77820,dg:74618,eg:93278,fg:93274,gg:93275,hg:93276,ig:22110,jg:29433,kg:133798,lg:132295,ng:120541,pg:82047,qg:113550,rg:75836,sg:75837,tg:42352,ug:84512,vg:76065,wg:75989,xg:16623,yg:32594,zg:27240,Ag:32633,Bg:74858,Dg:3945,Cg:16989,Eg:45520,Fg:25488,Gg:25492,Hg:25494,Ig:55760,Jg:14057,Kg:18451,Lg:57204,Mg:57203,Ng:17897,Og:57205,Pg:18198,Qg:17898,Rg:17909,Sg:43980,Tg:46220,Ug:11721,Vg:49954,Wg:96369,Xg:3854,Yg:56251,Zg:25624,rh:16906,sh:99999,th:68172,uh:27068,
vh:47973,wh:72773,xh:26970,yh:26971,zh:96805,Ah:17752,Bh:73233,Ch:109512,Dh:22256,Eh:14115,Fh:22696,Gh:89278,Hh:89277,Ih:109513,Jh:43278,Kh:43459,Lh:43464,Mh:89279,Nh:43717,Oh:55764,Ph:22255,Qh:89281,Rh:40963,Sh:43277,Th:43442,Uh:91824,Vh:120137,Wh:96367,Xh:36850,Yh:72694,Zh:37414,ai:36851,ci:124863,bi:121343,di:73491,fi:54473,gi:43375,hi:46674,ii:143815,ji:139095,ki:144402,li:32473,mi:72901,ni:72906,oi:50947,ri:50612,si:50613,ti:50942,vi:84938,wi:84943,xi:84939,yi:84941,zi:84944,Ai:84940,Bi:84942,
Ci:35585,Di:51926,Ei:79983,Fi:63238,Gi:18921,Hi:63241,Ii:57893,Ji:41182,Ki:135732,Li:33424,Mi:22207,Ni:42993,Oi:36229,Pi:22206,Qi:22205,Ri:18993,Si:19001,Ti:18990,Ui:18991,Vi:18997,Wi:18725,Xi:19003,Yi:36874,Zi:44763,aj:33427,bj:67793,cj:22182,dj:37091,ej:34650,fj:50617,gj:47261,hj:22287,ij:25144,jj:97917,kj:62397,lj:125598,mj:137935,nj:36961,oj:108035,pj:27426,qj:27857,rj:27846,sj:27854,tj:69692,uj:61411,vj:39299,wj:38696,xj:62520,yj:36382,zj:108701,Aj:50663,Bj:36387,Cj:14908,Dj:37533,Ej:105443,
Fj:61635,Gj:62274,Hj:133818,Ij:65702,Jj:65703,Kj:65701,Lj:76256,Mj:37671,Nj:49953,Pj:36216,Qj:28237,Rj:39553,Sj:29222,Tj:26107,Uj:38050,Vj:26108,Xj:120745,Wj:26109,Yj:26110,Zj:66881,ak:28236,bk:14586,ck:57929,dk:74723,ek:44098,fk:44099,ik:23528,jk:61699,gk:134104,hk:134103,kk:59149,lk:101951,mk:97346,nk:118051,pk:95102,qk:64882,rk:119505,sk:63595,tk:63349,uk:95101,vk:75240,wk:27039,xk:68823,yk:21537,zk:83464,Ak:75707,Bk:83113,Ck:101952,Dk:101953,Fk:79610,Gk:125755,Hk:24402,Ik:24400,Jk:32925,Kk:57173,
Lk:122502,Mk:145268,Nk:138480,Ok:64423,Pk:64424,Qk:33986,Rk:100828,Sk:129089,Tk:21409,Xk:135155,Yk:135156,Zk:135157,al:135158,bl:135159,dl:135160,fl:135161,il:135162,jl:135163,kl:135164,ll:135165,ml:135166,Uk:11070,Vk:11074,Wk:17880,nl:14001,pl:30709,ql:30707,rl:30711,sl:30710,ul:30708,ol:26984,vl:63648,wl:63649,xl:51879,yl:111059,zl:5754,Al:20445,Cl:130975,Bl:130976,Dl:110386,El:113746,Fl:66557,Hl:17310,Il:28631,Jl:21589,Kl:68012,Ll:60480,Ml:138664,Nl:141121,Ol:31571,Pl:141978,Ql:76980,Rl:41577,
Sl:45469,Tl:38669,Ul:13768,Vl:13777,Wl:141842,Xl:62985,Yl:4724,Zl:59369,am:43927,bm:43928,cm:12924,dm:100355,gm:56219,hm:27669,im:10337,fm:47896,jm:122629,lm:139723,km:139722,mm:121258,nm:107598,om:127991,pm:96639,qm:107536,rm:130169,sm:96661,tm:96658,um:116646,vm:121122,wm:96660,xm:127738,ym:127083,zm:104443,Am:96659,Bm:106442,Cm:134840,Dm:63667,Em:63668,Fm:63669,Gm:130686,Hm:78314,Im:55761,Jm:127098,Km:134841,Lm:96368,Mm:67374,Nm:48992,Om:49956,Pm:31961,Qm:26388,Rm:23811,Sm:5E4,Tm:126250,Um:96370,
Vm:47355,Wm:47356,Xm:37935,Ym:45521,Zm:21760,an:83769,bn:49977,cn:49974,dn:93497,en:93498,fn:34325,gn:140759,hn:115803,jn:123707,kn:100081,ln:35309,mn:68314,nn:25602,pn:100339,qn:143516,rn:59018,sn:18248,tn:50625,un:9729,vn:37168,wn:37169,xn:21667,yn:16749,zn:18635,An:39305,Bn:18046,Cn:53969,Dn:8213,En:93926,Fn:102852,Gn:110099,Hn:22678,In:69076,Jn:137575,Ln:139224,Mn:100856,Nn:17736,On:3832,Pn:55759,Qn:64031,Wn:93044,Xn:93045,Yn:34388,Zn:17657,ao:17655,bo:39579,co:39578,eo:77448,fo:8196,ho:11357,
jo:69877,ko:8197,lo:82039};function lo(){var a=sb(mo),b;return Mf(new Ff(function(c,d){a.onSuccess=function(e){ti(e)?c(new no(e)):d(new oo("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new oo("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new oo("Request timed out","net.timeout",e))};
b=zi("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Nf&&b.abort();
return Kf(c)})}
function oo(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(oo,$a);function no(a){this.xhr=a}
;function po(){this.i=0;this.h=null}
po.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Ef(a)?a:qo(a)):2===this.i&&b?(a=b.call(c,this.h),Ef(a)?a:ro(a)):this};
po.prototype.getValue=function(){return this.h};
po.prototype.$goog_Thenable=!0;function ro(a){var b=new po;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function qo(a){var b=new po;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function so(){if(Ud())return!0;var a=B("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||hk&&ik("applewebkit")&&!ik("version")&&(!ik("safari")||ik("gsa/"))||kc&&ik("version/")?!0:(a=Ej("CONSENT"))?a.startsWith("YES+"):!0}
;function to(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof uo;this.isTimeout=a instanceof oo&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Nf}
r(to,$a);to.prototype.name="BiscottiError";function uo(){$a.call(this,"Biscotti ID is missing from server")}
r(uo,$a);uo.prototype.name="BiscottiMissingError";var mo={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},vo=null;function di(){if(K("disable_biscotti_fetch_entirely_for_all_web_clients"))return Kf(Error("Biscotti id fetching has been disabled entirely."));if(!so())return Kf(Error("User has not consented - not fetching biscotti id."));if("1"==qb())return Kf(Error("Biscotti ID is not available in private embed mode"));vo||(vo=Mf(lo().then(wo),function(a){return xo(2,a)}));
return vo}
function wo(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new uo;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new uo;a=a.id;ei(a);vo=qo(a);yo(18E5,2);return a}
function xo(a,b){b=new to(b);ei("");vo=ro(b);0<a&&yo(12E4,a-1);throw b;}
function yo(a,b){Nh(function(){Mf(lo().then(wo,function(c){return xo(b,c)}),Ka)},a)}
function zo(){try{var a=A("yt.ads.biscotti.getId_");return a?a():di()}catch(b){return Kf(b)}}
;function Ao(a){if("1"!=qb()){a&&ci();try{zo().then(function(){},function(){}),Nh(Ao,18E5)}catch(b){M(b)}}}
;function Bo(){this.xc=!0}
function Co(a){var b={},c=Wd([]);c&&(b.Authorization=c,c=a=null===a||void 0===a?void 0:a.sessionIndex,void 0===c&&(c=Number(B("SESSION_INDEX",0)),c=isNaN(c)?0:c),b["X-Goog-AuthUser"]=c,"INNERTUBE_HOST_OVERRIDE"in kh||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in kh&&(b["X-Goog-PageId"]=B("DELEGATED_SESSION_ID")));return b}
;var Do={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Eo=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),Fo=["/fashion","/feed/fashion_destination","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ"];function Go(){var a=void 0===a?window.location.href:a;if(K("kevlar_disable_theme_param"))return null;var b=Xb(a.match(Wb)[5]||null);if(Ho(b))return"USER_INTERFACE_THEME_DARK";try{var c=mi(a).theme;return Eo.get(c)||null}catch(d){}return null}
function Ho(a){var b=Fo.map(function(c){return c.toLowerCase()});
return!K("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1}
;function Io(){this.h={};if(this.i=Fj()){var a=Ej("CONSISTENCY");a&&Jo(this,{encryptedTokenJarContents:a})}}
Io.prototype.handleResponse=function(a,b){var c,d,e;b=(null===(d=null===(c=b.ba.context)||void 0===c?void 0:c.request)||void 0===d?void 0:d.consistencyTokenJars)||[];(a=null===(e=a.responseContext)||void 0===e?void 0:e.consistencyTokenJar)&&this.replace(b,a)};
Io.prototype.replace=function(a,b){a=q(a);for(var c=a.next();!c.done;c=a.next())delete this.h[c.value.encryptedTokenJarContents];Jo(this,b)};
function Jo(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Dj("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Ko=window.location.hostname.split(".").slice(-2).join(".");function Lo(){var a=B("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===B("INNERTUBE_CLIENT_NAME")&&(this.h=Mo(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var No;Lo.getInstance=function(){No=A("yt.clientLocationService.instance");No||(No=new Lo,y("yt.clientLocationService.instance",No,void 0));return No};
Lo.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=1E7*this.i.coords.latitude,a.client.locationInfo.longitudeE7=1E7*this.i.coords.longitude,a.client.locationInfo.horizontalAccuracyMeters=this.i.coords.accuracy,a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Lo.prototype.handleResponse=function(a){var b;a=null===(b=a.responseContext)||void 0===b?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===B("INNERTUBE_CLIENT_NAME")?(this.h=Mo(this))&&this.h.set("yt-location-playability-token",a,15552E3):Dj("YT_CL",JSON.stringify({loctok:a}),15552E3,Ko,!0))};
function Mo(a){return void 0===a.h?new bk("yt-client-location"):a.h}
Lo.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!K("web_enable_browser_geolocation_api")&&!K("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;K("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Lo.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null===a||void 0===a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null===a||void 0===a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null===a||void 0===a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Oo(a,b){var c,d;if((null===(c=a.signalServiceEndpoint)||void 0===c?0:c.signal)&&b.Ba){var e=b.Ba[a.signalServiceEndpoint.signal];if(e)return e()}if((null===(d=a.continuationCommand)||void 0===d?0:d.request)&&b.Qb&&(e=b.Qb[a.continuationCommand.request]))return e();for(var f in a)if(b.pb[f]&&(a=b.pb[f]))return a()}
;var Po=Symbol("injectionDeps");function Qo(){this.name="NETWORK_SLI_TOKEN"}
Qo.prototype.toString=function(){return"InjectionToken("+this.name+")"};function Ro(a){return function(){return new a}}
;var So={},To=(So.WEB_UNPLUGGED="^unplugged/",So.WEB_UNPLUGGED_ONBOARDING="^unplugged/",So.WEB_UNPLUGGED_OPS="^unplugged/",So.WEB_UNPLUGGED_PUBLIC="^unplugged/",So.WEB_CREATOR="^creator/",So.WEB_KIDS="^kids/",So.WEB_EXPERIMENTS="^experiments/",So.WEB_MUSIC="^music/",So.WEB_REMIX="^music/",So.WEB_MUSIC_EMBEDDED_PLAYER="^music/",So.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",So);
function Uo(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=To[b];if(c){var d=new RegExp(c),e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(To).forEach(function(g){var h=q(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=q(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Vo(a,b){return{method:void 0===b?"POST":b,mode:oi(a)?"same-origin":"cors",credentials:oi(a)?"same-origin":"include"}}
;function Wo(){}
Wo.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Do:c;var d;var e=a.clickTrackingParams,f=this.l,g=!1;g=void 0===g?!1:g;f=void 0===f?!1:f;var h=B("INNERTUBE_CONTEXT");if(h){h=tb(h);K("web_no_tracking_params_in_shell_killswitch")||delete h.clickTracking;var k,l;h.client||(h.client={});var n=h.client;"MWEB"===n.clientName&&(n.clientFormFactor=B("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");n.screenWidthPoints=window.innerWidth;n.screenHeightPoints=window.innerHeight;n.screenPixelDensity=
Math.round(window.devicePixelRatio||1);n.screenDensityFloat=window.devicePixelRatio||1;n.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var t=void 0===t?!1:t;Hj.getInstance();var z="USER_INTERFACE_THEME_LIGHT";Kj(165)?z="USER_INTERFACE_THEME_DARK":Kj(174)?z="USER_INTERFACE_THEME_LIGHT":!K("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(z="USER_INTERFACE_THEME_DARK");t=t?z:Go()||
z;n.userInterfaceTheme=t;if(!g){if(t=Rj())n.connectionType=t;K("web_log_effective_connection_type")&&(t=Sj())&&(h.client.effectiveConnectionType=t)}K("web_log_memory_total_kbytes")&&(null===(k=x.navigator)||void 0===k?0:k.deviceMemory)&&(k=null===(l=x.navigator)||void 0===l?void 0:l.deviceMemory,h.client.memoryTotalKbytes=""+1E6*k);l=mi(x.location.href);!K("web_populate_internal_geo_killswitch")&&l.internalcountrycode&&(n.internalGeo=l.internalcountrycode);"MWEB"===n.clientName||"WEB"===n.clientName?
(n.mainAppWebInfo={graftUrl:x.location.href},K("kevlar_woffle")&&Aj.h&&(n.mainAppWebInfo.pwaInstallabilityStatus=Aj.h.h?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),n.mainAppWebInfo.webDisplayMode=Bj(),n.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===n.clientName&&(!K("web_lr_app_quality_killswitch")&&(l=B("LIVING_ROOM_APP_QUALITY"))&&(n.tvAppInfo=Object.assign(n.tvAppInfo||{},{appQuality:l})),l=B("LIVING_ROOM_CERTIFICATION_SCOPE"))&&
(n.tvAppInfo=Object.assign(n.tvAppInfo||{},{certificationScope:l}));if(!K("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var u=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ha){}u=void 0}u&&(n.timeZone=u)}(u=uh())?n.experimentsToken=u:delete n.experimentsToken;u=vh();Io.h||(Io.h=new Io);n=Io.h.h;l=[];k=0;for(var D in n)l[k++]=n[D];h.request=Object.assign(Object.assign({},h.request),{internalExperimentFlags:u,consistencyTokenJars:l});!K("web_prequest_context_killswitch")&&
(D=B("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(h.request.externalPrequestContext=D);u=Hj.getInstance();D=Kj(58);u=u.get("gsml","");h.user=Object.assign({},h.user);D&&(h.user.enableSafetyMode=D);u&&(h.user.lockedSafetyMode=!0);K("warm_op_csn_cleanup")?f&&(g=eo())&&(h.clientScreenNonce=g):!g&&(g=eo())&&(h.clientScreenNonce=g);e&&(h.clickTracking={clickTrackingParams:e});if(e=A("yt.mdx.remote.remoteClient_"))h.remoteClient=e;K("web_enable_client_location_service")&&Lo.getInstance().setLocationOnInnerTubeContext(h);
try{var E=pi(void 0),L=E.bid;delete E.bid;h.adSignalsInfo={params:[],bid:L};for(var P=q(Object.entries(E)),S=P.next();!S.done;S=P.next()){var W=q(S.value),aa=W.next().value,Dd=W.next().value;E=aa;L=Dd;null===(d=h.adSignalsInfo.params)||void 0===d?void 0:d.push({key:E,value:""+L})}}catch(ha){Mn(ha)}d=h}else Mn(Error("Error: No InnerTubeContext shell provided in ytconfig.")),d={};d={context:d};if(P=this.h(a)){this.i(d,P,b);var fa,Y;b="/youtubei/v1/"+Uo(this.j());(a=null===(Y=null===(fa=a.commandMetadata)||
void 0===fa?void 0:fa.webCommandMetadata)||void 0===Y?void 0:Y.apiUrl)&&(b=a);fa=b;(Y=B("INNERTUBE_HOST_OVERRIDE"))&&(fa=String(Y)+String(Zb(fa)));Y={};Y.key=B("INNERTUBE_API_KEY");K("json_condensed_response")&&(Y.prettyPrint="false");fa=ni(fa,Y||{},!1);fa={input:fa,ta:Vo(fa),ba:d,config:Object.assign({},void 0)};fa.config.Ia?fa.config.Ia.identity=c:fa.config.Ia={identity:c};return fa}Mn(new uk("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(Wo.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Xo(){}
r(Xo,Wo);Xo.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",ta:Vo("/getDatasyncIdsEndpoint","GET"),ba:{}}};
Xo.prototype.j=function(){return[]};
Xo.prototype.h=function(){};
Xo.prototype.i=function(){};var Yo={},Zo=(Yo.GET_DATASYNC_IDS=Ro(Xo),Yo);function $o(a){var b=Fa.apply(1,arguments);if(!ap(a)||b.some(function(e){return!ap(e)}))throw Error("Only objects may be merged.");
var c=a;b=q(b);for(var d=b.next();!d.done;d=b.next())bp(c,d.value);return c}
function bp(a,b){for(var c in b)if(ap(b[c])){if(c in a&&!ap(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});bp(a[c],b[c])}else if(cp(b[c])){if(c in a&&!cp(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);dp(a[c],b[c])}else a[c]=b[c];return a}
function dp(a,b){b=q(b);for(var c=b.next();!c.done;c=b.next())c=c.value,ap(c)?a.push(bp({},c)):cp(c)?a.push(dp([],c)):a.push(c);return a}
function ap(a){return"object"===typeof a&&!Array.isArray(a)}
function cp(a){return"object"===typeof a&&Array.isArray(a)}
;function ep(a,b){Wl.call(this,1,arguments);this.timer=b}
r(ep,Wl);var fp=new Xl("aft-recorded",ep);var gp=window;function hp(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Q=gp.performance||gp.mozPerformance||gp.msPerformance||gp.webkitPerformance||new hp;var ip=!1,jp={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"},
kp=Ua(Q.clearResourceTimings||Q.webkitClearResourceTimings||Q.mozClearResourceTimings||Q.msClearResourceTimings||Q.oClearResourceTimings||Ka,Q);function lp(a){var b=mp(a);if(b.aft)return b.aft;a=B((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function np(){var a;if(K("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===Q||void 0===Q?void 0:Q.getEntriesByType)||void 0===a?void 0:a.call(Q,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=op(e.requestStart),e.responseEnd=op(e.responseEnd),e.redirectStart=op(e.redirectStart),e.redirectEnd=op(e.redirectEnd),e.domainLookupEnd=op(e.domainLookupEnd),e.connectStart=op(e.connectStart),
e.connectEnd=op(e.connectEnd),e.responseStart=op(e.responseStart),e.secureConnectionStart=op(e.secureConnectionStart),e.domainLookupStart=op(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Q.timing}else a=Q.timing;return a}
function pp(){return K("csi_use_time_origin")&&Q.timeOrigin?Math.floor(Q.timeOrigin):Q.timing.navigationStart}
function op(a){return Math.round(pp()+a)}
function qp(a){y("ytglobal.timing"+(a||"")+"ready_",!0,void 0)}
function rp(a){return A("ytcsi."+(a||"")+"data_")||sp(a)}
function tp(a){a=rp(a);a.info||(a.info={});return a.info}
function mp(a){a=rp(a);a.tick||(a.tick={});return a.tick}
function up(a){a=rp(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function vp(a){a=up(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function wp(a){var b=rp(a).nonce;b||(b=Tn(),rp(a).nonce=b);return b}
function sp(a){var b={tick:{},info:{}};y("ytcsi."+(a||"")+"data_",b,void 0);return b}
function xp(a){var b=mp(a||""),c=lp(a);c&&!ip&&(bm(fp,new ep(Math.round(c-b._start),a)),ip=!0)}
function yp(a,b){for(var c=q(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!yp(a[d],b[d]))return!1;return!0}
;function zp(){if(Q.getEntriesByType){var a=Q.getEntriesByType("paint");if(a=hb(a,function(b){return"first-paint"===b.name}))return op(a.startTime)}a=Q.timing;
return a.cc?Math.max(0,a.cc):0}
;function Ap(){var a=A("ytcsi.debug");a||(a=[],y("ytcsi.debug",a,void 0),y("ytcsi.reference",{},void 0));return a}
function Bp(a){a=a||"";var b=Cp();if(b[a])return b[a];var c=Ap(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
function Cp(){var a=A("ytcsi.reference");if(a)return a;Ap();return A("ytcsi.reference")}
;var R={},Dp=(R.auto_search="LATENCY_ACTION_AUTO_SEARCH",R.ad_to_ad="LATENCY_ACTION_AD_TO_AD",R.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",R["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",R.app_startup="LATENCY_ACTION_APP_STARTUP",R["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",R["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",R["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",R.browse="LATENCY_ACTION_BROWSE",R.cast_splash="LATENCY_ACTION_CAST_SPLASH",
R.channels="LATENCY_ACTION_CHANNELS",R.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",R["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",R["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",R["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",R["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",R["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",R["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",R["channel.music"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",R["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",R["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",R["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",R["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",R.chips="LATENCY_ACTION_CHIPS",R["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",R["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",R.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
R.embed="LATENCY_ACTION_EMBED",R.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",R.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",R.explore="LATENCY_ACTION_EXPLORE",R.home="LATENCY_ACTION_HOME",R.library="LATENCY_ACTION_LIBRARY",R.live="LATENCY_ACTION_LIVE",R.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",R.onboarding="LATENCY_ACTION_ONBOARDING",R.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",R.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",R.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",R.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",R["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",R["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",R.prebuffer="LATENCY_ACTION_PREBUFFER",R.prefetch="LATENCY_ACTION_PREFETCH",R.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",R.profile_switcher="LATENCY_ACTION_LOGIN",R.reel_watch="LATENCY_ACTION_REEL_WATCH",R.results="LATENCY_ACTION_RESULTS",
R.search_ui="LATENCY_ACTION_SEARCH_UI",R.search_suggest="LATENCY_ACTION_SUGGEST",R.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",R.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",R.seek="LATENCY_ACTION_PLAYER_SEEK",R.settings="LATENCY_ACTION_SETTINGS",R.tenx="LATENCY_ACTION_TENX",R.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",R.watch="LATENCY_ACTION_WATCH",R.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",R["watch,watch7"]="LATENCY_ACTION_WATCH",R["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
R["watch,watch7ad"]="LATENCY_ACTION_WATCH",R["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",R.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",R.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",R["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",R["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",R["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",R["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",R["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",R["video.live_settings"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",R["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",R["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",R["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",R.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",R.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",R.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",R),T={},Ep=(T.ad_allowed="adTypesAllowed",T.yt_abt="adBreakType",
T.ad_cpn="adClientPlaybackNonce",T.ad_docid="adVideoId",T.yt_ad_an="adNetworks",T.ad_at="adType",T.aida="appInstallDataAgeMs",T.browse_id="browseId",T.p="httpProtocol",T.t="transportProtocol",T.cs="commandSource",T.cpn="clientPlaybackNonce",T.ccs="creatorInfo.creatorCanaryState",T.ctop="creatorInfo.topEntityType",T.csn="clientScreenNonce",T.docid="videoId",T.GetHome_rid="requestIds",T.GetSearch_rid="requestIds",T.GetPlayer_rid="requestIds",T.GetWatchNext_rid="requestIds",T.GetBrowse_rid="requestIds",
T.GetLibrary_rid="requestIds",T.is_continuation="isContinuation",T.is_nav="isNavigation",T.b_p="kabukiInfo.browseParams",T.is_prefetch="kabukiInfo.isPrefetch",T.is_secondary_nav="kabukiInfo.isSecondaryNav",T.nav_type="kabukiInfo.navigationType",T.prev_browse_id="kabukiInfo.prevBrowseId",T.query_source="kabukiInfo.querySource",T.voz_type="kabukiInfo.vozType",T.yt_lt="loadType",T.mver="creatorInfo.measurementVersion",T.yt_ad="isMonetized",T.nr="webInfo.navigationReason",T.nrsu="navigationRequestedSameUrl",
T.pnt="performanceNavigationTiming",T.prt="playbackRequiresTap",T.plt="playerInfo.playbackType",T.pis="playerInfo.playerInitializedState",T.paused="playerInfo.isPausedOnLoad",T.yt_pt="playerType",T.fmt="playerInfo.itag",T.yt_pl="watchInfo.isPlaylist",T.yt_pre="playerInfo.preloadType",T.yt_ad_pr="prerollAllowed",T.pa="previousAction",T.yt_red="isRedSubscriber",T.rce="mwebInfo.responseContentEncoding",T.rc="resourceInfo.resourceCache",T.scrh="screenHeight",T.scrw="screenWidth",T.st="serverTimeMs",T.ssdm=
"shellStartupDurationMs",T.br_trs="tvInfo.bedrockTriggerState",T.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",T.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",T.label="tvInfo.label",T.is_mdx="tvInfo.isMdx",T.preloaded="tvInfo.isPreloaded",T.aac_type="tvInfo.authAccessCredentialType",T.upg_player_vis="playerInfo.visibilityState",T.query="unpluggedInfo.query",T.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",T.yt_vst="videoStreamType",T.vph="viewportHeight",T.vpw="viewportWidth",
T.yt_vis="isVisible",T.rcl="mwebInfo.responseContentLength",T.GetSettings_rid="requestIds",T.GetTrending_rid="requestIds",T.GetMusicSearchSuggestions_rid="requestIds",T.REQUEST_ID="requestIds",T),Fp="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
Gp={},Hp=(Gp.ccs="CANARY_STATE_",Gp.mver="MEASUREMENT_VERSION_",Gp.pis="PLAYER_INITIALIZED_STATE_",Gp.yt_pt="LATENCY_PLAYER_",Gp.pa="LATENCY_ACTION_",Gp.ctop="TOP_ENTITY_TYPE_",Gp.yt_vst="VIDEO_STREAM_TYPE_",Gp),Ip="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Jp(a){return Dp[a]||"LATENCY_ACTION_UNKNOWN"}
function Kp(a,b,c){c=up(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Ep){c=Ep[a];0<=cb(Fp,c)&&(b=!!b);a in Hp&&"string"===typeof b&&(b=Hp[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return $o({},d)}0<=cb(Ip,a)||Nn(new uk("Unknown label logged with GEL CSI",a))}
;var U={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_SHOPPING_IN_APP:124,
LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,
LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,
LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CAST:120,
LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,
LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,
LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,
LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,
LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,
LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,
LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_UNKNOWN:0};U[U.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";U[U.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";
U[U.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";U[U.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";U[U.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";U[U.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";U[U.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";U[U.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";U[U.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";
U[U.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";U[U.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";U[U.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";U[U.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";U[U.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";U[U.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";U[U.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";
U[U.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";U[U.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";U[U.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";U[U.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";U[U.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";U[U.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";
U[U.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";U[U.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";U[U.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";U[U.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";U[U.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";U[U.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";
U[U.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";U[U.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";U[U.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";U[U.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";U[U.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";U[U.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";U[U.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";
U[U.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";U[U.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";U[U.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";U[U.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";U[U.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";U[U.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";
U[U.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";U[U.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";U[U.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";U[U.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";U[U.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";U[U.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";U[U.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";
U[U.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";U[U.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";U[U.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";U[U.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";U[U.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";U[U.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";U[U.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";U[U.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";
U[U.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";U[U.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";U[U.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";U[U.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";U[U.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";U[U.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";
U[U.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";U[U.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";U[U.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";U[U.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";U[U.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";U[U.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";U[U.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
U[U.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";U[U.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";U[U.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";U[U.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";U[U.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";U[U.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
U[U.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";U[U.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";U[U.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";U[U.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";U[U.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";U[U.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";U[U.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";U[U.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
U[U.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";U[U.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";U[U.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";U[U.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";U[U.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";U[U.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";
U[U.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";U[U.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";U[U.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";U[U.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";U[U.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";U[U.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
U[U.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";U[U.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";U[U.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";U[U.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";U[U.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";U[U.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";
U[U.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";U[U.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";U[U.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";U[U.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";U[U.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";U[U.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
U[U.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";U[U.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";U[U.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";U[U.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";U[U.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";U[U.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
U[U.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";U[U.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";U[U.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";U[U.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";U[U.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";U[U.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";
U[U.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";U[U.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";U[U.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";U[U.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";U[U.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";U[U.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";U[U.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";U[U.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";
U[U.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";U[U.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";U[U.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";U[U.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";U[U.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";U[U.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";U[U.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";
U[U.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";U[U.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";U[U.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";U[U.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";U[U.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";U[U.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";U[U.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";U[U.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";
U[U.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";U[U.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";U[U.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";U[U.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";U[U.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";U[U.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";U[U.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";U[U.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";U[U.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";
U[U.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";U[U.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Lp={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Lp[Lp.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Lp[Lp.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Lp[Lp.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var V={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};V[V.CONN_INVALID]="CONN_INVALID";V[V.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";V[V.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";V[V.CONN_WIFI_METERED]="CONN_WIFI_METERED";V[V.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";V[V.CONN_DISCO]="CONN_DISCO";
V[V.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";V[V.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";V[V.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";V[V.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";V[V.CONN_WIFI]="CONN_WIFI";V[V.CONN_NONE]="CONN_NONE";V[V.CONN_UNKNOWN]="CONN_UNKNOWN";V[V.CONN_DEFAULT]="CONN_DEFAULT";
var X={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};X[X.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
X[X.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";X[X.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";X[X.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";X[X.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";X[X.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";X[X.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
X[X.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";X[X.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";X[X.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";X[X.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";X[X.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";X[X.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";X[X.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";X[X.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
X[X.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";X[X.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";X[X.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";X[X.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";X[X.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";X[X.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";X[X.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";X[X.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
X[X.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";X[X.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";X[X.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";X[X.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Mp={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Mp[Mp.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Mp[Mp.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Mp[Mp.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Mp[Mp.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Mp[Mp.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Mp[Mp.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Mp[Mp.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Mp[Mp.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Np={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Np[Np.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Np[Np.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Np[Np.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Np[Np.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Op={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Op[Op.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Op[Op.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Pp={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Pp[Pp.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Pp[Pp.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Pp[Pp.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Pp[Pp.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Pp[Pp.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Pp[Pp.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Qp={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Qp[Qp.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Qp[Qp.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Qp[Qp.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Qp[Qp.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Rp={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Rp[Rp.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Rp[Rp.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Rp[Rp.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Sp={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Sp[Sp.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Sp[Sp.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Sp[Sp.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Tp=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",Tp,void 0);function Up(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||N());F(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=bi();d=new Vg;F(d,1,c.timestamp||!isFinite(e)?-1:e);if(K("log_sequence_info_on_gel_web")&&c.X){e=c.X;var f=zj(e),g=new Ug;F(g,2,f);F(g,1,e);G(d,3,g);c.ub&&delete Tp[c.X]}G(a,33,d);(c.mc?kj:fj)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,xa:c.xa},b)}
;function Vp(a,b){b=void 0===b?{}:b;var c=!1;B("ytLoggingEventsDefaultDisabled",!1)&&tn===tn&&(c=!0);Up(a,c?null:tn,b)}
;function Wp(a,b,c){var d=new Wg;Sc(d,72,a);c?Up(d,c,b):Vp(d,b)}
function Xp(a,b,c){var d=new Wg;Sc(d,73,a);c?Up(d,c,b):Vp(d,b)}
function Yp(a,b,c){var d=new Wg;Sc(d,78,a);c?Up(d,c,b):Vp(d,b)}
function Zp(a,b,c){var d=new Wg;Sc(d,208,a);c?Up(d,c,b):Vp(d,b)}
function $p(a,b,c){var d=new Wg;Sc(d,156,a);c?Up(d,c,b):Vp(d,b)}
function aq(a,b,c){var d=new Wg;Sc(d,215,a);c?Up(d,c,b):Vp(d,b)}
;var bq=x.ytLoggingLatencyUsageStats_||{};y("ytLoggingLatencyUsageStats_",bq,void 0);function cq(){this.h=0}
function dq(){cq.h||(cq.h=new cq);return cq.h}
cq.prototype.tick=function(a,b,c,d){eq(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},K("web_csi_via_jspb")?(d=new Tg,F(d,1,a),F(d,2,b),a=new Wg,Sc(a,5,d),Vp(a,c)):rk("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
cq.prototype.info=function(a,b,c){var d=Object.keys(a).join("");eq(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,rk("latencyActionInfo",a,{cttAuthInfo:c}))};
cq.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));eq(this,"info_"+d+"_"+b)||(F(a,2,b),b={cttAuthInfo:c},c=new Wg,Sc(c,7,a),Vp(c,b))};
cq.prototype.span=function(a,b,c){var d=Object.keys(a).join("");eq(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,rk("latencyActionSpan",a,{cttAuthInfo:c}))};
function eq(a,b){bq[b]=bq[b]||{count:0};var c=bq[b];c.count++;c.time=N();a.h||(a.h=Rh(function(){var d=N(),e;for(e in bq)bq[e]&&6E4<d-bq[e].time&&delete bq[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new uk("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Nn(c)),!0):!1}
;function fq(){var a=["ol"];Bp("").info.actionType="embed";a&&qh("TIMING_AFT_KEYS",a);qh("TIMING_ACTION","embed");a=B("TIMING_INFO",{});if(K("web_csi_via_jspb")){var b=new Pg;a=q(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=q(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Sg;F(e,1,c);F(e,2,String(d));Rg(b,e);break;case "GetGuide_rid":e=new Sg;F(e,1,c);F(e,2,String(d));Rg(b,e);break;case "GetHome_rid":e=new Sg;F(e,1,c);F(e,2,String(d));Rg(b,e);
break;case "GetPlayer_rid":e=new Sg;F(e,1,c);F(e,2,String(d));Rg(b,e);break;case "GetSearch_rid":e=new Sg;F(e,1,c);F(e,2,String(d));Rg(b,e);break;case "GetSettings_rid":e=new Sg;F(e,1,c);F(e,2,String(d));Rg(b,e);break;case "GetTrending_rid":e=new Sg;F(e,1,c);F(e,2,String(d));Rg(b,e);break;case "GetWatchNext_rid":e=new Sg;F(e,1,c);F(e,2,String(d));Rg(b,e);break;case "yt_red":F(b,14,!!d);break;case "yt_ad":F(b,9,!!d)}}gq(b)}else for(b in a)a.hasOwnProperty(b)&&hq(b,a[b]);b={isNavigation:!0,actionType:Jp(rh("TIMING_ACTION"))};
if(a=rh("PREVIOUS_ACTION"))b.previousAction=Jp(a);if(a=B("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=B("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=eo())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=iq();if(1===a||-1===a)b.isVisible=!0;a=tp();b.loadType="cold";c=np();if(d=pp())Z("srt",c.responseStart),1!==a.prerender&&Z("_start",d,void 0);a=zp();0<a&&Z("fpt",a);a=np();a.isPerformanceNavigationTiming&&jq({performanceNavigationTiming:!0},void 0);Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,
void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=pp()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));Q&&
"getEntriesByType"in Q&&kq();a=[];if(document.querySelector&&Q&&Q.getEntriesByName)for(var f in jp)jp.hasOwnProperty(f)&&(c=jp[f],lq(f,c)&&a.push(c));if(0<a.length)for(b.resourceInfo=[],f=q(a),a=f.next();!a.done;a=f.next())b.resourceInfo.push({resourceCache:a.value});jq(b);f=tp();b=vp();if("cold"===f.yt_lt||"cold"===b.loadType){a=mp();c=up();c=c.gelTicks?c.gelTicks:c.gelTicks={};for(var g in a)g in c||Z(g,a[g]);g={};a=!1;c=q(Object.keys(f));for(d=c.next();!d.done;d=c.next())d=d.value,(d=Kp(d,f[d]))&&
!yp(vp(void 0),d)&&($o(b,d),$o(g,d),a=!0);a&&jq(g)}qp();g=rh("TIMING_ACTION");A("ytglobal.timingready_")&&g&&"_start"in mp(void 0)&&lp()&&xp()}
function hq(a,b,c){null!==b&&(tp(c)[a]=b,(a=Kp(a,b,c))&&jq(a,c))}
function jq(a,b){if(K("web_csi_via_jspb")){for(var c=new Pg,d=Object.keys(a),e=Object.values(a),f=0;f<d.length;f++)switch(d[f]){case "actionType":try{F(c,1,U[e[f]])}catch(l){M(Error("Codegen laipb translator failed to set actionType"))}break;case "clientActionNonce":try{F(c,2,e[f])}catch(l){M(Error("Codegen laipb translator failed to set clientActionNonce"))}break;case "clientScreenNonce":try{F(c,4,e[f])}catch(l){M(Error("Codegen laipb translator failed to set clientScreenNonce"))}break;case "actionVisualElement":try{G(c,
88,e[f])}catch(l){M(Error("Codegen laipb translator failed to set actionVisualElement"))}break;case "loadType":try{F(c,3,e[f])}catch(l){M(Error("Codegen laipb translator failed to set loadType"))}break;case "isFirstInstall":try{F(c,55,e[f])}catch(l){M(Error("Codegen laipb translator failed to set isFirstInstall"))}break;case "networkType":try{F(c,5,Lp[e[f]])}catch(l){M(Error("Codegen laipb translator failed to set networkType"))}break;case "connectionType":try{F(c,26,V[e[f]])}catch(l){M(Error("Codegen laipb translator failed to set connectionType"))}break;
case "detailedConnectionType":try{F(c,27,X[e[f]])}catch(l){M(Error("Codegen laipb translator failed to set detailedConnectionType"))}break;case "isVisible":try{F(c,6,e[f])}catch(l){M(Error("Codegen laipb translator failed to set isVisible"))}break;case "playerType":try{F(c,7,Mp[e[f]])}catch(l){M(Error("Codegen laipb translator failed to set playerType"))}break;case "clientPlaybackNonce":try{F(c,8,e[f])}catch(l){M(Error("Codegen laipb translator failed to set clientPlaybackNonce"))}break;case "adClientPlaybackNonce":try{F(c,
28,e[f])}catch(l){M(Error("Codegen laipb translator failed to set adClientPlaybackNonce"))}break;case "previousCpn":try{F(c,77,e[f])}catch(l){M(Error("Codegen laipb translator failed to set previousCpn"))}break;case "targetCpn":try{F(c,76,e[f])}catch(l){M(Error("Codegen laipb translator failed to set targetCpn"))}break;case "isMonetized":try{F(c,9,e[f])}catch(l){M(Error("Codegen laipb translator failed to set isMonetized"))}break;case "isPrerollAllowed":try{F(c,16,e[f])}catch(l){M(Error("Codegen laipb translator failed to set isPrerollAllowed"))}break;
case "isPrerollShown":try{F(c,17,e[f])}catch(l){M(Error("Codegen laipb translator failed to set isPrerollShown"))}break;case "adType":try{F(c,12,e[f])}catch(l){M(Error("Codegen laipb translator failed to set adType"))}break;case "adTypesAllowed":try{F(c,36,e[f])}catch(l){M(Error("Codegen laipb translator failed to set adTypesAllowed"))}break;case "adNetworks":try{F(c,37,e[f])}catch(l){M(Error("Codegen laipb translator failed to set adNetworks"))}break;case "previousAction":try{F(c,13,U[e[f]])}catch(l){M(Error("Codegen laipb translator failed to set previousAction"))}break;
case "isRedSubscriber":try{F(c,14,e[f])}catch(l){M(Error("Codegen laipb translator failed to set isRedSubscriber"))}break;case "serverTimeMs":try{F(c,15,e[f])}catch(l){M(Error("Codegen laipb translator failed to set serverTimeMs"))}break;case "spinnerInfo":try{G(c,18,e[f])}catch(l){M(Error("Codegen laipb translator failed to set spinnerInfo"))}break;case "videoId":try{c.setVideoId(e[f])}catch(l){M(Error("Codegen laipb translator failed to set videoId"))}break;case "adVideoId":try{F(c,20,e[f])}catch(l){M(Error("Codegen laipb translator failed to set adVideoId"))}break;
case "targetVideoId":try{F(c,78,e[f])}catch(l){M(Error("Codegen laipb translator failed to set targetVideoId"))}break;case "adBreakType":try{F(c,21,Np[e[f]])}catch(l){M(Error("Codegen laipb translator failed to set adBreakType"))}break;case "isNavigation":try{F(c,25,e[f])}catch(l){M(Error("Codegen laipb translator failed to set isNavigation"))}break;case "viewportHeight":try{F(c,29,e[f])}catch(l){M(Error("Codegen laipb translator failed to set viewportHeight"))}break;case "viewportWidth":try{F(c,
30,e[f])}catch(l){M(Error("Codegen laipb translator failed to set viewportWidth"))}break;case "screenHeight":try{F(c,84,e[f])}catch(l){M(Error("Codegen laipb translator failed to set screenHeight"))}break;case "screenWidth":try{F(c,85,e[f])}catch(l){M(Error("Codegen laipb translator failed to set screenWidth"))}break;case "browseId":try{F(c,31,e[f])}catch(l){M(Error("Codegen laipb translator failed to set browseId"))}break;case "isCacheHit":try{F(c,32,e[f])}catch(l){M(Error("Codegen laipb translator failed to set isCacheHit"))}break;
case "httpProtocol":try{F(c,33,e[f])}catch(l){M(Error("Codegen laipb translator failed to set httpProtocol"))}break;case "transportProtocol":try{F(c,34,e[f])}catch(l){M(Error("Codegen laipb translator failed to set transportProtocol"))}break;case "searchQuery":try{F(c,41,e[f])}catch(l){M(Error("Codegen laipb translator failed to set searchQuery"))}break;case "isContinuation":try{F(c,42,e[f])}catch(l){M(Error("Codegen laipb translator failed to set isContinuation"))}break;case "availableProcessors":try{F(c,
43,e[f])}catch(l){M(Error("Codegen laipb translator failed to set availableProcessors"))}break;case "sdk":try{F(c,44,e[f])}catch(l){M(Error("Codegen laipb translator failed to set sdk"))}break;case "isLocalStream":try{F(c,45,e[f])}catch(l){M(Error("Codegen laipb translator failed to set isLocalStream"))}break;case "navigationRequestedSameUrl":try{F(c,64,e[f])}catch(l){M(Error("Codegen laipb translator failed to set navigationRequestedSameUrl"))}break;case "shellStartupDurationMs":try{F(c,70,e[f])}catch(l){M(Error("Codegen laipb translator failed to set shellStartupDurationMs"))}break;
case "appInstallDataAgeMs":try{F(c,73,e[f])}catch(l){M(Error("Codegen laipb translator failed to set appInstallDataAgeMs"))}break;case "latencyActionError":try{F(c,71,Op[e[f]])}catch(l){M(Error("Codegen laipb translator failed to set latencyActionError"))}break;case "actionStep":try{F(c,79,e[f])}catch(l){M(Error("Codegen laipb translator failed to set actionStep"))}break;case "jsHeapSizeLimit":try{F(c,80,e[f])}catch(l){M(Error("Codegen laipb translator failed to set jsHeapSizeLimit"))}break;case "totalJsHeapSize":try{F(c,
81,e[f])}catch(l){M(Error("Codegen laipb translator failed to set totalJsHeapSize"))}break;case "usedJsHeapSize":try{F(c,82,e[f])}catch(l){M(Error("Codegen laipb translator failed to set usedJsHeapSize"))}break;case "resourceInfo":try{Uc(c,83,Og,e[f])}catch(l){M(Error("Codegen laipb translator failed to set resourceInfo"))}break;case "sourceVideoDurationMs":try{F(c,90,e[f])}catch(l){M(Error("Codegen laipb translator failed to set sourceVideoDurationMs"))}break;case "playerInfo":try{G(c,22,e[f])}catch(l){M(Error("Codegen laipb translator failed to set playerInfo"))}break;
case "commentInfo":try{G(c,23,e[f])}catch(l){M(Error("Codegen laipb translator failed to set commentInfo"))}break;case "mdxInfo":try{G(c,24,e[f])}catch(l){M(Error("Codegen laipb translator failed to set mdxInfo"))}break;case "watchInfo":try{G(c,35,e[f])}catch(l){M(Error("Codegen laipb translator failed to set watchInfo"))}break;case "adPrebufferedTimeSecs":try{F(c,39,e[f])}catch(l){M(Error("Codegen laipb translator failed to set adPrebufferedTimeSecs"))}break;case "thumbnailLoadInfo":try{G(c,40,e[f])}catch(l){M(Error("Codegen laipb translator failed to set thumbnailLoadInfo"))}break;
case "creatorInfo":try{G(c,46,e[f])}catch(l){M(Error("Codegen laipb translator failed to set creatorInfo"))}break;case "unpluggedInfo":try{G(c,50,e[f])}catch(l){M(Error("Codegen laipb translator failed to set unpluggedInfo"))}break;case "isLivestream":try{F(c,47,e[f])}catch(l){M(Error("Codegen laipb translator failed to set isLivestream"))}break;case "liveStreamMode":try{F(c,91,Pp[e[f]])}catch(l){M(Error("Codegen laipb translator failed to set liveStreamMode"))}break;case "adCpn2":try{F(c,48,e[f])}catch(l){M(Error("Codegen laipb translator failed to set adCpn2"))}break;
case "adDaiDriftMillis":try{F(c,49,e[f])}catch(l){M(Error("Codegen laipb translator failed to set adDaiDriftMillis"))}break;case "videoStreamType":try{F(c,53,Qp[e[f]])}catch(l){M(Error("Codegen laipb translator failed to set videoStreamType"))}break;case "reelInfo":try{G(c,54,e[f])}catch(l){M(Error("Codegen laipb translator failed to set reelInfo"))}break;case "subscriptionsFeedInfo":try{G(c,72,e[f])}catch(l){M(Error("Codegen laipb translator failed to set subscriptionsFeedInfo"))}break;case "playbackRequiresTap":try{F(c,
56,e[f])}catch(l){M(Error("Codegen laipb translator failed to set playbackRequiresTap"))}break;case "requestIds":try{Rg(c,e[f])}catch(l){M(Error("Codegen laipb translator failed to set requestIds"))}break;case "mediaBrowserActionInfo":try{G(c,58,e[f])}catch(l){M(Error("Codegen laipb translator failed to set mediaBrowserActionInfo"))}break;case "performanceNavigationTiming":try{F(c,67,e[f])}catch(l){M(Error("Codegen laipb translator failed to set performanceNavigationTiming"))}break;case "musicLoadActionInfo":try{G(c,
69,e[f])}catch(l){M(Error("Codegen laipb translator failed to set musicLoadActionInfo"))}break;case "transactionType":try{F(c,74,Rp[e[f]])}catch(l){M(Error("Codegen laipb translator failed to set transactionType"))}break;case "shoppingInfo":try{G(c,75,e[f])}catch(l){M(Error("Codegen laipb translator failed to set shoppingInfo"))}break;case "prefetchInfo":try{G(c,86,e[f])}catch(l){M(Error("Codegen laipb translator failed to set prefetchInfo"))}break;case "accelerationSession":try{G(c,87,e[f])}catch(l){M(Error("Codegen laipb translator failed to set accelerationSession"))}break;
case "playerRotationType":try{F(c,101,Sp[e[f]])}catch(l){M(Error("Codegen laipb translator failed to set playerRotationType"))}break;case "webInfo":try{G(c,38,e[f])}catch(l){M(Error("Codegen laipb translator failed to set webInfo"))}break;case "tvInfo":try{G(c,51,e[f])}catch(l){M(Error("Codegen laipb translator failed to set tvInfo"))}break;case "kabukiInfo":try{G(c,52,e[f])}catch(l){M(Error("Codegen laipb translator failed to set kabukiInfo"))}break;case "mwebInfo":try{G(c,59,e[f])}catch(l){M(Error("Codegen laipb translator failed to set mwebInfo"))}break;
case "musicInfo":try{G(c,65,e[f])}catch(l){M(Error("Codegen laipb translator failed to set musicInfo"))}break;case "allowedPreroll":try{F(c,10,e[f])}catch(l){M(Error("Codegen laipb translator failed to set allowedPreroll"))}break;case "shownPreroll":try{F(c,11,e[f])}catch(l){M(Error("Codegen laipb translator failed to set shownPreroll"))}break;case "getHomeRequestId":try{F(c,57,e[f])}catch(l){M(Error("Codegen laipb translator failed to set getHomeRequestId"))}break;case "getSearchRequestId":try{F(c,
60,e[f])}catch(l){M(Error("Codegen laipb translator failed to set getSearchRequestId"))}break;case "getPlayerRequestId":try{F(c,61,e[f])}catch(l){M(Error("Codegen laipb translator failed to set getPlayerRequestId"))}break;case "getWatchNextRequestId":try{F(c,62,e[f])}catch(l){M(Error("Codegen laipb translator failed to set getWatchNextRequestId"))}break;case "getBrowseRequestId":try{F(c,63,e[f])}catch(l){M(Error("Codegen laipb translator failed to set getBrowseRequestId"))}break;case "getLibraryRequestId":try{F(c,
66,e[f])}catch(l){M(Error("Codegen laipb translator failed to set getLibraryRequestId"))}}gq(c,b)}else{var g=Bp(b||"");$o(g.info,a);$o(vp(b),a);var h=wp(b),k=rp(b).cttAuthInfo;dq().info(a,h,k)}}
function gq(a,b){var c=up(b);c.jspbInfos||(c.jspbInfos=[]);c.jspbInfos.push(a);Bp(b||"").jspbInfo.push(a);c=wp(b);b=rp(b).cttAuthInfo;dq().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;Q.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Q.mark(d))}Bp(c||"").tick[a]=b||N();d=up(c);d.gelTicks&&(d.gelTicks[a]=!0);d=mp(c);var e=b||N();d[a]=e;e=wp(c);var f=rp(c).cttAuthInfo;if("_start"===a){var g=dq();eq(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},K("web_csi_via_jspb")?(f=new Ng,F(f,1,e),e=new Wg,Sc(e,6,f),Vp(e,b)):rk("latencyActionBaselined",{clientActionNonce:e},b))}else dq().tick(a,e,b,f);xp(c);return d[a]}
function mq(){var a=wp(void 0);requestAnimationFrame(function(){setTimeout(function(){a===wp(void 0)&&Z("ol",void 0,void 0)},0)})}
function iq(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=zh+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function lq(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Tb()&&a.setAttribute("nonce",Tb());return c?(a=Q.getEntriesByName(c))&&a[0]&&(a=a[0],c=pp(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function kq(){var a=window.location.protocol,b=Q.getEntriesByType("resource");b=eb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",op(b.startTime)),Z("wffe",op(b.responseEnd)))}
var nq=window;nq.ytcsi&&(nq.ytcsi.info=hq,nq.ytcsi.tick=Z);var oq=["consistency","mss","client_location","entities","store"];function pq(a,b,c,d){this.o=a;this.J=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Ba||(a.Ba={});a.Ba=Object.assign(Object.assign({},Zo),a.Ba)}
function qq(a,b,c,d){if(void 0!==pq.h){if(d=pq.h,a=[a!==d.o,b!==d.J,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new uk("InnerTubeTransportService is already initialized",a);
}else pq.h=new pq(a,b,c,d)}
function rq(){var a=pq.h,b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Do:c;var d=Oo(b,a.o);if(!d)return Kf(new uk("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new Ff(function(f){var g,h,k;return w(function(l){if(1==l.h)return h="cors"===(null===(g=e.ta)||void 0===g?void 0:g.mode)?"cors":void 0,v(l,sq(a,e.config,h),2);k=l.i;f(tq(a,e,k));l.h=0})}):Kf(new uk("Error: Failed to build request for command.",b))}
function tq(a,b,c){var d,e,f,g,h,k,l,n,t,z,u,D,E,L,P,S,W;return w(function(aa){switch(aa.h){case 1:aa.s(2);break;case 3:if((l=aa.i)&&!l.isExpired())return aa.return(Promise.resolve(l.h()));case 2:if((n=null===(d=b.config)||void 0===d?void 0:d.yo)&&a.h.has(n)&&K("web_memoize_inflight_requests"))return aa.return(a.h.get(n));if(null===(e=null===b||void 0===b?void 0:b.ba)||void 0===e?0:e.context)for(t=q([]),z=t.next();!z.done;z=t.next())u=z.value,u.wo(b.ba.context);if(null===(f=a.i)||void 0===f?0:f.l(b.input,
b.ba))return aa.return(a.i.j(b.input,b.ba));D=JSON.stringify(b.ba);b.ta=Object.assign(Object.assign({},b.ta),{headers:c});E=Object.assign({},b.ta);"POST"===b.ta.method&&(E=Object.assign(Object.assign({},E),{body:D}));(null===(g=b.config)||void 0===g?0:g.ic)&&Z(b.config.ic);L=a.J.fetch(b.input,E,b.config);n&&a.h.set(n,L);return v(aa,L,4);case 4:P=aa.i;n&&a.h.has(n)&&a.h.delete(n);(null===(h=b.config)||void 0===h?0:h.jc)&&Z(b.config.jc);if(P||null===(k=a.i)||void 0===k||!k.h(b.input,b.ba)){aa.s(5);
break}return v(aa,a.i.i(b.input,b.ba),6);case 6:P=aa.i;case 5:if(P&&a.j)for(S=q(oq),z=S.next();!z.done;z=S.next())W=z.value,a.j[W]&&a.j[W].handleResponse(P,b);return aa.return(P)}})}
function sq(a,b,c){return w(function(d){if(a.l.xc){var e=d.return,f,g=null===(f=null===b||void 0===b?void 0:b.Ia)||void 0===f?void 0:f.sessionIndex;f=Co({sessionIndex:g});f=Object.assign(Object.assign({},uq(c)),f);d=e.call(d,f)}else d=d.return(vq(b,c));return d})}
function vq(a,b){var c,d,e;return w(function(f){if(1==f.h){d=null===(c=null===a||void 0===a?void 0:a.Ia)||void 0===c?void 0:c.sessionIndex;var g=Co({sessionIndex:d});if(!(g instanceof Ff)){var h=new Ff(Ka);Gf(h,2,g);g=h}return v(f,g,2)}e=f.i;return f.return(Promise.resolve(Object.assign(Object.assign({},uq(b)),e)))})}
function uq(a){var b={"Content-Type":"application/json"};K("enable_web_eom_visitor_data")&&B("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=B("EOM_VISITOR_DATA"):B("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=B("VISITOR_DATA"));"cors"!==a&&((a=B("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=B("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=B("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),K("forward_domain_admin_state_on_embeds")&&(a=
B("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var wq=["share/get_web_player_share_panel"],xq=["feedback"],yq=["notification/modify_channel_preference"],zq=["browse/edit_playlist"],Aq=["subscription/subscribe"],Bq=["subscription/unsubscribe"];function Cq(){}
r(Cq,Wo);Cq.prototype.j=function(){return Aq};
Cq.prototype.h=function(a){return a.subscribeEndpoint};
Cq.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(Cq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Dq(){}
r(Dq,Wo);Dq.prototype.j=function(){return Bq};
Dq.prototype.h=function(a){return a.unsubscribeEndpoint};
Dq.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(Dq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Eq(){}
r(Eq,Wo);Eq.prototype.j=function(){return xq};
Eq.prototype.h=function(a){return a.feedbackEndpoint};
Eq.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Eq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Fq(){}
r(Fq,Wo);Fq.prototype.j=function(){return yq};
Fq.prototype.h=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
Fq.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Gq(){}
r(Gq,Wo);Gq.prototype.j=function(){return zq};
Gq.prototype.h=function(a){return a.playlistEditEndpoint};
Gq.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Hq(){}
r(Hq,Wo);Hq.prototype.j=function(){return wq};
Hq.prototype.h=function(a){return a.webPlayerShareEntityServiceEndpoint};
Hq.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Iq=new Qo;function Jq(){}
Jq.prototype.fetch=function(a,b){var c=this,d,e,f;return w(function(g){if(1==g.h){d=new window.Request(a,b);if(K("web_fetch_promise_cleanup_killswitch"))return g.return(Promise.resolve(fetch(d).then(function(h){return c.handleResponse(h)}).catch(function(h){Nn(h)})));
ua(g,3);return v(g,fetch(d),5)}if(3!=g.h)return e=g.i,g.return(c.handleResponse(e));f=wa(g);Nn(f);return g.return(void 0)})};
Jq.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok||(b=b.then(function(c){Nn(new uk("Error: API fetch failed",a.status,a.url,c));return Object.assign(Object.assign({},c),{errorMetadata:{status:a.status}})}));
return b};
Jq[Po]=[new function(a){this.key=a}(Iq)];var Kq;function Lq(a){Wl.call(this,1,arguments);this.csn=a}
r(Lq,Wl);var em=new Xl("screen-created",Lq),Mq=[],Oq=Nq,Pq=0;function Qq(a,b,c,d,e,f,g){function h(){Nn(new uk("newScreen() parent element does not have a VE - rootVe",b))}
var k=Oq();f=new Xn({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,X:k};if(K("il_via_jspb")){var l=new Dg;l.Y(k);Eg(l,f.getAsJspb());c&&c.visualElement?(f=new Fg,c.clientScreenNonce&&F(f,2,c.clientScreenNonce),Gg(f,c.visualElement.getAsJspb()),g&&F(f,4,Cg[g]),G(l,5,f)):c&&h();d&&F(l,3,d);$p(l,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):
c&&h(),d&&(f.cloneCsn=d),a?yj("screenCreated",f,a,e):rk("screenCreated",f,e);bm(em,new Lq(k));return k}
function Rq(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:go(b),
X:b};d=q(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(ob(g)||!g.trackingParams&&!g.veType)&&Nn(Error("Child VE logged with no data"));if(K("il_via_jspb")){var h=new Hg;h.Y(b);Jg(h,c.getAsJspb());fb(e,function(k){k=k.getAsJspb();Uc(h,3,Bg,k)});
"UNDEFINED_CSN"==b?Sq("visualElementAttached",h,f):aq(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:fb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?Sq("visualElementAttached",c,f):a?yj("visualElementAttached",c,a,f):rk("visualElementAttached",c,f)}
function Nq(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return zc(b,3)}
function Sq(a,b,c){Mq.push({payloadName:a,payload:b,options:c});Pq||(Pq=fm())}
function gm(a){if(Mq){for(var b=q(Mq),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(K("il_via_jspb"))switch(c.payload.Y(a.csn),c.payloadName){case "screenCreated":$p(c.payload,c.options);break;case "visualElementAttached":aq(c.payload,c.options);break;case "visualElementShown":Wp(c.payload,c.options);break;case "visualElementHidden":Xp(c.payload,c.options);break;case "visualElementGestured":Yp(c.payload,c.options);break;case "visualElementStateChanged":Zp(c.payload,c.options);break;default:Nn(new uk("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,yj(c.payloadName,c.payload,null,c.options);Mq.length=0}Pq=0}
;function Tq(){this.i=new Set;this.h=new Set;this.j=new Map}
Tq.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
La(Tq);function Uq(){this.o=[];this.D=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.u=new Map}
function Vq(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=eo(c),h=bo(c);g&&h&&((null===(e=null===d||void 0===d?void 0:d.response)||void 0===e?0:e.trackingParams)&&Rq(a.client,g,h,[Yn(d.response.trackingParams)]),(null===(f=null===d||void 0===d?void 0:d.playerResponse)||void 0===f?0:f.trackingParams)&&Rq(a.client,g,h,[Yn(d.playerResponse.trackingParams)]))})}
function Wq(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.o.push([b,c]);else{var e=eo(d);c=c||bo(d);e&&c&&Rq(a.client,e,c,[b])}}
Uq.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=eo(void 0===c?0:c)){a=this.client;var e=Yn(d);var f="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";d={cttAuthInfo:go(c),X:c};if(K("il_via_jspb")){var g=new Kg;g.Y(c);e=e.getAsJspb();G(g,2,e);F(g,4,Cg[f]);b&&G(g,3,void 0);"UNDEFINED_CSN"==c?Sq("visualElementGestured",g,d):Yp(g,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:f},b&&(f.clientData=b),"UNDEFINED_CSN"==c?Sq("visualElementGestured",f,d):a?yj("visualElementGestured",
f,a,d):rk("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function Xq(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Yq(a,b,c);var f=bo(c.layer);if(f){for(var g=q(a.o),h=g.next();!h.done;h=g.next())h=h.value,Wq(a,h[0],h[1]||f,c.layer);f=q(a.D);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=eo(g);var l=k[0]||bo(g);if(h&&l){g=a.client;var n=k[1];k={cttAuthInfo:go(h),X:h};K("il_via_jspb")?(n=new Mg,n.Y(h),l=l.getAsJspb(),G(n,2,l),"UNDEFINED_CSN"==h?Sq("visualElementStateChanged",n,k):Zp(n,k,g)):(l={csn:h,ve:l.getAsJson(),
clientData:n},"UNDEFINED_CSN"==h?Sq("visualElementStateChanged",l,k):g?yj("visualElementStateChanged",l,g,k):rk("visualElementStateChanged",l,k))}}}};
eo(c.layer)||a.j();if(c.sb)for(var d=q(c.sb),e=d.next();!e.done;e=d.next())Vq(a,e.value,c.layer);else Mn(Error("Delayed screen needs a data promise."))}
function Yq(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.dc?c.dc:c.layer;var e=eo(d);d=bo(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=B("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Qq(a.client,b,f,c.rb,c.cttAuthInfo,g,c.to)}catch(l){On(l,{zo:b,rootVe:d,parentVisualElement:void 0,qo:e,vo:f,rb:c.rb});Mn(l);return}ho(k,b,
c.layer,c.cttAuthInfo);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=K("screen_manager_skip_hide_killswitch"))){a:{b=q(Object.values(Wn));for(f=b.next();!f.done;f=b.next())if(eo(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:go(e),X:e,ub:g},K("il_via_jspb")?(h=new Lg,h.Y(e),d=d.getAsJspb(),G(h,2,d),F(h,4,g?16:8),"UNDEFINED_CSN"==e?Sq("visualElementHidden",h,f):Xp(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?Sq("visualElementHidden",
d,f):b?yj("visualElementHidden",d,b,f):rk("visualElementHidden",d,f)));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");jq({clientScreenNonce:k});Tq.getInstance().clear();d=bo(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(K("web_mark_root_visible")||K("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:go(e),X:e},K("il_via_jspb")?(b=new Lg,b.Y(e),f=d.getAsJspb(),G(b,2,f),F(b,4,1),"UNDEFINED_CSN"==e?Sq("visualElementShown",b,k):Wp(b,k,void 0)):(b={csn:e,ve:d.getAsJson(),eventType:1},
"UNDEFINED_CSN"==e?Sq("visualElementShown",b,k):rk("visualElementShown",b,k)));a.i.delete(c.layer||0);a.j=void 0;e=q(a.u);for(k=e.next();!k.done;k=e.next())b=q(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Wq(a,k,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(l){Mn(l)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(l){Mn(l)}}}
;function Zq(){var a;return w(function(b){if(1==b.h)return v(b,rq(),2);if(a=b.i)return a.errorMetadata?(Mn(Error("Datasync IDs fetch responded with "+a.errorMetadata.code+": "+a.error)),b.return(void 0)):b.return(a.ro);Nn(Error("Network request to get Datasync IDs failed."));return b.return(void 0)})}
;var $q=x.caches,ar;function br(a){var b=a.indexOf(":");return-1===b?{Cb:a}:{Cb:a.substring(0,b),datasyncId:a.substring(b+1)}}
function cr(){return w(function(a){if(void 0!==ar)return a.return(ar);ar=new Promise(function(b){var c;return w(function(d){switch(d.h){case 1:return ua(d,2),v(d,$q.open("test-only"),4);case 4:return v(d,$q.delete("test-only"),5);case 5:va(d,3);break;case 2:if(c=wa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(ar)})}
function dr(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.h)return v(k,cr(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return v(k,$q.keys(),3)}c=k.i;d=q(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=br(f),h=g.datasyncId,!h||a.includes(h)||b.push($q.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
;function er(){Zq().then(function(a){if(a&&(Fl(a),dr(a),K("clear_user_partitioned_ls"))){var b=void 0===b?{}:b;"_start"in mp("cupls")&&Z("aa",void 0,"cupls");var c=Cp();c.cupls&&delete c.cupls;var d={timerName:"cupls",info:{},tick:{},span:{},jspbInfo:[]};Ap().push(d);c.cupls=d;sp("cupls");kp();rp("cupls").useGel=!0;Bp("cupls").info.actionType="cupls";b.cttAuthInfo&&(rp("cupls").cttAuthInfo=b.cttAuthInfo);qh("cuplsTIMING_ACTION","cupls");Z("_start",b.startTime,"cupls");b={actionType:Jp("cupls")};(c=
eo())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);jq(b,"cupls");qp("cupls");Z("cuplss",void 0,"cupls");try{try{var e=!!self.localStorage}catch(t){e=!1}if(e)for(var f=Object.keys(window.localStorage),g=q(f),h=g.next();!h.done;h=g.next()){var k=h.value;var l=k.match(/(.*)::.*::.*/);var n=null!==l?l[1]:void 0;e=n;void 0===e||a.includes(e)||self.localStorage.removeItem(k)}Z("cuplsc",void 0,"cupls")}catch(t){Mn(t),Z("cuplse",void 0,"cupls")}}})}
function fr(){var a=new Qm;Xh.N(function(){a.H()?er():a.i.add("publicytnetworkstatus-online",er,!0,void 0,void 0)})}
;function gr(a){a&&(a.dataset?a.dataset[hr("loaded")]="true":a.setAttribute("data-loaded","true"))}
function ir(a,b){return a?a.dataset?a.dataset[hr(b)]:a.getAttribute("data-"+b):null}
var jr={};function hr(a){return jr[a]||(jr[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var kr=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,lr=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function mr(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(kr,""),c=c.replace(lr,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else nr(a,b,c)}
function nr(a,b,c){c=void 0===c?null:c;var d=or(a),e=document.getElementById(d),f=e&&ir(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Li(d,b),b=""+Pa(b),pr[b]=f),g||(e=qr(a,d,function(){ir(e,"loaded")||(gr(e),Oi(d),Nh(Va(Pi,d),0))},c)))}
function qr(a,b,c,d){d=void 0===d?null:d;var e=vd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);rd(e,wf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function rr(a){a=or(a);var b=document.getElementById(a);b&&(Pi(a),b.parentNode.removeChild(b))}
function sr(a,b){a&&b&&(a=""+Pa(b),(a=pr[a])&&Ni(a))}
function or(a){var b=document.createElement("a");Qb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Vb(a)}
var pr={};var tr=[],ur=!1;function vr(){if(!K("disable_biscotti_fetch_for_ad_blocker_detection")&&!K("disable_biscotti_fetch_entirely_for_all_web_clients")&&so()&&"1"!=qb()){var a=function(){ur=!0;"google_ad_status"in window?qh("DCLKSTAT",1):qh("DCLKSTAT",2)};
try{mr("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}tr.push(Xh.N(function(){if(!(ur||"google_ad_status"in window)){try{sr("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}ur=!0;qh("DCLKSTAT",3)}},5E3))}}
function wr(){var a=Number(B("DCLKSTAT",0));return isNaN(a)?0:a}
;function xr(){this.state=1;this.h=null}
m=xr.prototype;
m.initialize=function(a,b,c){var d,e;if(a.program){var f=null!==(d=a.interpreterScript)&&void 0!==d?d:null,g=null!==(e=a.interpreterUrl)&&void 0!==e?e:null;if(a.interpreterSafeScript){f=a.interpreterSafeScript;Ab("From proto message. b/166824318");f=f.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var h=xb();f=h?h.createScript(f):f;f=(new Cb(f)).toString()}a.interpreterSafeUrl&&(g=a.interpreterSafeUrl,Ab("From proto message. b/166824318"),g=Gb(g.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());
yr(this,f,g,a.program,b,c)}else Nn(Error("Cannot initialize botguard without program"))};
function yr(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,mr(c,function(){window[g]?zr(a,d,g,e):(a.state=3,rr(c),Nn(new uk("Unable to load Botguard","from "+c)))},f)):b?(f=vd("SCRIPT"),f.textContent=b,f.nonce=Tb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?zr(a,d,g,e):(a.state=4,Nn(new uk("Unable to load Botguard from JS")))):Nn(new uk("Unable to load VM; no url or JS provided"))}
m.isInitialized=function(){return!!this.h};
m.getState=function(){return this.state};
function zr(a,b,c,d){a.state=5;try{var e=new kd({program:b,globalName:c});e.uc.then(function(){a.state=6;d&&d(b)});
Ar(a,e)}catch(f){a.state=7,f instanceof Error&&Nn(f)}}
m.invoke=function(a){a=void 0===a?{}:a;if(this.h){var b=this.h;a={qb:a};if(b.i)throw Error("Already disposed");b=b.l([a.qb,a.wc])}else b=null;return b};
m.dispose=function(){Ar(this,null);this.state=8};
function Ar(a,b){Xd(a.h);a.h=b}
;var Br=new xr;function Cr(){return Br.isInitialized()}
function Dr(a){a=void 0===a?{}:a;return Br.invoke(a)}
;function Er(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Wh():d;this.l=c;this.j=d;this.i=new jd;this.h=a;a={};c=q(this.h.entries());for(d=c.next();!d.done;a={va:a.va,Da:a.Da},d=c.next()){var e=q(d.value);d=e.next().value;e=e.next().value;a.Da=d;a.va=e;d=function(f){return function(){f.va.fb();b.h[f.Da].Ta=!0;b.h.every(function(g){return!0===g.Ta})&&b.i.resolve()}}(a);
e=Sh(d,Fr(this,a.va));this.h[a.Da]=Object.assign(Object.assign({},a.va),{fb:d,Oa:e})}}
function Gr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return Fr(a,a.h[e])-Fr(a,a.h[d])});
b=q(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.Oa||c.Ta||(a.j.U(c.Oa),Sh(c.fb,10))}
Er.prototype.cancel=function(){for(var a=q(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Oa||b.Ta||this.j.U(b.Oa),b.Ta=!0;this.i.resolve()};
function Fr(a,b){var c;return null!==(c=b.priority)&&void 0!==c?c:a.l}
;function Hr(a){this.state=a;this.plugins=[];this.m=void 0}
Hr.prototype.install=function(){this.plugins.push.apply(this.plugins,ja(Fa.apply(0,arguments)))};
Hr.prototype.transition=function(a,b){var c=this,d=this.D.find(function(f){return f.from===c.state&&f.C===a});
if(d){this.j&&(Gr(this.j),this.j=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Ir(this,e,this.m),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Ir(a,b,c){return function(){var d=Fa.apply(0,arguments),e=b.filter(function(k){var l;return 10===(null!==(l=null!==c&&void 0!==c?c:k.priority)&&void 0!==l?l:0)}),f=b.filter(function(k){var l;
return 10!==(null!==(l=null!==c&&void 0!==c?c:k.priority)&&void 0!==l?l:0)});
Wh();var g={};e=q(e);for(var h=e.next();!h.done;g={Ea:g.Ea},h=e.next())g.Ea=h.value,Uh(function(k){return function(){k.Ea.la.apply(k.Ea,ja(d))}}(g));
f=f.map(function(k){var l;return{fb:function(){k.la.apply(k,ja(d))},
priority:null!==(l=null!==c&&void 0!==c?c:k.priority)&&void 0!==l?l:0}});
f.length&&(a.j=new Er(f))}}
ea.Object.defineProperties(Hr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Jr(a){Hr.call(this,void 0===a?"document_active":a);var b=this;this.m=10;this.h=new Map;this.D=[{from:"document_active",C:"document_disposed_preventable",action:this.u},{from:"document_active",C:"document_disposed",action:this.l},{from:"document_disposed_preventable",C:"document_disposed",action:this.l},{from:"document_disposed_preventable",C:"flush_logs",action:this.o},{from:"document_disposed_preventable",C:"document_active",action:this.i},{from:"document_disposed",C:"flush_logs",action:this.o},
{from:"document_disposed",C:"document_active",action:this.i},{from:"document_disposed",C:"document_disposed",action:function(){}},
{from:"flush_logs",C:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",c)});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",c)})}
r(Jr,Hr);Jr.prototype.u=function(a,b){if(!this.h.get("document_disposed_preventable")&&(a(b),(null===b||void 0===b?0:b.defaultPrevented)||(null===b||void 0===b?0:b.returnValue))){b.returnValue||(b.returnValue=!0);b.defaultPrevented||b.preventDefault();this.h=new Map;this.transition("document_active");return}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Jr.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Jr.prototype.o=function(a,b){a(b);this.transition("document_active")};
Jr.prototype.i=function(){this.h=new Map};function Kr(a){Hr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.D=[{from:"document_visibility_unknown",C:"document_visible",action:this.i},{from:"document_visibility_unknown",C:"document_hidden",action:this.h},{from:"document_visibility_unknown",C:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",C:"document_backgrounded",action:this.l},{from:"document_visible",C:"document_hidden",action:this.h},{from:"document_visible",C:"document_foregrounded",action:this.o},
{from:"document_visible",C:"document_visible",action:this.i},{from:"document_foregrounded",C:"document_visible",action:this.i},{from:"document_foregrounded",C:"document_hidden",action:this.h},{from:"document_foregrounded",C:"document_foregrounded",action:this.o},{from:"document_hidden",C:"document_visible",action:this.i},{from:"document_hidden",C:"document_backgrounded",action:this.l},{from:"document_hidden",C:"document_hidden",action:this.h},{from:"document_backgrounded",C:"document_hidden",action:this.h},
{from:"document_backgrounded",C:"document_backgrounded",action:this.l},{from:"document_backgrounded",C:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",c):b.transition("document_hidden",c)});
K("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",c)}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",c)}))}
r(Kr,Hr);Kr.prototype.i=function(a,b){a(b);K("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Kr.prototype.h=function(a,b){a(b);K("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Kr.prototype.l=function(a,b){a(b)};
Kr.prototype.o=function(a,b){a(b)};function Lr(){this.h=new Jr;this.i=new Kr}
Lr.prototype.install=function(){var a=Fa.apply(0,arguments);this.h.install.apply(this.h,ja(a));this.i.install.apply(this.i,ja(a))};function Mr(){Lr.call(this);var a={};this.install((a.document_disposed={la:this.j},a));a={};this.install((a.flush_logs={la:this.l},a))}
var Nr;r(Mr,Lr);Mr.prototype.l=function(){rk("finalPayload",{csn:eo()})};
Mr.prototype.j=function(){Qn(Rn)};function Or(){}
Or.getInstance=function(){var a=A("ytglobal.storage_");a||(a=new Or,y("ytglobal.storage_",a,void 0));return a};
Or.prototype.estimate=function(){var a,b,c;return w(function(d){c=navigator;return(null===(a=c.storage)||void 0===a?0:a.estimate)?d.return(c.storage.estimate()):(null===(b=c.webkitTemporaryStorage)||void 0===b?0:b.queryUsageAndQuota)?d.return(Pr()):d.return()})};
function Pr(){var a=navigator;return new Promise(function(b,c){var d;null!==(d=a.webkitTemporaryStorage)&&void 0!==d&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
y("ytglobal.storageClass_",Or,void 0);function pk(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=th("ytidb_transaction_ended_event_rate_limit",.02)}
pk.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":K("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":K("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Qr(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign(Object.assign({},
b),{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Qr(a,b){Or.getInstance().estimate().then(function(c){c=Object.assign(Object.assign({},b),{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Rr(null===c||void 0===c?void 0:c.usage),deviceStorageQuotaMbytes:Rr(null===c||void 0===c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Rr(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var Sr=window;
function Tr(){var a=Sr.uaChPolyfill.state;if(0===a.type)rk("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),Mn(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);rk("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),rk("clientHintsPolyfillDiagnostics",
b))}}
var Ur=!1;function Vr(){var a;1===(null===(a=Sr.uaChPolyfill)||void 0===a?void 0:a.state.type)?Ur||(Sr.uaChPolyfill.onReady=Vr,Ur=!0):Sr.uaChPolyfill&&Tr()}
;function Wr(a,b,c){I.call(this);var d=this;c=c||B("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.L="*";this.l=c;this.sessionId=null;this.channel="widget";this.M=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.M&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.L=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=cb(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
r(Wr,I);Wr.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.L)}catch(d){Dh(d)}}};
Wr.prototype.I=function(){window.removeEventListener("message",this.A);I.prototype.I.call(this)};function Xr(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Wr(!!B("WIDGET_ID_ENFORCE")),b=this.fc.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=B("WIDGET_ID"))this.h.sessionId=a}
m=Xr.prototype;m.fc=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,Yr(this,a)),this.j[a]=!0)):this.lb(a,b,c)};
m.lb=function(){};
function Yr(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Ub=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Za());this.sendMessage("onReady");db(this.i,this.Ib,this);this.i=[]};
m.Za=function(){return null};
function Zr(a,b){a.sendMessage("infoDelivery",b)}
m.Ib=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ib({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function $r(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function as(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function bs(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function cs(a){Xr.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.qc.bind(this));this.addEventListener("onVolumeChange",this.sc.bind(this));this.addEventListener("onApiChange",this.kc.bind(this));this.addEventListener("onPlaybackQualityChange",this.nc.bind(this));this.addEventListener("onPlaybackRateChange",this.oc.bind(this));this.addEventListener("onStateChange",this.pc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.tc.bind(this))}
r(cs,Xr);m=cs.prototype;
m.lb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&$r(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=as(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=as(e);break;case "loadPlaylist":case "cuePlaylist":e=bs(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);$r(a)&&Zr(this,this.Za())}};
m.onReady=function(){var a=this.Ub.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Za=function(){if(!this.api)return null;var a=this.api.getApiInterface();ib(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.pc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Zr(this,a)};
m.nc=function(a){Zr(this,{playbackQuality:a})};
m.oc=function(a){Zr(this,{playbackRate:a})};
m.kc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.sc=function(){Zr(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.qc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Zr(this,a)};
m.tc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Zr(this,a)};
m.dispose=function(){Xr.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function ds(a){I.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Eb,this)}
r(ds,I);m=ds.prototype;m.start=function(){this.started||this.h()||(this.started=!0,this.connection.na("RECEIVING"))};
m.na=function(a,b){this.started&&!this.h()&&this.connection.na(a,b)};
m.Eb=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=es(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=fs(a,c))&&this.na(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.lc.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.lc=function(a,b){this.started&&!this.h()&&this.connection.na(a,this.Ya(a,b))};
m.Ya=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.I=function(){var a=this.connection;a.h()||Xf(a.i,"command",this.Eb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);I.prototype.I.call(this)};function gs(a,b){ds.call(this,b);this.api=a;this.start()}
r(gs,ds);gs.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
gs.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function es(a,b){switch(a){case "loadVideoById":return a=as(b),[a];case "cueVideoById":return a=as(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=bs(b),[a];case "cuePlaylist":return a=bs(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function fs(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
gs.prototype.Ya=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ds.prototype.Ya.call(this,a,b)};
gs.prototype.I=function(){ds.prototype.I.call(this);delete this.api};function hs(a){a=void 0===a?!1:a;I.call(this);this.i=new J(a);Zd(this,Va(Xd,this.i))}
Xa(hs,I);hs.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
hs.prototype.l=function(a,b){this.h()||this.i.ka.apply(this.i,arguments)};function is(a,b,c){hs.call(this);this.j=a;this.destination=b;this.id=c}
r(is,hs);is.prototype.na=function(a,b){this.h()||this.j.na(this.destination,this.id,a,b)};
is.prototype.I=function(){this.destination=this.j=null;hs.prototype.I.call(this)};function js(a,b,c){I.call(this);this.destination=a;this.origin=c;this.i=Kh(window,"message",this.j.bind(this));this.connection=new is(this,a,b);Zd(this,Va(Xd,this.connection))}
r(js,I);js.prototype.na=function(a,b,c,d){this.h()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(yf(a),this.origin))};
js.prototype.j=function(a){var b;if(b=!this.h())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h()||c.l("command",b.command,b.data,a.origin))}};
js.prototype.I=function(){Lh(this.i);this.destination=null;I.prototype.I.call(this)};function ks(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||sb(b);this.assets=a.assets||{};this.attrs=a.attrs||sb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ks.prototype.clone=function(){var a=new ks,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ma(c)?a[b]=sb(c):a[b]=c}return a};var ls=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function ms(a){a=a||"";if(window.spf){var b=a.match(ls);spf.style.load(a,b?b[1]:"",void 0)}else ns(a)}
function ns(a){var b=os(a),c=document.getElementById(b),d=c&&ir(c,"loaded");d||c&&!d||(c=ps(a,b,function(){ir(c,"loaded")||(gr(c),Oi(b),Nh(Va(Pi,b),0))}))}
function ps(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=wf(a);Rb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function os(a){var b=vd("A");Ab("This URL is never added to the DOM");Qb(b,new Ib(a,Jb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Vb(a)}
;function qs(){I.call(this);this.i=[]}
r(qs,I);qs.prototype.I=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.la,void 0)}I.prototype.I.call(this)};function rs(){qs.apply(this,arguments)}
r(rs,qs);function ss(a,b,c,d){I.call(this);var e=this;this.M=b;this.webPlayerContextConfig=d;this.Va=!1;this.api={};this.Fa=this.u=null;this.S=new J;this.i={};this.ga=this.Ga=this.elementId=this.Wa=this.config=null;this.Z=!1;this.l=this.A=null;this.Ha={};this.Lb=["onReady"];this.lastError=null;this.mb=NaN;this.L={};this.Mb=new rs(this);this.qa=0;this.j=this.m=a;Zd(this,Va(Xd,this.S));ts(this);us(this);Zd(this,Va(Xd,this.Mb));c?this.qa=Nh(function(){e.loadNewVideoConfig(c)},0):d&&(vs(this),ws(this))}
r(ss,I);m=ss.prototype;m.getId=function(){return this.M};
m.loadNewVideoConfig=function(a){if(!this.h()){this.qa&&(Oh(this.qa),this.qa=0);var b=a||{};b instanceof ks||(b=new ks(b));this.config=b;this.setConfig(a);ws(this);this.isReady()&&xs(this)}};
function vs(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.M,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.M:a.config.attrs.id=a.M);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.Wa=a;this.config=ys(a);vs(this);this.Ga||(this.Ga=zs(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Hd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Hd(Number(a)||a))};
function xs(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function As(a){var b=!0,c=Bs(a);c&&a.config&&(a=Cs(a),b=ir(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function ws(a){if(!a.h()&&!a.Z){var b=As(a);if(b&&"html5"===(Bs(a)?"html5":null))a.ga="html5",a.isReady()||Ds(a);else if(Es(a),a.ga="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Ds(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=Fs(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?ys(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);Ds(a)};
a.Z=!0;b?a.A():(mr(Cs(a),a.A),(b=Gs(a))&&ms(b),Hs(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function Bs(a){var b=ud(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Ds(a){var b;if(!a.h()){var c=Bs(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.Z=!1,!Fs(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||Is(a)):a.mb=Nh(function(){Ds(a)},50)}}
function Is(a){ts(a);a.Va=!0;var b=Bs(a);if(b){a.u=Js(a,b,"addEventListener");a.Fa=Js(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Js(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.u&&a.u(g,a.i[g]);xs(a);a.Ga&&a.Ga(a.api);a.S.ka("onReady",a.api)}
function Js(a,b,c){var d=b[c];return function(){var e=Fa.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Nn(f))}}}
function ts(a){a.Va=!1;if(a.Fa)for(var b in a.i)a.i.hasOwnProperty(b)&&a.Fa(b,a.i[b]);for(var c in a.L)a.L.hasOwnProperty(c)&&Oh(Number(c));a.L={};a.u=null;a.Fa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Wa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Va};
function us(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Oi("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Oi("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Oi("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=zs(this,b);d&&(0<=cb(this.Lb,a)||this.i[a]||(b=Ks(this,a),this.u&&this.u(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&Nh(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h()||(b=zs(this,b))&&Xf(this.S,a,b)};
function zs(a,b){var c=b;if("string"===typeof b){if(a.Ha[b])return a.Ha[b];c=function(){var d=Fa.apply(0,arguments),e=A(b);if(e)try{e.apply(x,d)}catch(f){Mn(f)}};
a.Ha[b]=c}return c?c:null}
function Ks(a,b){var c="ytPlayer"+b+a.M;a.i[b]=c;x[c]=function(d){var e=Nh(function(){if(!a.h()){a.S.ka(b,null!==d&&void 0!==d?d:void 0);var f=a.L,g=String(e);g in f&&delete f[g]}},0);
pb(a.L,String(e))};
return c}
m.getPlayerType=function(){return this.ga||(Bs(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Es(a){a.cancel();ts(a);a.ga=null;a.config&&(a.config.loaded=!1);var b=Bs(a);b&&(As(a)||!Hs(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&sr(Cs(this),this.A);Oh(this.mb);this.Z=!1};
m.I=function(){Es(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Mn(b)}this.Ha=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(x[this.i[a]]=null);this.Wa=this.config=this.api=null;delete this.m;delete this.j;I.prototype.I.call(this)};
function Hs(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Cs(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Gs(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Fs(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===hi(d||"","&")[b]}
function ys(a){for(var b={},c=q(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?sb(e):e}return b}
;var Ls={},Ms="player_uid_"+(1E9*Math.random()>>>0);function Ns(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?ud(d):d;var e=Ms+"_"+Pa(d),f=Ls[e];if(f&&c)return Os(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new ss(d,e,a,b);Ls[e]=f;Oi("player-added",f.api);Zd(f,function(){delete Ls[f.getId()]});
return f.api}
function Os(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Ps=null,Qs=null,Rs=null;function Ss(){var a=Ps.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Ts(a,b,c){a="ST-"+Vb(a).toString(36);b=b?ac(b):"";c=c||5;so()&&Dj(a,b,c)}
;function Us(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=B("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=B("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Yb(window.location.href);g&&f.push(g);g=Yb(d);if(0<=cb(f,g)||!g&&0==d.lastIndexOf("/",0))if(K("autoescape_tempdata_url")&&(f=document.createElement("a"),Qb(f,d),d=f.href),d&&(d=Zb(d),f=d.indexOf("#"),d=0>f?d:d.substr(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:eo()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Ts(d,b,h)}else Ts(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var l=void 0===l?"":l;var n=void 0===n?window:n;c=n.location;a=bc(a,k)+l;var t=void 0===t?Gd:t;a:{t=void 0===t?Gd:t;for(k=0;k<t.length;++k)if(l=t[k],l instanceof Ed&&l.isValid(a)){t=new od(a,md);break a}t=void 0}c.href=qd(t||pd)}return!0}
;y("yt.setConfig",qh,void 0);y("yt.config.set",qh,void 0);y("yt.setMsg",jo,void 0);y("yt.msgs.set",jo,void 0);y("yt.logging.errors.log",Mn,void 0);
y("writeEmbed",function(){var a=B("PLAYER_CONFIG",void 0);if(!a){var b=B("PLAYER_VARS",void 0);b&&(a={args:b})}Ao(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=B("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);K("embeds_js_api_set_1p_cookie")&&(c=mi(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));fq();
if((c=B("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=mi(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Ps=Ns(a,c,!1)}else Ps=Ns(a);Ps.addEventListener("onVideoDataChange",Ss);a=B("POST_MESSAGE_ID","player");B("ENABLE_JS_API")?Rs=new cs(Ps):B("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Qs=new js(window.parent,
a,b),Rs=new gs(Ps,Qs.connection));vr();K("ytidb_create_logger_embed_killswitch")||ok();K("flush_gel_on_teardown")&&(a={},Nr||(Nr=new Mr),Nr.install((a.flush_logs={la:function(){gj()}},a)));
K("networkless_logging_web_embedded")&&(K("embeds_web_enable_new_nwl")?Xm():en());K("embeds_enable_ua_ch_polyfill")&&Vr();K("ytidb_clear_embedded_player")&&Xh.N(function(){if(!Kq){var e={pb:{feedbackEndpoint:Ro(Eq),modifyChannelNotificationPreferenceEndpoint:Ro(Fq),playlistEditEndpoint:Ro(Gq),subscribeEndpoint:Ro(Cq),unsubscribeEndpoint:Ro(Dq),webPlayerShareEntityServiceEndpoint:Ro(Hq)}},f=K("web_enable_client_location_service")?Lo.getInstance():void 0,g={};f&&(g.client_location=f);if(void 0===h){Bo.h||
(Bo.h=new Bo);var h=Bo.h}if(void 0===k){Jq.h||(Jq.h=new Jq);var k=Jq.h}qq(e,k,h,g);Kq=pq.h}fr()})},void 0);
var Vs=Ch(function(){mq();var a=Hj.getInstance(),b=Kj(119),c=1<window.devicePixelRatio;if(document.body&&ff(document.body,"exp-invert-logo"))if(c&&!ff(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ff(d,"inverted-hdpi")){var e=df(d);ef(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ff(document.body,"inverted-hdpi")&&gf();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Lj(b)||0;d=c?d|67108864:d&-67108865;0==d?delete Gj[b]:(c=d.toString(16),
Gj[b]=c.toString());c=!0;K("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Gj)d.push(f+"="+encodeURIComponent(String(Gj[f])));Dj(b,d.join("&"),63072E3,a.i,c)}Uq.h||(Uq.h=new Uq);a=Uq.h;f=16623;var g=void 0===g?{}:g;Object.values(ko).includes(f)||(Nn(new uk("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.o=[];a.D=[];g.sb?Xq(a,f,g):Yq(a,f,g)}),Ws=Ch(function(){Ps&&Ps.sendAbandonmentPing&&Ps.sendAbandonmentPing();
B("PL_ATT")&&Br.dispose();for(var a=0,b=tr.length;a<b;a++)Xh.U(tr[a]);tr.length=0;rr("//static.doubleclick.net/instream/ad_status.js");ur=!1;qh("DCLKSTAT",0);Yd(Rs,Qs);Ps&&(Ps.removeEventListener("onVideoDataChange",Ss),Ps.destroy())});
window.addEventListener?(window.addEventListener("load",Vs),window.addEventListener("unload",Ws)):window.attachEvent&&(window.attachEvent("onload",Vs),window.attachEvent("onunload",Ws));Wa("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||Cr);Wa("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||Dr);Wa("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||wr);
Wa("yt.player.exports.navigate",A("yt.player.exports.navigate")||Us);Wa("yt.util.activity.init",A("yt.util.activity.init")||Zh);Wa("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||bi);Wa("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||$h);}).call(this);
