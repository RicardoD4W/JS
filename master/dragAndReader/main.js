const zona = document.querySelector('.zona-arrastre');
zona.addEventListener('dragover', e=>{
    e.preventDefault();
    changeStyle(e.srcElement, '#444');
});
zona.addEventListener('dragleave', e=>{
    e.preventDefault();
    changeStyle(e.srcElement, '#888');
});
zona.addEventListener('drop', e=>{
    e.preventDefault();
    changeStyle(e.srcElement, '#888');
    if(e.dataTransfer.files.length > 0){
        let ar = e.dataTransfer.files[0];
        if(ar.type.includes('image')){
            cargarArchivo(ar);
        }else if(ar.type.includes('video')){
            cargarVideo(ar);
        }
    }
   // cargarArchivo(e.dataTransfer.files[0]);
   // cargarVideo(e.dataTransfer.files[0]);
    zona.style.border = '4px solid #888';

});


const changeStyle = (element, color)=>{
    element.style.color = color;
    element.style.border = `4px dashed ${color}`;
}

const cargarArchivo = ar =>{
    const reader = new FileReader();
    reader.readAsDataURL(ar);
    reader.addEventListener('load', e=>{
        let carga = Math.round(e.loaded / ar.size) * 100; //!
        zona.textContent = `${carga}%`;
        document.querySelector('.barra-carga').style.width = `${carga/2}%`;
        document.querySelector('.barra-carga').style.padding = '75px 20px';

        });
        reader.addEventListener('loadend', e=>{
            changeStyle(zona, '#4f9');
            zona.style.border = '4px solid #4f9';
            document.querySelector('.barra-carga').style.background = '#4f9';
            setTimeout(()=>{
                zona.style.color = '#fff';
                zona.style.animation = 'aparecer 1s forwards';
                zona.textContent = '¡Carga completa!';
            }, 0.5);
        });
    reader.addEventListener('load', e=>{
        let url = URL.createObjectURL(ar);
        let img = document.createElement('img');
        img.setAttribute('src', url);
        document.querySelector('.resultado').appendChild(img);
    });
}




const cargarVideo = ar =>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener('load', e=>{
        let carga = Math.round(e.loaded / ar.size) * 100; //!
        zona.textContent = `${carga}%`;
        document.querySelector('.barra-carga').style.width = `${carga/2}%`;
        document.querySelector('.barra-carga').style.padding = '75px 20px';

        });
        reader.addEventListener('loadend', e=>{
            changeStyle(zona, '#4f9');
            zona.style.border = '4px solid #4f9';
            document.querySelector('.barra-carga').style.background = '#4f9';
            setTimeout(()=>{
                zona.style.color = '#fff';
                zona.style.animation = 'aparecer 1s forwards';
                zona.textContent = '¡Carga completa!';
            }, 0.5);
        });
    reader.addEventListener('load', e=>{
        let video = new Blob([new Uint8Array(e.currentTarget.result)], {type: 'video/mp4'});
        let url = URL.createObjectURL(video);
        let img = document.createElement('video');
        img.setAttribute('src', url);
        img.setAttribute('controls', true);
        document.querySelector('.resultado').appendChild(img);
    });
}