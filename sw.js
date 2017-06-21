importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "/index.html",
    "revision": "351a96cda29d482d4a56c437ee69bb1f"
  },
  {
    "url": "/inline.a81c4bd0a3ca684af7d7.bundle.js",
    "revision": "314c5f90c02e94c42e21b55448d2e7e4"
  },
  {
    "url": "/main.bd334937f5b761ef1d98.bundle.js",
    "revision": "b7973dd208e4d8f8e89d4b0926f9835b"
  },
  {
    "url": "/polyfills.07685bca73161be59257.bundle.js",
    "revision": "872d944e548d9de7ccd96f8e22e175f0"
  },
  {
    "url": "/styles.6f99c673746cb2ac2673.bundle.css",
    "revision": "6f99c673746cb2ac2673dfda3bee34d1"
  },
  {
    "url": "/vendor.3ef93399854dc0e1e51b.bundle.js",
    "revision": "93bebd9a0a7600b0d88ccbe4cf4d79f6"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(
  'https://newsapi.org/(.*)',
  workboxSW.strategies.networkFirst({networkTimeoutSeconds: 5})
);
