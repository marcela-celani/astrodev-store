"use strict";var precacheConfig=[["/astrodev-store/index.html","22d129c5c4eb226c265dcb09dc6ad190"],["/astrodev-store/static/js/main.fd0d0f4b.js","f4920f520683f183f3f9b7ebcc811ea5"],["/astrodev-store/static/media/almofada1.619d8917.png","619d89179fdf162c7ebadc431544de25"],["/astrodev-store/static/media/almofada2.73a83e31.png","73a83e31cf6a977eea271676e312e733"],["/astrodev-store/static/media/almofada3.f02bf4d9.png","f02bf4d9b83ba3779bd8b7d0bb42250d"],["/astrodev-store/static/media/brinquedo1.e5986358.jpg","e59863588409c15b0f2caf2ec73e4dab"],["/astrodev-store/static/media/brinquedo11.536ef950.jpg","536ef950c06fa7b8cbc9a6180bea0737"],["/astrodev-store/static/media/brinquedo12.ffe09013.jpg","ffe09013e632b8079f2293ab91acd214"],["/astrodev-store/static/media/brinquedo13.b3de3b88.jpg","b3de3b88ec5639e61d2eed1c0920eb5f"],["/astrodev-store/static/media/brinquedo2.51d42e9d.jpg","51d42e9d5da80aea01336c4e6e0c599f"],["/astrodev-store/static/media/brinquedo5.d6c94210.jpg","d6c942108a3aa76b1d4fbeabee3183ce"],["/astrodev-store/static/media/brinquedo6.f76c097b.jpg","f76c097b8ed1826aa97fcf27d52282f9"],["/astrodev-store/static/media/brinquedo7.f69123eb.jpg","f69123eb5f53ff4f4f1fbf3366e486ed"],["/astrodev-store/static/media/brinquedo8.0eef9f01.jpg","0eef9f0164d2ca8e16cea44d29a64994"],["/astrodev-store/static/media/brinquedo9.4b7df035.jpg","4b7df03531a4c738b1ceebb99b0e3730"],["/astrodev-store/static/media/logo2.02cae318.png","02cae3180d89e25106cc99b62ab929a2"],["/astrodev-store/static/media/papeldeparede1.c9b8d2c8.png","c9b8d2c8b67b4a7af3988f160d19735d"],["/astrodev-store/static/media/papeldeparede2.ecd03b51.png","ecd03b510cf5db2b024fc45586a3470c"],["/astrodev-store/static/media/quadro1.83cbdbd3.png","83cbdbd300080f21e9430d226cb4471d"],["/astrodev-store/static/media/quadro2.80aa15ec.png","80aa15ec189ed10b9840c5f201428597"],["/astrodev-store/static/media/quadro3.1014ddc6.png","1014ddc6bfc17e0e8962cc30d1755f86"],["/astrodev-store/static/media/relogio1.0ac38102.png","0ac38102bc554004751f92333174b201"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/astrodev-store/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});