/*function prueba(callback){
    callback("hola");
}
function decirNombre(nombre){
    console.log(nombre);
}

prueba(decirNombre); 

prueba(function (nombre){
    console.log(nombre);
});

prueba ( nombre => console.log(nombre));


class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}



const personas = [
    ["juan", "perez"],
    ["maria", "lopez"],
    ["jose", "gonzalez"]
];

for(let i = 0; i< personas.length; i++){
    let persona = new Persona(personas[i][0], personas[i][1]);
    console.log(persona);
}

const obtenerPersona = (id, callback) => {
    if(personas[id] == undefined){
        callback(console.log("No existe la persona"));
    }else{
        callback(null, personas[id].nombre, id);
    }
}

obtenerPersona(0,(err, persona,id)=>{
    if(err){
        console.log(err);
    }else{
        console.log(persona.nombre);
    }

});
*/

/*
let nombre = "jusan";
const promise = new Promise((resolve, reject) => {
    if(nombre == "juan"){
        resolve("Hola");
    }else{
        reject("Error");
    }
}).then(result => console.log(result)).catch(err => console.log(err));

*/