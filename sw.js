// Network-first: immer die neueste Version laden, offline auf den Cache zurückfallen.
const DATEIEN = ['./', 'index.html', 'fragen.js', 'manifest.json', 'icon.svg'];

self.addEventListener('install', e => e.waitUntil(caches.open('zeitreise').then(c => c.addAll(DATEIEN))));

self.addEventListener('fetch', e => e.respondWith(
  fetch(e.request)
    .then(antwort => {
      const kopie = antwort.clone();
      caches.open('zeitreise').then(c => c.put(e.request, kopie));
      return antwort;
    })
    .catch(() => caches.match(e.request))
));
