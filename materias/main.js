let materias = {
    fisica:         ["perez","pablo","ricardo","maria"],
    programacion:   ["perez","pablo","ricardo","maria"],
    logica:         ["perez","pablo","ricardo","maria"],
    quimica:        ["perez","pablo","ricardo","maria"]
}

const inscribir = (alumno,materia) =>{
    personas = materias[materia];
    personas = personas;
    if(personas.length >= 20){
        document.write(`lo siento ${alumno}, las clases de ${materia} están llenas`);
    }else{
        personas.push(alumno);
        if(materia == "fisica"){
            materias = {
                fisica:         personas,
                programacion:   materias["programacion"],
                logica:         materias["logica"],
                quimica:        materias["quimica"]
            }
        }
        document.write(`Felicidades ${alumno} entraste a la clase de ${materia}`);
    }
}

document.write(materias["fisica"] + "<br><br>");
inscribir(prompt("nombre"),prompt("asignatura"));
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
inscribir("Eduardo","fisica");
document.write("<br><br>"+materias["fisica"] + "<br><br>");
inscribir("Eduardo","fisica");