/* Creating a new instance of the `MediaQueryList` object. */
const mq = matchMedia("(max-width: 500px)"); //verifica la media  qindicas
const caja = document.querySelector('.caja');




mq.addEventListener("change", ()=>{

    /* Checking if the media query matches the current screen size. If it does, it replaces the class
    of the element with the class responsive-caja. If it doesn't, it replaces the class with caja. */
    if(mq.matches) caja.classList.replace('caja','responsive-caja');
    else caja.classList.replace('responsive-caja', 'caja');
})


