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

console.log("🚀 ~ file: main.js ~ line 29 ~ personas", personas);


const obtenerPersona = (id,cb) =>{
    if(personas[id] == undefined){
        cb(`No existe una persona con el id ${id}`);
    }else{
        cb(null, personas[id]);
    }
}


obtenerPersona(0, (err, persona) => {
    if(err){
        return console.log(err);
    }
    persona.saludar();
});