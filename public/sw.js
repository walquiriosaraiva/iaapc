const CACHE_NAME = 'iaapc-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
];

// Instalar o service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache aberto');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Ativar o service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Limpando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interceptar requisições
self.addEventListener('fetch', (event) => {
  // Ignorar requisições que não são GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Usar estratégia "network first, fallback to cache"
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Se a resposta for válida, fazer cache
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      })
      .catch(() => {
        // Se a requisição falhar, tentar usar o cache
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          // Se não tiver no cache, retornar uma página offline genérica
          return new Response('Você está offline. Por favor, verifique sua conexão de internet.');
        });
      })
  );
});
