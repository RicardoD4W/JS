let free = false;

const validarCliente = (time) => {
    let edad = prompt("cual es tu edad?");
    if(edad > 18){
        if(time >=2 && time < 7 && free == false){
            alert("gratis pa");
            free = true;
        }else{
            alert(`son las ${time} pasa y paga`);
        }
    }else{
        alert("menor detectado");
    }
}

validarCliente(3);
validarCliente(3);