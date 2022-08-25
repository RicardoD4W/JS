export class Clase{
    constructor(ej){
        this.ej = ej;
        this.bol = false;
    }
    toString(){
        document.write(`ej: ${this.ej}
                        bol: ${this.bol}`);
    }
}