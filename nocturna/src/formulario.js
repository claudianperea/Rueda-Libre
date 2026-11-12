const formulario = document.querySelector("#form-inscripcion");
const mensaje = document.querySelector("#mensaje-inscripcion");

if (formulario && mensaje) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();
        mensaje.hidden = false;
        mensaje.textContent = "El formulario superó la validación del navegador. Esta demostración local no envía datos a un servidor.";
    });
}
