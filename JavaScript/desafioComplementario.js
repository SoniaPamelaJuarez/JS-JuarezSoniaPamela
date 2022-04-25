//Voy a realizar una pagina de musica, en donde se puedan obtener suscripciones, haya un buscador de canciones y se puedan descargar las mismas de acuerdo a la suscripcion solicitada.


//Defino varible nombre de usuario y tipo de suscripcion a través de dos entradas

let nombreUsuario = prompt ("Bienvenido a mi página de Música, ingrese un nombre de usuario "); 
let tipoSubscripcion = prompt (nombreUsuario + ", que tipo de subscripción desea? \nPuede elegir: \n1) Free \n2) Basico \n3) Intermedio \n4) Premium").toLowerCase();


while (tipoSubscripcion != ""){
    switch(tipoSubscripcion.toLowerCase()){
        case "free":
            alert("Tu subscripcion incluye una descarga free por mes");
            break;
        case "basico":
            alert("Tu subscripcion incluye 5 descargas por mes");
            break;
        case "intermedio":
            alert("Tu subscripcion incluye 10 descargas por mes");
            break;
        case "premium":
            alert("Tu subscripcion incluye 20 descargas por mes");
            break;
        default:
            alert("No existe dicha subscripcion");
            tipoSubscripcion = prompt (nombreUsuario + ", que tipo de subscripción desea? \nPuede elegir: \n1) Free \n2) Basico \n3) Intermedio \n4) Premium");
            break;
    }
    if (tipoSubscripcion == "free"){
        alert("Gracias por elegir la subscripción Free, disfrutala!");
        break;
    }else{
        break;
    }
}
console.log(tipoSubscripcion);


let metodoPago;

if(tipoSubscripcion == "basico" || tipoSubscripcion == "intermedio" || tipoSubscripcion == "premium"){
    metodoPago = prompt("Elegi un metodo de pago, tene en cuenta que si elegis DEBITO vas a tener un 10% de descuento sobre el precio final, y si elegis CREDITO vas a tener un recargo del 10% sobre el precio final").toUpperCase();
}
console.log(metodoPago);

//Incorporo la funcion de descuento y recargo en una funcion llamada pago

function pago(metodoPago, monto){
    let total = 0;
    switch(metodoPago){
        case "DEBITO":
            total = monto * 0.9;
            break;
        
        default:
            total = monto * 1.1;
            break;
    }
    return total.toFixed(2);
}

let precioSubscripcion;
let pagoTotal;

//Aplico la funcion pago de acuerdo al tipo de suscripcion seleccionado por el usuario

if (tipoSubscripcion == "basico"){
    precioSubscripcion = 1000;
    alert(`El paquete basico cuesta $${precioSubscripcion}`);
    pagoTotal = pago(metodoPago, precioSubscripcion);
    alert(`El total a pagar es $${pagoTotal}`);
}
if (tipoSubscripcion == "intermedio"){
    precioSubscripcion = 1000;
    alert(`El paquete basico cuesta $${precioSubscripcion}`);
    pagoTotal = pago(metodoPago, precioSubscripcion);
    alert(`El total a pagar es $${pagoTotal}`);
}
if (tipoSubscripcion == "premium"){
    precioSubscripcion = 1000;
    alert(`El paquete basico cuesta $${precioSubscripcion}`);
    pagoTotal = pago(metodoPago, precioSubscripcion);
    alert(`El total a pagar es $${pagoTotal}`);
}

//Aqui agrego el ciclo for para contar las descargas

let contadorDescarga = prompt("quieres realizar tus descargas?").toLowerCase();

if( contadorDescarga == "si" && tipoSubscripcion == "free"){
    for( let i = 1; i > 0; i-- ){
        alert("Listo, pudiste hacer " + i + " descarga correspondientes a tu subscripcion");
    }
}else if( contadorDescarga == "si" && tipoSubscripcion == "basico"){
    for( let i = 5; i > 0; i-- ){
        alert("Descarga número " + i);
    }
}else if( contadorDescarga == "si" && tipoSubscripcion == "intermedio"){
    for( let i = 10; i > 0; i-- ){
        alert("Descarga número " + i);
    }
}else if( contadorDescarga == "si" && tipoSubscripcion == "premium"){
    for( let i = 20; i > 0; i-- ){
        alert("Descarga número " + i);
    }
}else{
    alert("Perfecto, cuando quieras puedes realizar las descargas correspondientes a tu subscripción");
}