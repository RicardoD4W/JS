


addEventListener('message', e => {
    console.log(e.data)
    postMessage("recibido")
});