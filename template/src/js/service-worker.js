const activate = async function(){
  const keys = await caches.keys();
  const toDelete = keys.filter(k => k !== version);

  if(!toDelete.length)
    return Promise.resolve();

  // Delete all previous caches
  return Promise.all(toDelete.map(k => caches.delete(k)));
};

const fetchWithCache = async function(request){
  if(!request.url.includes("cowtech.it")) // Don't try to cache external resources
    return fetch(request);

  // Search in the cache
  const cache = await caches.open(version);
  let cachedResponse = await cache.match(request);

  if(cachedResponse)
    return cachedResponse;

  // Not found, make a real call
  const fetchRequest = request.clone(); // Clone is needed in order to consume stream from both browser and cache
  const response = await fetch(fetchRequest);
  cachedResponse = response.clone(); // Clone is needed in order to consume stream from both browser and cache

  // Request failed
  if(!response.ok)
    throw new Error(`Request failed with error ${response.status}`);

  // Save in the cache and then return to the client
  await cache.put(request, response);

  return cachedResponse;
};

self.addEventListener("activate", event => {
  event.waitUntil(activate());
});

self.addEventListener("fetch", event => {
  event.respondWith(fetchWithCache(event.request));
});
