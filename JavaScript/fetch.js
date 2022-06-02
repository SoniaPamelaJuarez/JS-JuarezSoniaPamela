function busquedaCancion() {
    const texto_busqueda = document.getElementById("texto_busqueda").value;
    const texto_busqueda_string = texto_busqueda
    const resultado = document.getElementById("resultado");
    const url_api = "https://api.deezer.com/search?q=queen/search?q=track:";
    //https://api.deezer.com/search?q=track:"string de cancion"

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url_api + texto_busqueda, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
        })
        .catch(error => console.log("error", error));

}
document.getElementById("buscar").addEventListener("click", busquedaCancion);


