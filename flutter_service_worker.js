'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "132da1c48657b5c7c86a40f13836ac07",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "33de4a7e6331e686974c1ed5cc832a67",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bec96eb4a5bf8c5147d63e68bda57a5b",
".git/logs/refs/heads/main": "9bffc7a00d3912c479836f37dd0db85b",
".git/logs/refs/remotes/origin/main": "8740212b16bfaf99824bb04eecc605c0",
".git/objects/06/565fd00b17ce5e93179ef540a5c263ce519d23": "f594dfdae6fc86c95b7502768ba75ae3",
".git/objects/13/0c2a60cb7a146a99db1294c4bb65560a403964": "d5abca77eade7ba255bb1e965c204fd9",
".git/objects/13/3eea3a94e0db82dd4c54080d480a6f19073b24": "bb55d7e77043d524b162641bc93c69bc",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/24/d85f307cfd67c2e7169fa8d8863235335f555e": "6a5ab36481537557741f492babe09512",
".git/objects/27/96cf7f2aba7b6309188a2aa58365dd87d35fc6": "83f6104d7888cc37608cf74ad9a11ccd",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/384d0c21cd0000446171a276c45858ca6547f0": "4fd2fee2a09eed8b5ecff42df84a7d03",
".git/objects/56/9ac70de3979b1fa794a6211bdf556cb609f8e7": "ab6141569f23f9c87cd31f14d5f66fb0",
".git/objects/59/5c23e4794471ac7e7242e88314d1f318d7434b": "215459991bb04efcc65518cf96106f86",
".git/objects/6d/2336f8c9212a356f8bf1724aaaffc48cde6e4f": "9681441d9e02f22e9be9272f74d78b03",
".git/objects/78/af1db9f744d5e366dabf443316c50373fd03c1": "b5d502ed461b3532a991219aa3441825",
".git/objects/79/5bf374a220dbf805d819217790a1a4584771c8": "47c32787a0cc3ebb7bfb82bc62616526",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/81/e7d4e4985086b0782048645969fd16d9912850": "ad63b7372220bc1917e92a96bffd243b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/5829d989f7cd18539521e5a646a1d970ee4a52": "1ceb7452c7ac8b06d424ecc2dbf13907",
".git/objects/97/3ab98ad5645bd6698bf07f114ed78f6435b61b": "3294ae0317d3ea279368c89a3e92235a",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/018e613f5c13194adf981121c14a8d0fc1f17e": "d4771c82265c18d6a5b29f82f4928df1",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/20e0401623d00d5a41b99f36beefea26cee86b": "868e02f078430342fd822e3e4011a0dd",
".git/objects/a3/7ac1805c9f2e8b68b5a2d65768d8de6b85f193": "669c117ca78eb5a915d3cb74f8925201",
".git/objects/a7/e0ad9196c393657d2a9a721aadd2ecb55a0868": "7695834d47616a64573a5e7d56002bd8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/74fca9d51df1debc40e0d67766aa8f140eb334": "e0d1c3a72ab0f79d398923c71e2e1b20",
".git/objects/b2/760728b1dde260f8428c7dc8d0540aa1ff7921": "ed6acd892d586d2ae5ec54accfc6219f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b1fd853a50c32537415f6dac091303d1dbc29e": "e589de84155332b361304941f3d1d1a0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d2/def4b9323453bd804223e980d0c5e7a5e7cbf9": "6e2380513b793c4e31a07d58b0333631",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/404a5bc5ec3c35dedc160209898ca8cabd9ddb": "e9b7dd87384e1dab887b2b93ad083d78",
".git/objects/da/5a56a2e9f155ebfd04f826eb40d431c9a1cf7f": "324a588bcad0d67421e8dd0a037bf3f8",
".git/objects/dd/07c207843a628cd452d5998fb1cb3cac56ac93": "dadcfee31ea69c19a41d966c3a2f1854",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/07da8e4e7a259a740efe6a1e0614a85fbd914e": "b70586af58230a4058bcadb6d4bef0ef",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/fd123af7fb5728800a5d8ba450bb96a960c603": "9ecdcbb93af8e0ee1375827be8156888",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/61abaeae5b37ae521669dfb2dd84466945a43a": "040b04bb4730b66b4c71f9457a112f85",
".git/objects/f3/3cd2d5bc893388af8d501507fe57f61afa4bd4": "b5e8bc2b0b51a02baaab7aee01cc0fc8",
".git/refs/heads/main": "911c747f277b172576f50aeabee76883",
".git/refs/remotes/origin/main": "911c747f277b172576f50aeabee76883",
"assets/AssetManifest.json": "98c2725d9849c143194e20ed018218eb",
"assets/assets/addwithpaste.png": "f87e8355b66a50583f6ba21dbcaa3a61",
"assets/assets/addwithpaste2.png": "2b44a6d8b840f56dd75f1a9e7ddefaf9",
"assets/assets/bullet.png": "10d200ad5e892b5de4aa4baa087f0d2c",
"assets/assets/curly.png": "d146f21425819cfa3e86e05a62e0f364",
"assets/assets/flutterlogo.png": "25945cf1d0cf7d508e02cb8c00eaeda6",
"assets/assets/git.png": "4f71e21c699d933c41010a40f2ea3fea",
"assets/assets/google.png": "0eb8078198b32ac9d48f60dc38d16bc3",
"assets/assets/linkedin.png": "9449e52f97bb9b80a2e560d6339805f5",
"assets/assets/man1.webp": "a83469ba50fa748e675a778c0fd8c37b",
"assets/assets/menu.png": "348605d24aa688bac0f7fd381b326648",
"assets/assets/paste1.png": "69c8986ff8043fd948cf62f4d1842433",
"assets/assets/playstore.png": "fd53fc3ed492c70d4db90920da79f7d3",
"assets/assets/share.png": "3c51e619ef54c9a858463713d135865c",
"assets/assets/signout.png": "5e7897e17163218d5e6c4403dcd67720",
"assets/assets/starr.png": "c3d53b19c9875d47459f6a83da459aaf",
"assets/assets/theme.png": "2497f2d0bec1243f435fb3cea439417d",
"assets/assets/youtube.png": "1995f228b77d78339276904702a7ac2c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8f2b7ab052dfcf4ace9901a3769cab3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "b3e27c0d08da98c43257e56014beffb0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "00da46988181f20fa3ef88516c88224c",
"icons/android-chrome-512x512.png": "5d32ee7def248cc60de7a5c62f2c79f2",
"icons/apple-touch-icon.png": "a5c55f71f097758f67852c1bb370c612",
"index.html": "00e9ef8f00cfdbf1c2b30dff81641326",
"/": "00e9ef8f00cfdbf1c2b30dff81641326",
"logo.png": "00da46988181f20fa3ef88516c88224c",
"main.dart.js": "852fa0d39a4c1eb58723af34eab9e56b",
"manifest.json": "7186eab4a234f9c09d986fcf0603958f",
"version.json": "df484e5c3116ea733776e9260fc28326"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
