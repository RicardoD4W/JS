const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
        let resultado, info, estado;
    try{
        prev = parseInt(document.getElementById('nota3').value);

        resultado = veriAp(prev);
        info = veriAp2(prev);
        estado = media();
    }catch(error){ resultado= error;
                    info = error;
                }
    abrirModelo(resultado,info,estado);
});





const veriAp = (prev)=>{
    let resultado;
    switch(prev){
        case 1: resultado = 1;
                break;
        case 2: resultado = 2;
                break;
        case 3: resultado = 3;
                break;
        case 4: resultado = 4;
                break;
        case 5: resultado = 5;
                break;
        default: resultado = prev;
    }
    return resultado;
}
const veriAp2 = (prev)=>{
    let info;
    switch(prev){
        case 1: info = "Muy deficiente";
                break;
        case 2: info = "Insuficiente";
                break;
        case 3: info = "Suficiente";
                break;
        case 4: info = "Bien";
                break;
        case 5: info = "Muy bien";
                break;
        case 6: info = "Excelente";
                break;
        case 7: info = "Sobresaliente";
                break;
        case 8: info = "Matricula de honor";
                break;
        case 9: info = "Matricula de honor";
                break;
        case 10: info = "Matricula de honor";
                break;
        default: info = "Error";
    }
    return info;
}

const media = ()=>{
    let n1 = parseInt(document.getElementById('nota').value);
    let n2 = parseInt(document.getElementById('nota2').value);
    let n3 = parseInt(document.getElementById('nota3').value);

    let estado = parseFloat((n1 +n2 +n3)/3);
    if(estado >= 5){
        return estado= `<span class= 'green'>APROBADO con un ${estado} de media :)</span>`;
    }else{
        return estado= `<span class= 'red'>REPROBADO con un ${estado} de media :(</span>`;
    }
}

const nota = document.getElementById('nota');

const abrirModelo = (resultado,info, estado)=>{
    document.querySelector('.resultado').innerHTML = "Exámen final: " +  resultado;
    document.querySelector('.msg').innerHTML = info;
    document.querySelector('.estado').innerHTML = estado;

    let modelo = document.querySelector('.modelo-back');
    modelo.style.display = "flex";
    modelo.style.animation = "aparecer 1s forwards";
}