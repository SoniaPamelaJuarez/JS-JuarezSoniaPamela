let nombreUsuario = prompt ("Bienvenido a mi página de Música, ingrese un nombre de usuario");
let saludo = alert (`Bienvenido a mi página de múscia ${nombreUsuario}`);

class Suscripcion{

    constructor(paquetes, precio, descargas, metodoPago, compra){
        this.paquetes = paquetes;
        this.precio = parseFloat(precio);
        this.descargas = descargas;
        this.metodoPago = metodoPago;
        this.compra = compra;
    }

    tarjetaDebito() {
        this.precio *= 0.9; //10% OFF
    }

    tarjetaCredito() {
        this.precio *= 1.1; //10% RECARGA
    }
}

//Declaro un array paquetes para almacenar las suscripciones con el paquete, precio y cantidad de descargas

const paquetes = [];

paquetes.push(new Suscripcion ("basico", 1000, 10 ));
paquetes.push(new Suscripcion ("intermedio", 2000, 100 ));
paquetes.push(new Suscripcion ("premium", 3000, 500 ));

//Aplico for of para aplicarle a cada paquete el precio con tarjeta de credito y con tarjeta de debito

for (const producto of paquetes ){
    producto.tarjetaCredito();
    console.log(`El precio final de la suscripción ${producto.paquetes} con tarjeta de crédito es ${producto.precio.toFixed(2)} y contiene ${producto.descargas} descargas`);
}

for (const producto of paquetes ){
    producto.tarjetaDebito();
    console.log(`El precio final de la suscripción ${producto.paquetes} con tarjeta de débito es ${producto.precio.toFixed(2)} y contiene ${producto.descargas} descargas`);
}

//Incorporacion de un buscador de canciones

class Buscador{

    constructor(canciones){
    this.artista = canciones.artista;
    this.nombre = canciones.nombre;
    }

    buscarCancion(){
        if(this.artista != "" && this.nombre != ""){

            return "Buscando la cancion " + this.nombre +  " del artista " + this.artista;
        }else{

            return "No elegiste nada :(";
        }
    }
}


let buscador = new Buscador(
    {artista:"", nombre:""}
);
buscador["artista"] = prompt("Que artista querés escuchar?");
buscador["nombre"] = prompt("Ahora te toca seleccionar la canción que quieres escuchar");

console.log(buscador.buscarCancion());
alert(`Buscando canción ${buscador.nombre} del artista ${buscador.artista}`);



