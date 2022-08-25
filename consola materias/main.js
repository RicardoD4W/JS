let materias = {
    fisica:     [90,6,3,"fisica"],  //asistencia, nota, trabajos
    matematicas:[80,6,3,"matematicas"],
    logica:     [90,6,3,"logica"],
    quimica:    [90,6,3,"quimica"],
    bbdd:       [00,6,3,"bbdd"]
}


const asistencia = () =>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        if(asistencias >= 90){
            console.log(materias[materia][3]);
            console.log("%cAprobado", "color:green;");
        }else{
            console.log(materias[materia][3]);
            console.log("%cSuspenso", "color:red;");
        }
    }
}

asistencia();