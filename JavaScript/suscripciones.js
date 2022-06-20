//Creo un objeto de suscripciones

const suscripcion = [
    { id: "0", paquete: "Básico", precio: 500, descargas: "100" },
    { id: "1", paquete: "Intermedio", precio: 1000, descargas: "500" },
    { id: "2", paquete: "Premium", precio: 3000, descargas: "1000" },
];

//Guardo el array en una local storage

localStorage.setItem("suscripcion", JSON.stringify(suscripcion));

//funcion cargar suscripcion desde la local storage, como si fuera una BD

function cargarSuscripcionLS(){
    return JSON.parse(localStorage.getItem("suscripcion"));
}

