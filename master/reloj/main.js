
const addCero = (n) =>{
    if(n.toString().length < 2) return '0'.concat(n);
    return n;
}


// *(n.toString().length < 2) ? '0'.concat(n) : n;

const actHora = ()=> {
    const time = new Date();

    let hora = time.getHours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();

    document.querySelector('.hora').textContent = hora;
    document.querySelector('.min').textContent = minutos;
    document.querySelector('.seg').textContent = addCero(segundos);
}

actHora();
setInterval(actHora, 1000);