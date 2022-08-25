const objeto = {
    propiedad1 : "valor 1",
    propiedad2 : "valor 2",
    propiedad3 : "valor 3"
}


const obtenerInfo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(objeto)} , 1000);
    })
}


//obtenerInfo().then(resultado => console.log(resultado));

//resultado = await obtenerInfo();
const mostrarInfo = async () => {
    const resultado = await obtenerInfo();
    console.log(resultado);
}

mostrarInfo();