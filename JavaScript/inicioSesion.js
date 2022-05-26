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
<button type="button" class="btn btn-warning" id="boton_enviar">Crear Usuario</button>
<button type="button" class="btn btn-warning m-3" id="boton_iniciar">Iniciar Sesión</button>
</div>`;

function validarInicio() {
    let email = document.getElementById("email1").value;
    let contrasena = document.getElementById("contrasena1").value;

    if (email.length == 0) {
        Swal.fire({
            icon: "warning",
            title: "Error!",
            text: "Complete el campo E-mail",
            confirmButtonText: "Aceptar",
        });
        return false;
    } else if (email.indexOf("@") == -1) {
        Swal.fire({
            icon: "warning",
            title: "Error!",
            text: "El campo E-mail debe contener un @",
            confirmButtonText: "Aceptar",
        });
        return false;
    }

    if ((contrasena.length != 8)) {
        Swal.fire({
            icon: "warning",
            title: "Error!",
            text: "La contraseña debe contener 8 dígitos",
            confirmButtonText: "Aceptar",
        });
        return false;
    }
    
    //Creo un objeto con los datos del usuario
    let datos_inicio = {usuario_email:email, usuario_contrasena:contrasena};
    //Creo una localStorage con los datos del inicio de sesion en un array
    localStorage.setItem("datos_inicio", JSON.stringify(datos_inicio));

    //Aplico un alert cuando se haga click en el boton con sweet alert en el inicio de sesion

    const btn_alert = document.querySelector("#boton_enviar");
    btn_alert.addEventListener("click", () => {
    Swal.fire({
        icon: "success",
        title: "Cuenta creada de manera correcta",
        showConfirmButton: false,
        timer: 1000
    })
})

//En el boton iniciar creo un evento click para redireccionar la pagina al home

boton_enviar = document.getElementById("boton_iniciar");

boton_enviar.addEventListener("click", ()=>{
    document.location = "home.html";
})
}


document.getElementById("boton_enviar").addEventListener("click", validarInicio);






