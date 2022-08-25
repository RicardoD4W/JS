let nombres = ["pedro","ricardo","maria"];

document.write(nombres + "<br> <br>");
let resultado = nombres.pop(); //elimina y devuelve la ult pos del array

document.write(resultado + "<br> <br>");

resultado = nombres.shift(); //elimina y devuelve el primero pos del array
document.write(resultado + "<br> <br>" );

/* Adding the string "juan" to the end of the array. */
resultado = nombres.push("juan");
document.write(resultado + "<br>" );
document.write(nombres + "<br> <br>" );

/* Reversing the array. */
document.write(resultado + "<br> <br>" );

/* Adding the numbers 0, 3, 1, and 2 to the beginning of the array. */
resultado = nombres.unshift(0,3, 1, 2);
document.write(nombres + "<br> <br>" );

/* Sorting the array in ascending order. */
nombres.sort();
document.write(nombres+ "<br> <br>" );

/* Removing 3 elements starting at index 1 and replacing them with the strings "h", "o", "l", and "a". */
/* Removing 2 elements starting at index -1 and replacing them with the strings "h", "o", "l", and "a". */
/* Adding the strings "h", "o", "l", and "a" to the end of the array. */
nombres.splice(-1,0,"h","o","l","a");
document.write(nombres + "<br> <br>" );

let frutas = ["pera", "manzana", "piña"];
/* Joining the array elements into a string, separated by the string "<br>elemento: ". */
nombres = frutas.join("<br>elemento: ");
document.write("elemento: "+nombres + "<br> <br>" );

document.write(frutas.slice(1,-1) + "<br> <br>" );

/* Filtering the array and writing the results to the document. */
//numero variable q se crea, q en cada vuelta vale la sig pos del array
//filter recibe como parametro una f(x)
resultado = frutas.filter(numero => frutas.length >= 4);
document.write(resultado);



