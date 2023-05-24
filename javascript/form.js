const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const contrasenia = document.getElementById("contrasenia");
const email = document.getElementById("email");
const error = document.getElementById("error");

function enviarError(){
    var mensajeError = [];
    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Ingresa tu nombre');
    }
    if(apellido.value === null || apellido.value === ''){
        mensajeError.push('Ingresa tu apellido');
    }
    if(contrasenia.value === null || contrasenia.value === ''){
        mensajeError.push('Ingresa tu contraseña');
    }
    if(email.value === null || email.value === ''){
        mensajeError.push('Ingresa tu email');
    }

    error.innerHTML = mensajeError.join("<br>");

    // reseteo los inputs del form
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("contrasenia").value = "";
    document.getElementById("email").value = "";

    return false;

    /* el unico error es que en el email puede enviar direcciones que no tengan sentido es porque no sabia si se podian usar expresiones regulares para validar con mas profundidad */
}


