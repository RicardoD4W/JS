if(!('Notification' in window)){
    console.log("notificaciones no disponibles");
}



Notification.requestPermission( ()=>{
    if(Notification.permission == "granted"){
        console.log("permiso up")
        new Notification("perimera notificacion");
    }
});