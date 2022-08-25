let cadena = "0cadena de prueba";

resultado = cadena.concat(" hola");
document.write(resultado);

document.write("<br>")

for(let i = 0; i<=resultado.length;i++){
    document.write(i+" ");
}

document.write("<br><br>")

resultado = cadena.startsWith(0); //tanto literal como string
document.write(resultado);

document.write("<br><br>")

resultado = cadena.endsWith(" "); //tanto literal como string
document.write(resultado);


document.write("<br><br>")

resultado = cadena.includes("d");
document.write(resultado);


document.write("<br><br>")
resultado = cadena.indexOf("012");
document.write(resultado);

document.write("<br><br>")
resultado = cadena.padStart(19,"_"); //rellena cuantos c aracteres ponfgas con  una cadena al principio
document.write(resultado);

document.write("<br><br>")
resultado = cadena.padEnd(19,"_"); //rellena cuantos c aracteres ponfgas con  una cadena al final
document.write(resultado);

document.write("<br><br>")
resultado = cadena.repeat(2); //repite una cadena
document.write(resultado);

document.write("<br><br>")
resultado = cadena.split(" "); //rellena cuantos c aracteres ponfgas con  una cadena al principio
document.write(resultado);