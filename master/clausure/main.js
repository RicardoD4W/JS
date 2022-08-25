

const cambiarTamaño = (tamaño) =>{ 
    return() =>{
        document.querySelector('.texto').style.fontSize = `${tamaño}px`
    }
}

px12 = cambiarTamaño(12);
px14 = cambiarTamaño(14);
px16 = cambiarTamaño(16);

document.querySelector('.t12').addEventListener('click', px12);
document.querySelector('.t14').addEventListener('click', px14);
document.querySelector('.t16').addEventListener('click', px16);

const suma = (...args) => { // el spread operator permite que se puedan pasar varios argumentos a una función, y va siempre el ultimo argumento
    let resultado = 0;

    for(let i = 0; i < args.length; i++){
        resultado += args[i];
    }
    console.log(resultado);
}

suma(1,3,5,7,9);