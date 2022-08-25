/*
const reader = new FileReader();


console.log(reader);

const leerFile = (file) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.addEventListener('load', (e) => {
        console.log(e.currentTarget.result);
    });                         //*leer un archivo desde un input
}

const file = document.querySelector('#file');
file.addEventListener('change', (e)=>{
    leerFile(file.files[0]);
});

*/


/*
const reader = new FileReader();


const file = document.querySelector('#file');
    file.addEventListener('change', (e)=>{
    leerFile(file.files); //% remplazamos filees por files porque files es un arreglo de archivos
});


const leerFile = (file) => {

    for (files in file) {
        console.log(file[files]);
        const reader = new FileReader();
        reader.readAsText(file[files]); //% remplazamos reader.readAsText por reader.readAsdataUrl para leer imagenes
        reader.addEventListener('load', (e) => {
        console.log(e.currentTarget.result);
    });             //*leer muchos archivo desde un input
    }
    
}
*/


const reader = new FileReader();


const file = document.querySelector('#file');
    file.addEventListener('change', (e)=>{
    leerFile(file.files); //% remplazamos filees por files porque files es un arreglo de archivos
});


const leerFile = (file) => {

    for (let i=0; i<file.length;i++) {
        const reader = new FileReader();
        reader.readAsDataURL(file[i]); 
        reader.addEventListener('load', (e) => {
        let newImg = `<img src='${e.currentTarget.result}'>`;
        document.querySelector('.resultado').innerHTML += newImg;
        console.log(e.currentTarget.result);
        console.log(file[i]);
    });             //*leer muchos archivo desde un input
    }
    
}
