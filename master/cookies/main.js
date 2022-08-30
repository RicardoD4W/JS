const crearCookies = (name, expire, path, age) =>{
    document.cookie = `${name};expires=${expire};path=${path};max-age=${-age}`;
}


crearCookies('usuario=ricky','MON 05 OCT 2022 12:00:00 UTC', '/', '');


const obtenerCookies = cookieN =>{
    let cookies = document.cookie;
    cookies = cookies.split(';');
    for (let i = 0; cookies.length > i; i++) {
        cookie = cookies[i].trim();
        if(cookie.startWith(cookieN)){
            return cookie.split('=')[0];
        }else {return cookieN;}}
    }

//las cookies se m,odifican reescribiendolas

