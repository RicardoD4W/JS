if(navigator.serviceWorker){
    navigator.serviceWorker.register("sw.js");
}

navigator.serviceWorker.ready.then(res => res.active.postMessage("hola enviando"));


navigator.serviceWorker.addEventListener('message', e =>{
    console.log('recibido');
});

