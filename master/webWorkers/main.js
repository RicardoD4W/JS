/* Creating a new worker. */
const worker = new Worker("worker.js");



const ejecutarBuble = ()=>{
    worker.postMessage("enviado");

}
document.querySelector('.btn').addEventListener("click", ()=> ejecutarBuble());
worker.addEventListener('message', e => {console.log(e.data);worker.terminate();});
/*

const cargarData = async div =>{
    const req = await fetch("data.json");
    const res = await req.json();
    const arr = res;
    document.querySelector(div).innerHTML = arr;

}

cargarData(".load");


*/