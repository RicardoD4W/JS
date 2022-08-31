const crearCookies = (name, expire, path, age) =>{
    document.cookie = `${name};expires=${expire};path=${path};max-age=${-age}`;
}




const obtenerCookies = cookieN =>{
    let cookies = document.cookie;
    cookies = cookies.split(';');
    for (let i = 0; cookies.length > i; i++) {
        cookie = cookies[i].trim();
        if(cookie.startsWith(cookieN)){
            return cookie.split('=')[1];
        }else {return cookieN;}}
    }


    if(obtenerCookies("acceptedCookies") != "si"){
        setTimeout(()=>{
            document.querySelector('.bg-modal').style.opacity = '1';
            document.querySelector('.bg-modal').style.zIndex = '10';
            document.querySelector('#si').addEventListener('click', ()=>{
                crearCookies("acceptedCookies=si", 30);
                document.querySelector('.bg-modal').style.opacity = '0';
                setTimeout(()=>{
                    document.querySelector('.bg-modal').style.zIndex = '-1';
                },1000);
            });
            document.querySelector('#no').addEventListener('click', ()=>{
                crearCookies("acceptedCookies=no", 30);
                document.querySelector('.bg-modal').style.opacity = '0';
                setTimeout(()=>{
                    document.querySelector('.bg-modal').style.zIndex = '-1';
                },1000);
            });
        },200);
    }