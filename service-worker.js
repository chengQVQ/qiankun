/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cc688390157b5cdf8825318b7dd3ed8d"
  },
  {
    "url": "api/index.html",
    "revision": "c4aed680046e669b1ec0ff563d2ebae8"
  },
  {
    "url": "assets/css/0.styles.828a4574.css",
    "revision": "01cf23724849dadfd859c5fe6088ae54"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.45aafcdb.js",
    "revision": "ee16ecd0423c622951ca5ce5b2300a95"
  },
  {
    "url": "assets/js/11.0c2900e9.js",
    "revision": "bdeae8db2f7eb023922bd31046e82c04"
  },
  {
    "url": "assets/js/12.1cd950a0.js",
    "revision": "443a9f457a92b77bdbf260f1fc8feda3"
  },
  {
    "url": "assets/js/13.9993d92e.js",
    "revision": "4b489c8be463b7b5d98c052fecf156c3"
  },
  {
    "url": "assets/js/14.8f5faf2c.js",
    "revision": "8ad2226182b29d0d790cd64fbe0c5d9c"
  },
  {
    "url": "assets/js/15.552a8e0a.js",
    "revision": "f8cd1ddde724169d31c77ecd5fc75929"
  },
  {
    "url": "assets/js/16.56f91e99.js",
    "revision": "9a17df3e3a35a3fc67cdf4ed3a442a15"
  },
  {
    "url": "assets/js/2.a44e031b.js",
    "revision": "2a958d109fa4be79841725cb86e754fb"
  },
  {
    "url": "assets/js/3.3225a086.js",
    "revision": "3ed1d221cfea1afcddc2aafc2498f2ba"
  },
  {
    "url": "assets/js/4.b57ea8d3.js",
    "revision": "27f94b967fb4d48b71630515edb6d7dd"
  },
  {
    "url": "assets/js/5.b4d3fe4a.js",
    "revision": "e32c13cba2a58bc91703536f01b66f97"
  },
  {
    "url": "assets/js/6.c5e6f162.js",
    "revision": "8074cc35d13847d7572f1e466bc79088"
  },
  {
    "url": "assets/js/7.25f9898a.js",
    "revision": "76e33a1aa1a6d5de1131f7b038e93e8d"
  },
  {
    "url": "assets/js/8.c1c37552.js",
    "revision": "ea4aefb9ef58f15db0ae812a0d8b0c87"
  },
  {
    "url": "assets/js/9.f42268b2.js",
    "revision": "ce537c83539ac6a17eea09d5079a2a35"
  },
  {
    "url": "assets/js/app.bd7df175.js",
    "revision": "eb11ea541e81bb1ba0c06f8f7e5cefe1"
  },
  {
    "url": "faq/index.html",
    "revision": "0cfab7158aabe19c017765f48385c333"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "492f7f400a91b038ffc99a923eccd55c"
  },
  {
    "url": "guide/index.html",
    "revision": "565a0855db210563ab583b6eb65fee69"
  },
  {
    "url": "index.html",
    "revision": "f1e1ae0ee8595dd7e8dd01bb8b9f92dd"
  },
  {
    "url": "zh/api/index.html",
    "revision": "377398eec2284aa4ab01e5976949c1ab"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "e80341aab260ad6ae9f65dd8c8714f1b"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "26194537e927ced4d20a7c0cca179b34"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "52eb0584682750251a3959451dd156eb"
  },
  {
    "url": "zh/index.html",
    "revision": "fdde7ca72ce6883140f411356993b748"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
