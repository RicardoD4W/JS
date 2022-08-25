"use strict";

var materias = {
  fisica: ["perez", "pablo", "ricardo", "maria"],
  programacion: ["perez", "pablo", "ricardo", "maria"],
  logica: ["perez", "pablo", "ricardo", "maria"],
  quimica: ["perez", "pablo", "ricardo", "maria"]
};

var inscribir = function inscribir(alumno, materia) {
  personas = materias[materia];
  personas.shift();
  alumnos = personas;

  if (alumno.length >= 20) {
    document.write("lo siento ".concat(alumno, ", las clases de ").concat(materia, " est\xE1n llenas"));
  } else {
    if (materia == "fisica") {
      materias = {
        fisica: alumnos,
        programacion: materias["programacion"],
        logica: materias["logica"],
        quimica: materias["quimica"]
      };
    }

    document.write("Felicidades ".concat(alumno, " entraste a la clase de ").concat(materia));
  }
};

inscribir("Eduardo", "fisica");