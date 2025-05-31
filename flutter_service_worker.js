'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ec569007c7a5eb321d6f59b728fdcc59",
"assets/AssetManifest.bin.json": "be6afc433e55c1266b34f95f5bd1562d",
"assets/AssetManifest.json": "3b58b1e799fdb11b50d6033d515c78fc",
"assets/FontManifest.json": "08c2a268a8ca1751181968354ad85639",
"assets/fonts/MaterialIcons-Regular.otf": "a8347a3c8b2630ee1deac046b62fa5c8",
"assets/icons/android.svg": "320c117b93c2cca7ab7d07688c93729b",
"assets/icons/android2.svg": "96721dec4ddbc2c0b019deae466950b2",
"assets/icons/database.svg": "a32dba28018c4cf937778e1a3f5e5037",
"assets/icons/design.svg": "31a9f2b2c94e98c0c3b6a93ecfd6e65c",
"assets/icons/fastApi.svg": "a554474bc9634785844d3e71725eabd2",
"assets/icons/firebase.svg": "433cac83d7dee47f4f1326632e1ec91a",
"assets/icons/flutter.svg": "79d83bf982f4f69c08a63859024195eb",
"assets/icons/github.svg": "52befe923cc140dc56d54c1b955121ef",
"assets/icons/insta.svg": "428b8f17555619d2e0260740acea39ae",
"assets/icons/instagram.svg": "b3b7a0210038e9a9f2fcb54f17d0f1c1",
"assets/icons/linkedin.svg": "4b475fb3f54b3e35daa04295ec48df4c",
"assets/icons/linkedinBordered.svg": "38b27799d7ab8423f1fb44b77f911509",
"assets/icons/maintenance.svg": "5510c0b60d3b437d813097a781d450aa",
"assets/icons/mobile.svg": "362ff9d8b1eb356e8ad071b87868b513",
"assets/icons/mobileapp.svg": "5bec7e323347f2c263e631651bfc7c8e",
"assets/icons/mobileCode.svg": "4f3447ddb631b86ff3ccdd8acc89d6da",
"assets/icons/node-js.svg": "534897e93e8090e6ef376f8ce96e888d",
"assets/icons/python.svg": "e6627fcbb450f34c26925c81dcdb5589",
"assets/icons/react.svg": "f0340143227cc3546b667fd9c4d1e1d8",
"assets/icons/softwareservice.svg": "974899042979db513d87301ee1c02250",
"assets/icons/stack.svg": "454713cdd441b871382a13586e6b2f4a",
"assets/icons/stack2.svg": "cda79a8803489d75ec786244626b3c33",
"assets/icons/website.svg": "35f9d6a2c0a8fb4c73e7b0f86d48a71d",
"assets/images/Home.png": "5f4921f03351cf38fd11440d6588aa77",
"assets/images/Icon-512.png": "7e28466c052eff90f240f1b90106e7fd",
"assets/images/maaz.png": "3195c5017b4618af10a7ab31f2049fa4",
"assets/images/maaz2.png": "02cc789c033755b200e990d7956341ab",
"assets/images/maaz3.png": "969bc73ea46e0adb0e3f7a7b73293c80",
"assets/NOTICES": "0dff87d335ae1172337368861a1707dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/unicons/icons/UniconsLine.ttf": "7f07054728a9399bbe83364c79140e19",
"assets/packages/unicons/icons/UniconsSolid.ttf": "105836582596a90ffa01fb397508fdc4",
"assets/packages/unicons/icons/UniconsThinline.ttf": "482f83678110b0061123dc6dc8e9240b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "4f91c4d5e1b24a8f54f01873ad091286",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "baef74a37cf5a4420585033cc43767c0",
"icons/Icon-192.png": "8703b4a602e8704fa44dbd56b406ecbd",
"icons/Icon-512.png": "5f9fba6f5c7fa898c77afe1742e189e7",
"icons/Icon-maskable-192.png": "8703b4a602e8704fa44dbd56b406ecbd",
"icons/Icon-maskable-512.png": "5f9fba6f5c7fa898c77afe1742e189e7",
"index.html": "2311eadbf71b5e8ce2e33bce4ac41086",
"/": "2311eadbf71b5e8ce2e33bce4ac41086",
"main.dart.js": "d97ce59c49accbcf87a585b7ae2bcad5",
"manifest.json": "5381c01007296ea2cdc4c1d9d972325d",
"version.json": "239ac1b40336f452625ee2aff3e8f447"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
