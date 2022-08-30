let cacheName = 'v1.0.0';



self.addEventListener('install', e =>{
    console.log("instalando");
    caches.open(cacheName).then(cache =>{
        cache.add('index.html').then(res =>{
            console.log('info en cache');
        }).catch(e => {
            console.log(e);
        });
    });
});

self.addEventListener('activate', ()=>{
    caches.keys().then(key =>  {
        if(key != cacheName){
            return Promise.all(
                key.map( cache =>{
                    if(cache !== cacheName){
                        console.log('cache eliminado');
                        return caches.delete(cache);
                    }
                })
            )
        }
    })
});

//self.addEventListener('error')
self.addEventListener('fetch', ()=>{
    e.respondWith( fetch.request).then(res => {
        console.log('todo bien');
    }).catch(e => caches.match(e.request));
});




/**
self.addEventListener('message', e=>{
    console.log('se recibió el msg', e.data);
};
*/