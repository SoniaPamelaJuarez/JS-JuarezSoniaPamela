function cargarCancionesFavoritos(){
    if(localStorage.getItem("favoritos")){
        return JSON.parse(localStorage.getItem("favoritos"));
    }

    return [];
}

function agregarCancionesFavoritos(id){
    let cancion = buscarCancion(id);
    let cancion_favoritos = cargarCancionesFavoritos();
    cancion_favoritos.push(cancion);
    localStorage.setItem("favoritos", JSON.stringify(cancion_favoritos));
    actualizarBotonFavoritos();
}

function actualizarBotonFavoritos(){
    let canciones_favoritos = cargarCancionesFavoritos();
    let contenido =`<button type="button" class="btn btn-danger position-relative m-2"><img src="imagenes/fav.svg" alt="Favoritos"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${canciones_favoritos.length}</span></button>
    `;
    document.getElementById("boton_favoritos").innerHTML = contenido;
}

function eliminarFavorito(id){
    let cancion_favoritos = cargarCancionesFavoritos();
    let cancion_favoritos_actualizadas = cancion_favoritos.filter(x => x.id != id);
    localStorage.setItem("favoritos", JSON.stringify(cancion_favoritos_actualizadas));
    actualizarBotonFavoritos();
    listaCancionesFav();
}

function listaCancionesFav(){
    let favoritos = cargarCancionesFavoritos();
    let lista_canciones_fav = document.getElementById("lista_canciones_fav");
    let contenido = "";

    if (favoritos.length == 0) {
        contenido = "<p class='text-center bg-warning p-3'>Todavía no tenés favoritos :(</p>";
        lista_canciones_fav.innerHTML = contenido;
    } else {
        let total = 0;

        let contenido = `<table class="table table-hover">
        <tr>
        <th>Titulo</th>
        <th>Duracion</th>
        <th>&nbsp;</th>    
        </tr>`;

        for (const cancion of favoritos){
            contenido += `<tr>
            <td>${cancion.titulo}</td>
            <td>${cancion.duracion}</td>
            <td class="text-end"><button class="btn btn-danger" onclick="eliminarFavorito(${cancion.id});"><img src="imagenes/trash3.svg" title="${cancion.titulo}"></button></td>
            </tr>`;
            total = favoritos.length;
        }

        contenido += `<tr>
        <td><b>Total canciones favoritas</b></td>
        <td><b>${total}</b></td>
        <td>&nbsp;</td>
        </tr>
        </table>`;

        lista_canciones_fav.innerHTML = contenido;
    }
}