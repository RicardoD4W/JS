/* Selecting the button element and adding an event listener to it. The event listener is listening for
a click event. When the click event occurs, the alert function is called. */
const button = document.querySelector('.button');

button.onclick = () => {
    alert('Hola mundo');
};


/* Adding an event listener to the button2 element. The event listener is listening for a click event.
When the click event occurs, the alert function is called. */
const button2 = document.querySelector('.button2');

button2.addEventListener('click', () => {
    alert("hola");

});

/*
const saludar = ()=>{
    alert("hola");
}
button2.removeEventListener('click',saludar);*/


/* The above code is adding an event listener to the button3 element. The event listener is listening
for a click event. When the click event occurs, the event object is logged to the console. */
const button3 = document.querySelector('.button3');
button3.addEventListener('click', (event) => {
    console.log(event);
});


const button4 = document.querySelector('.button4');
const contenedor = document.querySelector('.contenedor');

button4.addEventListener('click', (event) => {
    alert("click boton 4");
    event.stopPropagation();
});

contenedor.addEventListener('click', () => {
    alert("click contenedor");
});


const button5 = document.querySelector('.button5');
button5.addEventListener('dblclick', (event) => {
    alert("doble click");
});

const button6 = document.querySelector('.button6');
button6.addEventListener('mouseover', (event) => {
    alert("mouse over");
});

const button7 = document.querySelector('.button7');
button7.addEventListener('mouseout', (event) => {
    alert("mouse out");
});

const button8 = document.querySelector('.button8');
button8.addEventListener('contextmenu', (event) => {
    alert("context menu");
});

const button9 = document.querySelector('.button9');
button9.addEventListener('mousedown', (event) => {
    alert("mouse down");
});

const button10 = document.querySelector('.button10');
button10.addEventListener('mouseup', (event) => {
    alert("mouse up");
});


const button11 = document.querySelector('.button11');
button11.addEventListener('mousemove', (event) => {
    alert("mouse move");
});

const button12 = document.querySelector('.button12');
button12.addEventListener('wheel', (event) => {
    alert("wheel");
});


const input = document.querySelector('.input');
input.addEventListener('keydown', (event) => {
    alert("key down");
});
input.addEventListener('keyup', (event) => {
    alert("key up");
});
input.addEventListener('keypress', (event) => {
    alert("key press");
});/*
input.addEventListener('focus', (event) => {
    alert("focus");
});
input.addEventListener('blur', (event) => {
    alert("blur");
});*/
input.addEventListener('change', (event) => {
    alert("change");
});
input.addEventListener('input', (event) => {
    alert("input")});


/*
const img = document.querySelector('.img');
addEventListener('load', (event) => { // el windows no hace falta nombralo
    alert("load");
});*//*
img.addEventListener('error', (event) => {
    alert("error");
});
*/
const scroll = document.querySelector('.scroll');
scroll.addEventListener('scroll', (event) => {
    console.log(scroll.scrollTop);
});

const area = document.querySelector('.area');
const area2 = document.querySelector('.area2');

area.addEventListener('select', (event) => {
    let start = event.target.selectionStart;
    let end = event.target.selectionEnd;
    let textoCompleto = area.value;
    console.log(textoCompleto.substring(start, end));
    area2.value = textoCompleto.substring(start, end);
});





const parrafo1 = document.querySelector('.parrafo1');
const parrafo2 = document.querySelector('.parrafo2');
const meme = "Wenomecha insama Tumajar bisaun Wifen looof Eselifter braun";
i = 0;
parrafo1.addEventListener('keydown', (event) => {

        parrafo2.innerHTML += meme[i];
        i++;
        if(i == meme.length){
            i = 0;
        }


});


/* Creating a constant called temporizador and setting a timeout for 3 seconds. After 3 seconds, the
document will write "Hola mundo" */
const temporizador = setTimeout(() => {document.write("<h1>Hola mundo</h1>")}, 3000);
/* Clearing the timeout. */
clearTimeout(temporizador);

const intervalo = setInterval(() => { document.write("<h1>Hola mundo</h1>") }, 3000);
clearInterval(intervalo);