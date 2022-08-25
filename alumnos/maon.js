
let cantidad = prompt("¿Cuántos alumnos son?");
let alumnosTotales = [];


for(i = 0; i< cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno "+i),0];
}


const tomarAsistencia = (nombre, p) =>{

    let presencia = prompt(nombre);
    if(presencia == "p"){
        alumnosTotales[p][1]++;
    }
}


for(i = 0; i< 5; i++){

    for(alumno in alumnosTotales){

        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}


for(alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}: <br>
    ______________Presentes: ${alumnosTotales[alumno][1]} <br>
    ______________Ausencias: ${5 - alumnosTotales[alumno][1]}
    `;

    if(5 - alumnosTotales[alumno][1] > 3){
        resultado += "<b style= 'color:red'> SUSPENSO POR FALTAR </b> <br><br>";
    }else{
        resultado += "<br><br>";
    }

    document.write(resultado);
}

