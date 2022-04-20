//Voy a realizar una pagina de musica, en donde se puedan obtener suscripciones, haya un buscador de canciones y se puedan descargar las mismas de acuerdo a la suscripcion solicitada.


//Defino varible nombre de usuario y tipo de suscripcion a través de prompt

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
    metodoPago = prompt("Elegi un metodo de pago, tene en cuenta que si elegis TARJETA DEBITO vas a tener un 10% de descuento sobre el precio final, y si elegis TARJETA CREDITO vas a tener un recargo del 10% sobre el precio final").toLowerCase();
}
console.log(metodoPago);

let precioSubscripcion;

while(tipoSubscripcion != "free"){
    if(tipoSubscripcion == "basico"){
        precioSubscripcion = 100;
    }else if(tipoSubscripcion == "intermedio"){
        precioSubscripcion = 200;
    }else {
        precioSubscripcion = 300;
    }
    console.log(precioSubscripcion);
    
    const descuento = 0.9;
    const recargo = 1.1;
    let precioFinal;
    
    
    
    if(metodoPago == "tarjeta debito"){
        precioFinal = precioSubscripcion * descuento;
    }else if (metodoPago == "tarjeta credito"){
        precioFinal = precioSubscripcion * recargo;
    }else{
        alert("Ese metodo de pago no existe");
    }
    
    console.log(precioFinal);
    alert("El precio final es " + precioFinal);
    break;
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







