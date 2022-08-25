const contenedor = document.querySelector(".flex-conteiner");

let cont = 0;

const crearLlave = (nombre, modelo, precio) =>{
    cont++;
    img = "<img class='llave-img'  src='llave.png'>";
    nombre = `<h2>${nombre}<h2>`;
    modelo = `<h3 id=${modelo}>${modelo}<h3>`;
    precio = `<p>Precio: <b>${precio}€</b><p>`;
    return [img,nombre,modelo,precio];
}


let documentFragment = document.createDocumentFragment();

for(let i = 0; i< 20; i++){

    /* Generating a random number between 0 and 10000. */
    let randomModelo = Math.round(Math.random()*10000);
    let randomPrecio = Math.round(Math.random()*10+30);

    let llave = crearLlave(`llave ${i+1}`,`modelo ${randomModelo}`,randomPrecio);
    let div = document.createElement("DIV");
    div.addEventListener("click", () => {document.querySelector(".key-data").value = randomModelo;});
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`);
    div.innerHTML = llave[0]+llave[1]+llave[2]+llave[3];
    //div.innerHTML = ...llave; <-- porq no funciona el spread? solo dios sabe
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);

function buscarLlave(){
    let busqueda = document.querySelector(".key-data").value;
    let llave = document.querySelector(`.item-${busqueda}`);
    llave.classList.add("llave-seleccionada");
    llave.focus();
    llave.scrollIntoView({behavior: "smooth"});
}

