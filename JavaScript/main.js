function cargarCanciones(){
    let canciones = cargarCancionesLS(); //simulo BD
    let contenido = "";

    for (const cancion of canciones){
        contenido += `<div class="col-md-3">
        <div class="card mt-3 py-5 d-flex align-items-center">
        <img src="imagenes/${cancion.img}" class="card-img-top" alt="${cancion.titulo}">
        <div class="card-body">
        <h5 class="card-title">${cancion.titulo}</h5>
        <p class="card-text">${cancion.artista}</p>
        <p class="card-text">${cancion.album} ${cancion.duracion}</p>
        <a href="#" class="btn btn-primary" onclick="agregarCancionesDescargas(${cancion.id});">Descargar</a>
        </div>
        </div>
        </div>`;
    }
    document.getElementById("canciones").innerHTML = contenido;
}

guardarCancionesLS(canciones);
cargarCanciones();
actualizarBotonDescargas();