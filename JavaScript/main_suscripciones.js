function cargarSuscripciones(){
    let suscripcion = cargarSuscripcionLS();
    let contenido = "";

    for (const it of suscripcion){
        contenido += `<div class="col-md-3 my-5">
        <div class="card card-p" style="width: 18rem;">
        <div class="card-body flex-column d-flex align-items-center justify-content-around">
        <h5 class="card-title"><b>Paquete:</b> ${it.paquete}</h5>
        <h6 class="card-subtitle text-center text-danger"><b>Cantidad de descargas disponibles:</b> ${it.descargas}</h6>
        <p class="card-text precio">Precio paquete: $${it.precio}</p>
        <button class="btn btn-warning" onclick="agregarAlCarrito(${it.id});">Comprar</button>
        </div>
        </div>
        </div>`;
    }
    document.getElementById("suscripciones").innerHTML = contenido;
    
};

cargarSuscripciones();