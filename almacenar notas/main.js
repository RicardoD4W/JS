const materiasHTML = document.querySelector('.materias');

const materias = [
    {
        nombre : '1 Matematicas',
        nota : 1
    }, {
        nombre : '2 Matematicas',
        nota : 2
    } ,{
        nombre : '4 Matematicas',
        nota : 41
    } ,{
        nombre : '4 Matematicas',
        nota : 42
    } ,{
        nombre : '5 Matematicas',
        nota : 5
    } ,{
        nombre : '7 Matematicas',
        nota : 7
    }
];

const obtenerMateria = (id) =>{
    return new Promise((resolve, reject) => {
        materia = materias[id];
        if(materia== undefined){
            reject('No existe la materia');
        } else {
            setTimeout( ()=>resolve(materia), Math.random() * 5000);        }
    })
}

const obtenerMateria2 = async () => {
    let materia = [];
    for(let i = 0; i< materias.length; i++){
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `<div class="materia">
        <div class="nombre">${materia[i].nombre}</div>
        <div class="nota">${materia[i].nota}</div>
    </div>`;
    materiasHTML.innerHTML += newHTMLCode;
    }
}

obtenerMateria2();