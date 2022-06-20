//Creo un objeto canciones

const canciones = [
    { id: "0", titulo: "Don't Stop Me Now", artista: "Queen", album: "Jazz", duracion:"3:29", img: "dontstopmenow.jpg" },
    { id: "1", titulo: "I Want To Break Free", artista: "Queen", album: "Bohemian Rhapsody", duracion:"3:43", img: "iwanttobreakfree.png" },
    { id: "2", titulo: "Love Of My Life", artista: "Queen", album: "A Night At The Opera", duracion:"3:37", img: "loveofmylife.png" },
    { id: "3", titulo: "Somebody To Love", artista: "Queen", album: "Bohemian Rhapsody", duracion:"4:55", img: "somebodytolove.jpg" },
    { id: "4", titulo: "Bohemian Rhapsody", artista: "Queen", album: "Bohemian Rhapsody", duracion:"5:54", img: "bohemianrapsody.png" },
    { id: "5", titulo: "Killer Queen", artista: "Queen", album: "Bohemian Rhapsody", duracion:"2:59", img: "killerqueen.jpg" },
    { id: "6", titulo: "Crazy little Thing Called Rock", artista: "Queen", album: "The Game", duracion:"2:43", img: "crazy.jpg" },
    { id: "7", titulo: "Under Pressure", artista: "Queen", album: "Hot Space", duracion:"4:08", img: "under.jpg" },
    { id: "8", titulo: "Radio Ga Ga", artista: "Queen", album: "The Works", duracion:"5:48", img: "radiogaga.jpg" },
    { id: "9", titulo: "The Show Most Go On", artista: "Queen", album: "Bohemian Rhapsody", duracion:"4:31", img: "theshow.png" },
    { id: "10", titulo: "A Kind Of Magic", artista: "Queen", album: "A Kind Of Magic", duracion:"4:24", img: "magic.jpg" },
    { id: "11", titulo: "The Miracle", artista: "Queen", album: "The Miracle", duracion:"3:26", img: "themiracle.jpg" },
];

//funcion para guardar el array en una local storage

function guardarCancionesLS(canciones){
    localStorage.setItem("canciones", JSON.stringify(canciones));
}

//funcion cargar canciones desde la local storage, disimulo canciones como si fuera una BD

function cargarCancionesLS(){
    return JSON.parse(localStorage.getItem("canciones"));
}


