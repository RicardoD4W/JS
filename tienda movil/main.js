class Tlfno{
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    encender(){
        if(this.encendido == false){
            document.write("encendiendo ... <br>");
            this.encendido = true;
        }else{
            document.write("ya está encendido<br>");
        }
    }
    toString (){
        document.write(`<br><br>Telefono de color: ${this.color}, con un peso de ${this.peso},
         su resolucion de pantalla es: ${this.rdp}x${this.rdp}, su camara tiene una resolucion de ${this.rdc}fps
         su RAM es de ${this.ram}GB y está ${this.encendido}`);
    }

}

class GamaAlta extends Tlfno{
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram);
        this.rdce = rdce;
    }
    grabarLento(){
        document.write("grabando lento")
    }
    toString(){
        super.toString() + document.write("es de gama alta y puede grabar lento");
    }
}


const t1 = new Tlfno("negro","500gr",360,120,16);
const t2 = new GamaAlta("blanco","700gr",320,60,106);



t1.toString();
t1.encender();
t1.toString();
t1.encender();


t2.toString();




console.log("🚀 ~ file: main.js ~ line 2 ~ Tlfno", t1)