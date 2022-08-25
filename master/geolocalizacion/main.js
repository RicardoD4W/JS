const geolocation = navigator.geolocation;

const posicion = (pos)=>{
    console.log(pos);
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
}

const err = (e)=>{
    console.log(e);
}

const options = {
    maximunAge: 0,
    timeout: 3000,
    enableHightAccuracy: true
}

geolocation.getCurrentPosition(posicion, err, options);