// Guarda la app en el iPhone para que funcione sin internet.
// Si cambias algún archivo, sube el número de versión.
const CACHE = "migym-v7";
const FILES = ["./", "index.html", "programs.js", "manifest.json", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "InstrumentSerif-Regular.ttf"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Primero intenta la red (para recibir actualizaciones); si no hay internet, usa la copia guardada.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = e.request.url;
  if (url.includes("fonts.googleapis.com") || url.includes("fonts.gstatic.com")) {
    // Fuentes: usa la copia guardada si existe (funciona sin internet)
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const c = res.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return res; })));
    return;
  }
  e.respondWith(
    fetch(e.request, { cache: "no-store" }).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});
