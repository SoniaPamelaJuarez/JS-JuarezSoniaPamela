//Agrego el DOM

//Creo un objeto canciones
const canciones = [
    { id: "0", titulo: "Don't Stop Me Now", artista: "Queen", album: "Jazz", duracion:"3:29", img: "https://placeimg.com/200/200/any" },
    { id: "1", titulo: "I Want To Break Free", artista: "Queen", album: "Bohemian Rhapsody", duracion:"3:43", img: "https://placeimg.com/200/200/any" },
    { id: "2", titulo: "Love Of My Life", artista: "Queen", album: "A Night At The Opera", duracion:"3:37", img: "https://placeimg.com/200/200/any" },
    { id: "3", titulo: "Somebody To Love", artista: "Queen", album: "Bohemian Rhapsody", duracion:"4:55", img: "https://placeimg.com/200/200/any" },
    { id: "4", titulo: "Bohemian Rhapsody", artista: "Queen", album: "Bohemian Rhapsody", duracion:"5:54", img: "https://placeimg.com/200/200/any" },
    { id: "5", titulo: "Killer Queen", artista: "Queen", album: "Bohemian Rhapsody", duracion:"2:59", img: "https://placeimg.com/200/200/any" },
    { id: "6", titulo: "Crazy little Thing Called Rock", artista: "Queen", album: "The Game", duracion:"2:43", img: "https://placeimg.com/200/200/any" },
    { id: "7", titulo: "Under Pressure", artista: "Queen", album: "Hot Space", duracion:"4:08", img: "https://placeimg.com/200/200/any" },
    { id: "8", titulo: "Radio Ga Ga", artista: "Queen", album: "The Works", duracion:"5:48", img: "https://placeimg.com/200/200/any" },
    { id: "9", titulo: "The Show Most Go On", artista: "Queen", album: "Bohemian Rhapsody", duracion:"4:31", img: "https://placeimg.com/200/200/any" },
    { id: "10", titulo: "A Kind Of Magic", artista: "Queen", album: "A Kind Of Magic", duracion:"4:24", img: "https://placeimg.com/200/200/any" },
    { id: "11", titulo: "The Miracle", artista: "Queen", album: "The Miracle", duracion:"3:26", img: "https://placeimg.com/200/200/any" },
];

const contenedorMusica = document.getElementById("contenedorMusica");
contenedorMusica.className = "grid-fluid";

//Agrego el carrito de las descargas

const contenedorCarrito = document.getElementById("carritoDescarga");
const carritoDescarga = [];

//Aplico un for of para recorrer el objeto canciones

for(const cancion of canciones){
    //Creo los elementos del HTML, le agrego la clase para darle estilo
    const artCard = document.createElement("article");
    artCard.className = "post-card";

    const imgCard = document.createElement("img");
    imgCard.src = cancion.img; //le agrego el contenido de la imagen que se encuentra en el objeto canciones

    const tituloCard = document.createElement("h1");
    tituloCard.append(cancion.titulo);

    const artistaCard = document.createElement("h2");
    artistaCard.append(cancion.artista);

    const duracionCard = document.createElement("h3");
    duracionCard.append(cancion.duracion);

    const botonDescarga = document.createElement("button");
    botonDescarga.className = "botonDescarga";
    botonDescarga.append("Descargar");
    botonDescarga.id = `${cancion.id}`;


    //Agrego a artCard la imagen
    artCard.append(imgCard);

    //Agrego a artCard la imagen, el titulo, artista, la duracion y el boton de descarga
    artCard.append(tituloCard, artistaCard, duracionCard, botonDescarga);

    //Agrego al contenedor musica cada uno de los article
    contenedorMusica.append(artCard);

    //Evento onclick en boton descarga
    botonDescarga.onclick = () =>{
        const cancionDescargada = canciones.find(cancion => cancion.id === botonDescarga.id);
        carritoDescarga.push({titulo:cancionDescargada.titulo, artista:cancionDescargada.artista, album:cancionDescargada.album});
    }

};

//Funcion mostrar carrito de Descargas

const mostrarCarrito = () =>{
    for (const cancion of carritoDescarga){
        const tituloCancion = `<h4>Canción : ${cancion.titulo}</h4>`;
        const artistaCancion = `<h4> ${cancion.artista}</h4>`;
        contenedorCarrito.innerHTML += tituloCancion;
        contenedorCarrito.innerHTML += artistaCancion;
    }
}

let botonDescarga = document.getElementById("btnDescarga");
botonDescarga.onclick = mostrarCarrito;

//Agrego el footer con DOM

const footer = document.getElementById("footer");
footer.className = "footer";

const form = document.createElement("form");
form.className = "form";

const nombreUser = document.createElement("h3");
nombreUser.append("Nombre y Apellido");

const emailUser = document.createElement ("h3");
emailUser.append("E-mail")

const input1 = document.createElement("input");
input1.placeholder = ("Escribe tu nombre");
input1.required;
input1.type = ("text");

const input2 = document.createElement("input");
input2.placeholder = ("Escribe tu e-mail");
input2.required;
input2.type = ("email")

const caja = document.createElement("textarea");
caja.placeholder = ("Escribe un Mensaje");
caja.cols = ("10");
caja.rows = ("4");

const enviar = document.createElement("input");
enviar.className = "enviar";
enviar.type = ("submit");
enviar.value = ("Enviar");

footer.append(form);
form.append(nombreUser, input1, emailUser, input2, caja, enviar);

//Evento para validar formulario

const validarFormulario = (e) => {
    e.preventDefault();
    console.log(e);
    let formulario = e.target;
    console.log(formulario.children[1].value);
    console.log(formulario.children[3].value);
    console.log(formulario.children[4].value);
}

form.addEventListener("submit", validarFormulario);

