const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d'); //crea el contexto para la api canvas


ctx.lineWidth = '6';
ctx.strokeStyle = '#48e';
ctx.fillStyle = '#abc';
ctx.strokeRect(30,50, 400,200); //dibuja(left,top,widht.height)
ctx.fillRect(10,20, 400,200) //dibujaRelleno(left,top,widht.height)

ctx.lineTo(100,380);
ctx.lineTo(100,300);
ctx.lineTo(150,300);// la liena en puntos
ctx.lineTo(150,340);
ctx.lineTo(100,340);
ctx.lineTo(150,375);
ctx.stroke();       // unbe los puntos

ctx.closePath(); //cierra la ruta d epntos
ctx.beginPath(); //nuevo punto inmdeèndiemte

ctx.lineTo(200,380);
ctx.lineTo(200,300);
ctx.stroke();

ctx.closePath();
ctx.beginPath();
ctx.arc(200,290, 10,10, 0,360); //(left,top, empezarº, acabarº)
ctx.stroke();

