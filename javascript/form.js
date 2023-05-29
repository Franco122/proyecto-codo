const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const contrasenia = document.getElementById("contrasenia");
const email = document.getElementById("email");
const error = document.getElementById("error");

function enviarError() {
  var mensajeError = [];

  if (nombre.value === null || nombre.value === '') {
    mensajeError.push('Ingresa tu nombre');
  }
  if (apellido.value === null || apellido.value === '') {
    mensajeError.push('Ingresa tu apellido');
  }
  if (contrasenia.value === null || contrasenia.value === '') {
    mensajeError.push('Ingresa tu contraseña');
  }
  if (email.value === null || email.value === '') {
    mensajeError.push('Ingresa tu email');
  }

  if (mensajeError.length > 0) {
    error.innerHTML = mensajeError.join("<br>");
    return false;
  } else {
    // Reseteo los inputs del form
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("contrasenia").value = "";
    document.getElementById("email").value = "";

    // Limpiar el mensaje de error
    error.innerHTML = "";
    return true;
  }
}



