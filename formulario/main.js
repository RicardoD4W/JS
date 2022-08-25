const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asignatura = document.getElementById('asignatura');
const submit = document.getElementById('submit');
const resultado = document.getElementById('resultado');




submit.addEventListener('click', (e) => {
    e.preventDefault();

    let error = validarCampos();
    if (error[0] == true) {
        resultado.classList.add("error");
        resultado.innerHTML = error[1];
    } else {
        resultado.classList.add("correcto");
        resultado.classList.remove("error");
        resultado.innerHTML = 'Formulario enviado correctamente';
    }
});


const validarCampos = () => {
    let error = [];
    if(nombre.value.length < 3){
        error[0] = true;
        error[1] = 'El nombre debe tener al menos 3 caracteres';
        return error;
    }
    if(nombre.value.length > 20){
        error[0] = true;
        error[1] = 'El nombre debe tener menos de 20 caracteres';
        return error;
    }
    error[0] = false;
    return error;
};
