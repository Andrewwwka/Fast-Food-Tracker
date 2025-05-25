const CACHE_NAME = 'fast-food-tracker-v1';
const urlsToCache=[
    "/",
    "/index.html",
    "/stylepage.css",
    "/manifest.json",
    "/fast-food.png",
    "/fries.png"
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) =>{
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener("fetch",
    event => {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return cachedResponse || fetch(event.request);
            })
        );
    });