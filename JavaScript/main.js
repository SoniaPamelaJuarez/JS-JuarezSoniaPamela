function cargarCanciones(){
    let canciones = cargarCancionesLS(); //simulo BD
    let contenido = "";

    for (const cancion of canciones){
        contenido += `<div class="col-md-3 post-card">
        <div class="card mt-3 py-5 d-flex align-items-center card-c">
        <img src="imagenes/${cancion.img}" class="card-img-top" alt="${cancion.titulo}">
        <div class="card-body">
        <h5 class="card-title">${cancion.titulo}</h5>
        <p class="card-text">${cancion.artista}</p>
        <p class="card-text">${cancion.album} ${cancion.duracion}</p>
        <button class="btn btn-warning" onclick="agregarCancionesDescargas(${cancion.id});">Descargar</button>
        <button class="btn btn-danger" onclick="agregarCancionesFavoritos(${cancion.id});"><img src="imagenes/fav.svg"></button>
        </div>
        </div>
        </div>`;
    }
    document.getElementById("canciones").innerHTML = contenido;
    
}

function buscarCancion(id){
    let canciones = cargarCancionesLS();

    return canciones.find(x => x.id == id);
}


guardarCancionesLS(canciones);
cargarCanciones();
actualizarBotonDescargas();
actualizarBotonFavoritos();

//Voy a crear un buscador de canciones (buscador de filtros)
const d = document;

function buscadorCancion(input, selector){
    d.addEventListener("keyup", e =>{
        if(e.target.matches(input)){
            //console.log(e.key);
            //console.log(e.target.value);
            d.querySelectorAll(selector).forEach((el) => el.textContent.toLowerCase().includes(e.target.value)?el.classList.remove("filter"): el.classList.add("filter"));
        }
    });
}

buscadorCancion(".card_filter", ".post-card");