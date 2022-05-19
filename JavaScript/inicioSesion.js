// Aqui voy a hacer un inicio de sesion a la pagina y guardo la informacion de usuario en el local storage

let inicioSesion = document.getElementById("inicioSesion");
inicioSesion.innerHTML = `<div class="m-5 p-5 mb-5 d-flex flex-column align-items-center bg-warning" style="--bs-bg-opacity: .5;">
<p class="mb-3 w-50 text-center">CREA TU USUARIO</p>
<div class="mb-3 w-50 ">
<label for="InputEmail1" class="form-label">Email</label>
<input type="email" class="form-control" id="email1" aria-describedby="emailHelp">
</div>
<div class="mb-3 w-50">
<label for="exampleInputPassword1" class="form-label">Contraseña</label>
<input type="password" class="form-control" id="contrasena1">
</div>
<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1">
<label class="form-check-label" for="exampleCheck1">Crear usuario</label>
</div>
<button type="button" class="btn btn-warning" id="boton_enviar">Enviar</button>
</div>`;

function validarInicio() {
    let email = document.getElementById("email1").value;
    let contrasena = document.getElementById("contrasena1").value;
    let resultado_form = document.getElementById("resultado_form")

    if (email.length == 0) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese un valor para el campo Email!</div>";
        return false;
    } else if (email.indexOf("@") == -1) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese correctamente el Email para el campo Email!</div>";
        return false;
    } else {
        resultado_form.innerHTML = "";
    }

    if ((contrasena.length != 8)) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese una contraseña con 8 caracteres</div>";
        return false;
    } else {
        resultado_form.innerHTML = "";
    }
    
    //Creo un objeto con los datos del usuario
    let datos_inicio = {usuario_email:email, usuario_contrasena:contrasena};
    //Creo una localStorage con los datos del inicio de sesion en un array
    localStorage.setItem("datos_inicio", JSON.stringify(datos_inicio));
    //Redireccionar mi pagina a index.html
    document.location = "home.html";
}

document.getElementById("boton_enviar").addEventListener("click", validarInicio);