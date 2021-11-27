//captura de elementos
var fecha = new Date();
let horaHtml = document.getElementById("hours");
let minHtml = document.querySelector("#min");
let secondsHtml = document.querySelector("#seconds");
let mesHtml = document.querySelector("#mes");
let añoHtml = document.querySelector("#año");
let diaHtml = document.querySelector("#dia");
let estadoHtml = document.querySelector("estado");
/* let estado; */



//funcion reloj horas , minutos y segundos
let funcionhora = setInterval(() =>{
      let fecha = new Date();
    

    hora = fecha.getHours();
    min = fecha.getMinutes();
    seconds = fecha.getSeconds();
    
    //evitar los 0
    if(hora < 10){
        hora = '0' + hora;

    }
    if(min < 10){
        min = '0' + min;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }


    horaHtml.textContent = hora  + ':';
    minHtml.textContent = min + ':';
    secondsHtml.textContent = seconds ;

}, 1000)
 

//funcion flecha tiene return implicito por eso no hace falta invocarla.
const funcionMesAño = setInterval(() =>{
     let fecha = new Date(); ///Fecha actual  y de donde voy a sacar los datos de mes y año.

    //Array donde voy a reemplazar los numeros dados por el metodo Date.
    const dias = ["domingo" , "lunes" , "martes" , "miercoles" , "jueves" , "viernes" , "sabado"];
    const meses = ["enero" , "febrero" , "marzo" , "abril" , "mayo" , "junio" , "julio" , "agosto" , "septiembre" , "octubre" , "noviembre" , "diciembre"];

    let dia = dias[fecha.getDay()];
    let mes = meses[fecha.getMonth()];
    let año = fecha.getFullYear();

    mesHtml.textContent = mes;
    añoHtml.textContent = año;
    diaHtml.textContent = dia;

}, 1000);


/* let funcionEstados =() =>{
 if(fecha.getHours() >= 12){
    return estado = 'AM';
 }else{
    return estado = 'AM';
 }

}

estadoHtml.textContent("${estado}"); */
