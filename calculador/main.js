

const sumar = (x,y) => {
    resultado = parseFloat(x) + parseFloat(y);
    return resultado;
}

const restar = (x,y) => {
    resultado = parseFloat(x) - parseFloat(y);
    return resultado;
}

const multiplicar = (x,y) => {
    resultado = parseFloat(x) * parseFloat(y);
    return resultado;
}

const dividir = (x,y) => {
    resultado = parseFloat(x) / parseFloat(y);
    return resultado;
}

const exponencial = (x,y) => {
    resultado = parseFloat(x) ** parseFloat(y);
    return resultado;
}


alert("¿operacion?");
let operacion = prompt(`1.- suma, 2.- resta, 3.- multiplicacon,
4.- division, 5.- exponente`);
let x = prompt("1er num?");
let y = prompt("2ndo num?");


switch(operacion){
    case "1":

        alert(sumar(x,y));
        break;
    case "2":
        alert(restar(x,y));
        break;
    case "3":
        alert(multiplicar(x,y));
        break;
    case "4":
        alert(dividir(x,y));
        break;
    case "5":
        alert(exponencial(x,y));
        break;
}

