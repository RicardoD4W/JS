const alumnos = [
    {
        nombre: "Juan1",
        email: "juan1@gmail.com",
        materia : "Matematicas"
    },{
        nombre: "Juan2",
        email: "juan2@gmail.com",
        materia : "Matematicas"
    },{
        nombre: "Juan3",
        email: "juan3@gmail.com",
        materia : "Matematicas"
    },{
        nombre: "Juan4",
        email: "juan4@gmail.com",
        materia : "Matematicas"
    },{
        nombre: "Juan5",
        email: "juan5@gmail.com",
        materia : "Matematicas"
    }
]


for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida" name="" id="">
            <option value="1">Semana 1</option>
            <option value="2">Semana 2</option>
        </select>
    </div>`;

document.querySelector(".grid-container").innerHTML += htmlCode;
}

const boton = document.querySelector(".confirmar");

boton.addEventListener("click", () => {
    let elementos = document.querySelectorAll(".semana");
    let semanaElegida = document.querySelectorAll(".semana-elegida");
    document.body.removeChild(boton);
    for(elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML =  semanaElegida[elemento].value;
    }
});