const historial = history;

//history.back(); // Regresa a la pagina anterior
//history.forward(); // Regresa a la pagina siguiente
//history.go(-1); // Regresa a la pagina anterior
//history.go(1); // Regresa a la pagina siguiente
//history.length; // Regresa la cantidad de paginas visitadas
// history.pushState(null, null, '/'); // Agrega una nueva pagina a la historia
                //* data, title, url


                history.pushState({nombre: 'pedro'}, "", '?nombre=pedro');


addEventListener('popstate', (e)=>{
    console.log(e.state);
});

// history.replaceState(null, null, '/'); // Reemplaza la pagina actual por una nueva, no se agrega a la historia

console.log(historial);
console.log(location.href);
