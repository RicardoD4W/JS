
const cajas = document.querySelectorAll('.caja')


const verifyVisibility = (entries) => {
   for(entry of entries){
        if(entry.isIntersecting) console.log("se esta viendo la caja", entry.target.textContent )
   }
}

const options = {
    //root
    //rootMargin
    //treshold
}

const observer = new IntersectionObserver(verifyVisibility, options)


for (const caja of cajas) {
    observer.observe(caja);
   // console.log(caja);

}