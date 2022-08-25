
const publicaciones = document.querySelector('.publicaciones');
let j = 0;
let comprub = false;

const createPublicationCode = (name,content) =>{
    const container = document.createElement('div');
    const h3 = document.createElement('h3');
    const comentarios = document.createElement('div');
    const btnEnviar = document.createElement('input');
    const btnComentario = document.createElement('input');
    const contenido = document.createElement('p');


    btnEnviar.type = 'submit';

    container.classList.add('publicacion');
    comentarios.classList.add('comentarios');
    btnEnviar.classList.add('enviar');
    btnComentario.classList.add('comentario');

    btnComentario.setAttribute("placeholder", "que piensas?");
    h3.textContent = name;
    contenido.textContent = content;
    btnEnviar.setAttribute("value","publicar comentario")
    contenido.setAttribute("width","600px")

    comentarios.appendChild(btnComentario);
    comentarios.appendChild(btnEnviar);

    container.appendChild(h3);
    container.appendChild(contenido);
    container.appendChild(comentarios);

    return container;
}

const cargarMasPublis = (entry) =>{
    if(entry[0].isIntersecting) cargarPublis(2);
}

const observer = new IntersectionObserver(cargarMasPublis);

const cargarPublis = async num =>{
    const request = await fetch('info.json');
    const content = await request.json();
    const arr = content.content;
    const documentFragment = document.createDocumentFragment();

    for (let i = 0; i < num; i++) {
        if(arr[j] != undefined){
            newPublicacion = createPublicationCode(arr[j].nombre, arr[j].contenido);
            documentFragment.appendChild(newPublicacion);
            j++;
            if(i == num-1) observer.observe(newPublicacion);
        }else{
            if(!comprub){
                let noMore = document.createElement("h3");
                noMore.textContent = "No hay mas publicaciones";
                documentFragment.appendChild(noMore);
                publicaciones.appendChild(documentFragment);
                comprub = true;
            }else{
            }
        }
    }
    publicaciones.appendChild(documentFragment);
}


cargarPublis(7);