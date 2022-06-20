let contenido = "";

contenido = `<div class="my-3 style-form">
<label  for="exampleFormControlInput1" class="form-label">Dirección E-mail</label>
<input id="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3 style-form">
<label for="exampleFormControlInput1" class="form-label">Nombre y Apellido</label>
<input id="nombre" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese Nombre y Apellido">
</div>
<div class="text-center my-3"><button id="btn_confirmar" class="btn btn-danger confirmacion">Confirmar</button></div>
`;
document.getElementById("confirmacion").innerHTML = contenido;

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let resultado_form = document.getElementById("resultado_form");

    if (nombre.length == 0) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese un valor para el campo Nombre!</div>";
        return false;
    } else {
        resultado_form.innerHTML = "";
    }

    if (email.length == 0) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese un valor para el campo Email!</div>";
        return false;
    } else if (email.indexOf("@") == -1) {
        resultado_form.innerHTML = "<div class='p-3 mb-2 bg-danger text-white'>Ingrese correctamente el Email para el campo Email!</div>";
        return false;
    } else {
        resultado_form.innerHTML = "";
    }
    
    //Creo un objeto con los datos del usuario
    let datos_formulario = {usuario_nombre:nombre, usuario_email:email};
    //Creo una localStorage con los datos del formulario en un array
    localStorage.setItem("datos_formulario", JSON.stringify(datos_formulario));

    //Aplico un alert cuando se haga click en el boton con sweet alert en el inicio de sesion

    const btn_confirmar = document.querySelector("#btn_confirmar");
    btn_confirmar.addEventListener("click", () => {
    Swal.fire({
        icon: "success",
        title: "Suscripción confirmada",
        showConfirmButton: false,
        timer: 1000
        })
    })
}

document.getElementById("btn_confirmar").addEventListener("click", validarFormulario);