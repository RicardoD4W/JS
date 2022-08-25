const cuadrado = document.querySelector('.cuadrado');
const circulo = document.querySelector('.circulo');


/**
circulo.addEventListener('dragstart', ()=>console.log('dragstart'));
circulo.addEventListener('drag', ()=>console.log('drag'));
circulo.addEventListener('dragend', ()=>console.log('dragend'));

cuadrado.addEventListener('dragstart', ()=>console.log('dragstart'));
cuadrado.addEventListener('drag', ()=>console.log('drag'));
cuadrado.addEventListener('dragend', ()=>console.log('dragend'));
*/

/**
cuadrado.addEventListener('dragenter', ()=>console.log('dragenter'));
cuadrado.addEventListener('dragover', ()=>console.log('dragover'));
cuadrado.addEventListener('dragleave', ()=>console.log('dragleave'));
cuadrado.addEventListener('drop', ()=>console.log('drop')); //* drop es el evento que se ejecuta cuando se suelta un elemento sobre otro
*/
/**

circulo.addEventListener('dragstart', (e)=>{
    e.dataTransfer.setData('text-plain', e.target.className);
//    console.log(e.dataTransfer.getData('text-plain'));
});

cuadrado.addEventListener('drop', (e)=>{ 
    console.log(e.dataTransfer.getData('text-plain'));
});
*/




const zona = document.querySelector('.zona');
zona.addEventListener('dragover', (e)=>{
    e.preventDefault();

})

zona.addEventListener('drop', (e)=>{
    let n = e.dataTransfer.getData('textura');
    zona.style.background = `url(texturas/${n}.webp)`;
})
 


for (let i = 0; i < document.querySelector('.texturas').children.length; i++) {
    let n  = i + 1;
    document.querySelector(`.textura${n}`).addEventListener('dragstart', (e)=> cambiarTextura(n,e));   
}


const cambiarTextura = (n,e)=>{
    e.dataTransfer.setData(`textura`, n);
}