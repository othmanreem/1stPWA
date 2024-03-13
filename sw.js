var casheName = "static-resources"
var resources = [
    "/",
    "/index.html",
    "/src/css/style.css",
    "/src/js/Main.js",
    "/src/js/Game.js",
    "/src/js/Element.js",
    "/src/js/Events.js",
    "/src/js/CountDown.js",
    "/src/js/Round.js",
    "/src/js/Score.js",
    "/src/js/countdown.mp3",
    "/src/js/sec.mp3"

];


self.addEventListener("install", function(event){
    console.log('sw installed')
    event.waitUntil(
        caches.open(casheName)
        .then(function(cache){
            cache.addAll(resources);
            console.log('resources changed'); 
           
        })
    );
})
//
self.addEventListener("activate", function (event){
    console.log('sw active');
})
//
self.addEventListener("fetch", function (event){
  //console.log('sw fetches', event);
  event.respondWith(
    caches.match(event.request)
    .then(function(cacheResponse){
        return cacheResponse || fetch(event.request);
    })
  )
})