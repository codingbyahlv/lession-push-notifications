self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('Service worker installed ', new Date().toLocaleTimeString());
});

self.addEventListener('activate' , (event) => {
  self.skipWaiting();
  console.log('Service worker activated ', new Date().toLocaleTimeString());
});

//eventet triggas när webPush i index.js i push-service triggas
self.addEventListener('push', (event) => {
  //använder notisapi
  
  self.registration.showNotification('Push notis', {
    //notisen innehåller det vi skrivit i push service index
    body: event.data.text()
  });
});

