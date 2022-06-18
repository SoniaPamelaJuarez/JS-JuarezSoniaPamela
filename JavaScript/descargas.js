function buscarCancion(id){
    let canciones = cargarCancionesLS();

    return canciones.find(x => x.id == id);
}

function cargarCancionesDescargas(){
    if(localStorage.getItem("descargas")){
        return JSON.parse(localStorage.getItem("descargas"));
    }

    return [];
}

function agregarCancionesDescargas(id){
    let cancion = buscarCancion(id);
    let cancion_descargas = cargarCancionesDescargas();
    cancion_descargas.push(cancion);
    localStorage.setItem("descargas", JSON.stringify(cancion_descargas));
    actualizarBotonDescargas();
}

function actualizarBotonDescargas(){
    let canciones_descargas = cargarCancionesDescargas();
    let contenido = `<button type="button" class="btn btn-warning position-relative m-2"><img src="imagenes/download.svg" alt="Descargas"><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${canciones_descargas.length}</span></button>
    `;
    document.getElementById("boton_descargas").innerHTML = contenido;
}

function eliminarDescarga(id){
    let cancion_descargas = cargarCancionesDescargas();
    let cancion_descargas_actualizadas = cancion_descargas.filter(x => x.id != id);
    localStorage.setItem("descargas", JSON.stringify(cancion_descargas_actualizadas));
    actualizarBotonDescargas();
    listaCancionesDescargadas()
}

function listaCancionesDescargadas(){
    let descargas = cargarCancionesDescargas();
    let lista_canciones = document.getElementById("lista_canciones");
    let contenido = "";

    if (descargas.length == 0) {
        contenido = "<p class='text-center bg-warning p-3'>Todavía no realizaste ninguna descarga :(</p>";
        lista_canciones.innerHTML = contenido;
    } else {
        let total = 0;

        let contenido = `<table class="table table-hover">
        <tr>
        <th>Titulo</th>
        <th>Duracion</th>
        <th>&nbsp;</th>    
        </tr>`;

        for (const cancion of descargas){
            contenido += `<tr>
            <td>${cancion.titulo}</td>
            <td>${cancion.duracion}</td>
            <td class="text-end"><button class="btn btn-danger" onclick="eliminarDescarga(${cancion.id});"><img src="imagenes/trash3.svg" title="${cancion.titulo}"></button></td>
            </tr>`;
            total = descargas.length;
        }

        contenido += `<tr>
        <td><b>Total canciones descargadas</b></td>
        <td><b>${total}</b></td>
        <td>&nbsp;</td>
        </tr>
        </table>`;

        lista_canciones.innerHTML = contenido;
    }
}


