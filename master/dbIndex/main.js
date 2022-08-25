const IDBRequest1 = indexedDB.open('dbIndex', 1);



IDBRequest1.addEventListener('upgradeneeded', ()=>{
    console.log('upgradeneeded');
    const db = IDBRequest1.result;
    db.createObjectStore('objects', {
        autoIncrement: true
    });
});

IDBRequest1.addEventListener('success', ()=>{
        console.log('success');
        leerObject();
});
IDBRequest1.addEventListener('error', ()=>{
        console.log('error');
}   );

document.querySelector('.add').addEventListener('click', ()=>{
    let nombre = document.querySelector('#name').value;
    if(nombre.length > 0){
        if((document.querySelector('.save-active')) != undefined){
            if(confirm('Hay cambios sin guardar ¿Desea continuar?')){
                addObjects({nombre});
                document.querySelector('#name').value= "";
                leerObject();
            }else{
                
            }
        }else{
            addObjects({nombre});
            document.querySelector('#name').value= "";
            leerObject();
        }
    }
});
//addObjects({nombre});
//leerObject();
//=============================         CRUD         =====================================
const addObjects = (object)=>{
    const IDBData = getIDBData('readwrite', 'agregando objeto');
    IDBData.add(object);
}

const leerObject = ()=>{
    const IDBData = getIDBData('readonly', 'leer objeto');
    const cursor = IDBData.openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector('.nombres').innerHTML = '';
    cursor.addEventListener('success', ()=>{
        if(cursor.result){
            let elemento = nombresHTML(cursor.result.key, cursor.result.value);
            fragment.appendChild(elemento);
            cursor.result.continue();
        }else{
            document.querySelector('.nombres').appendChild(fragment);
        }
    });
}   


const modificarObject = (key, object) =>{
    const IDBData = getIDBData('readwrite', 'modificando objeto');
    IDBData.put(object, key);

}


const eliminarObject = (key)=>{
    const IDBData = getIDBData('readwrite', 'eliminando objeto');
    IDBData.delete(key);
}


const getIDBData = (mode,msg) =>{
    const db = IDBRequest1.result;
    const IDBtransaction = db.transaction('objects', mode);
    const objectStore = IDBtransaction.objectStore('objects');
    IDBtransaction.addEventListener('complete', ()=>{
        console.log(msg);
    }
    );
    return objectStore;
}


const nombresHTML = (id, name) => {
    const container = document.createElement('div');
    const h2 = document.createElement('h2');
    const options = document.createElement('div');
    const saveBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    container.classList.add('nombre');
    options.classList.add('options');
    saveBtn.classList.add('save');
    deleteBtn.classList.add('delete');

    saveBtn.innerHTML = 'Guardar';
    deleteBtn.innerHTML = 'Eliminar';

    h2.innerHTML = name.nombre;
    h2.setAttribute('contenteditable', 'true');
    h2.setAttribute('spellcheck', 'false');

    options.appendChild(saveBtn);
    options.appendChild(deleteBtn);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener('keyup', ()=>{
        saveBtn.classList.replace('save', 'save-active');
    });
    saveBtn.addEventListener('click', ()=>{
        if(saveBtn.className == 'save-active'){
            modificarObject(id, {nombre: h2.innerHTML});
            saveBtn.classList.replace('save-active', 'save');
    }
    });

    deleteBtn.addEventListener('click', ()=>{
        eliminarObject(id);
        document.querySelector('.nombres').removeChild(container);
    
    });

    return container;
}

 


