


const obeternInfo = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)} , Math.random() * 1000);
    })
}

 mostrarInfo = async ()=>{
    const info = await obeternInfo('Hola');
    const info2 = await obeternInfo('Adios');
    console.log(info);
    console.log(info2);
 }

 mostrarInfo();