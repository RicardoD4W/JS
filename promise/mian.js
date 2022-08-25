/*let nombre = 'Juan';

const promise = new Promise((resolve, reject) => {
    if (nombre === 'Juan') {
        resolve('¡El nombre es Juan!');
    } else {
        reject('El nombre no es Juan');
    }
}).then( (resultado)=>{
    console.log(resultado);
}).catch( (error)=>{
    console.log(error);
});


// el .then es sloo cuando entra en el resolve*/


class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(fn) {
        var mensaje = `Hola, me llamo ${this.nombre} ${this.apellido}`;
        if (fn) {
            mensaje += ` ${fn(this.altura)}`;
        }
        console.log(mensaje);
    }
}

const datosPersonas = [
    ['Juan', 'Perez', 1.80],
    ['Maria', 'López', 1.70],
    ['Pedro', 'Gonzalez', 1.90],
    ['Juan', 'Gómez', 1.85],
    ['Maria', 'Pérez', 1.75]
]
const personas = [];

for (let i = 0; i< datosPersonas.length; i++) {
    personas[i] = new Persona(datosPersonas[i][0], datosPersonas[i][1], datosPersonas[i][2]);
}


const obtenerPersona = (id) =>{
    return new Promise((resolve, reject) => {

        if (personas[id] != undefined) {
            resolve(personas[id]);
        } else {
            reject(`No existe una persona con el id ${id}`);
        }
    })/*.then( (persona)=>{
        return persona;
    }).catch( (error)=>{
        console.log(error);
    }
);*/}


obtenerPersona(0).then((persona)=>{console.log(persona)}).catch((error)=>{console.log(error)});
console.log("🚀 ~ file: mian.js ~ line 42 ~ personas", personas);
