const rangoEtario = document.querySelector(".rangoEdad");
rangoEtario.setAttribute("type","text");
rangoEtario.setAttribute("value",130);

document.write("<br>")
let valorAtributo = rangoEtario.getAttribute("type");
//document.write(valorAtributo);

rangoEtario.removeAttribute("value");


const titulo = document.querySelector(".titulo");
titulo.setAttribute("contentEditable", true);
titulo.setAttribute("dir", "rtl");
titulo.style.color = "#a22";
titulo.classList.add("grande");
titulo.classList.remove("grande");
//document.write(titulo.classList.item(1));
//titulo.setAttribute("hidden", false);
titulo.setAttribute("tabIndex", "0");
titulo.setAttribute("title","holaa");
titulo.classList.toggle("grande",true);
titulo.classList.replace("grande","chico");
/* Writing the text content of the element with the class `titulo` to the document. */
document.write(titulo.textContent);
document.write("<br>");
/* Writing the text content of the element with the class `titulo` to the document. */
document.write(titulo.innerText); //solo lo visibe
document.write("<br>");
/* Writing the text content of the element with the class `titulo` to the document. */
document.write(titulo.innerHTML); //te pilla solo el html
document.write("<br>");
/* Writing the text content of the element with the class `titulo` to the document. */
document.write(titulo.outerHTML); //te pilla toda la etiqueta
document.write("<br>");


const input = document.querySelector(".input-normal");
//document.write(input.className);
//document.write(input.type = "range");
//document.write(input.value);
input.accept = "image/png";


const contenedor = document.querySelector(".contenedor");
//document.write(item + "<br>");

//item.appendChild(textoItem);
//contenedor.appendChild(item);
//document.write(item);

const fragmento = document.createDocumentFragment();

for(let i = 0; i<=5;i++){
    const item = document.createElement("LI");//en mayus para q valga
    item.innerHTML = "este está dentro del li";
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento);
document.write("<br><br><br>");

const primerHijo = contenedor.firstElementChild;
const todosHijo = contenedor.childNodes; //con text, si quieres sib texto usar children
document.write(primerHijo);
document.write(todosHijo);

