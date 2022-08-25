class Animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años
        y soy de color ${this.color} <br>`;
    }

    saludar(){
        document.write(this.info);
    }
}


class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = null;
    }

    static inf(){
      //  alert("soy un perro de la clase perro");
    }
    set setEspecie (newEspecie){
        this.especie = newEspecie;
    }
    set setEdad (newEdad){
        this.edad = newEdad;
    }
    get getEdad(){return this.edad;}
}



const perro = new Animal("perro", 5, "rojo");
const perro1 = new Perro("perro", 5, "rojo");

perro1.setEspecie = "Paco";
perro1.setEdad = 17;
perro1.getEdad;
console.log("🚀 ~ file: main.js ~ line 42 ~ perro1.getEdad", perro1.getEdad)


const perro2 = new Perro();

perro.saludar();
perro1.saludar();

console.log(perro);
console.log(perro1);
console.log(perro2);
Perro.inf();
/*
let array = {
    nombre: "Ricardo",
    apellido: "Rodriguez"
};
document.write( array["apellido"])
*/
