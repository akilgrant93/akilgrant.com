"use strict";var precacheConfig=[["/akilgrant.com/index.html","12b9e52bec48fbd332575bc7948c55e7"],["/akilgrant.com/static/css/main.c04b399e.chunk.css","637aa4b0ac08f596d7ce313df1717e31"],["/akilgrant.com/static/js/1.2bfd76e4.chunk.js","8bb2a524a45d095676bf4f73a3cf6e85"],["/akilgrant.com/static/js/main.b23486bd.chunk.js","6630da3d25eb5b307d3ddfd7d89c998d"],["/akilgrant.com/static/js/runtime~main.13b0cdeb.js","648b07713bea20787fee5fa4946bb515"],["/akilgrant.com/static/media/blackcatles.3601734a.png","3601734a3b5bde22288d568c9114752c"],["/akilgrant.com/static/media/clip_2.4e9de40d.gif","4e9de40db0129d4c780237f9b9119cc2"],["/akilgrant.com/static/media/clip_3.74a4532e.gif","74a4532e413323e00c71c1c6dacf5358"],["/akilgrant.com/static/media/clip_4.ff16c1b5.gif","ff16c1b5e417c71245a7061d9da19c9c"],["/akilgrant.com/static/media/creativesportsconcepts-logo.3f9ddb26.png","3f9ddb2688f6d86a799f1fef98610b05"],["/akilgrant.com/static/media/eic_logo.269a76d8.png","269a76d882287b9507e7b3a51b53cd32"],["/akilgrant.com/static/media/illu01.85ae3f54.png","85ae3f54c5c8acb0999c9a0954b7190f"],["/akilgrant.com/static/media/illu02.159ca11e.png","159ca11e9e1167e929b2404b5631d80e"],["/akilgrant.com/static/media/illu03.6d21b267.JPG","6d21b2675dc306b35091b0fa6e054408"],["/akilgrant.com/static/media/queen-of-sheba.c8f5ded3.png","c8f5ded31a160606a619d5a2c3b216b6"],["/akilgrant.com/static/media/wineinvestmentcellars-logo.1f8fb007.png","1f8fb007a26145f4d729882448c44c7d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/akilgrant.com/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});