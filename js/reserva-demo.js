const formularioReserva = document.querySelector("#form-reserva");
const mensajeReserva = document.querySelector("#mensaje-reserva");

if (formularioReserva && mensajeReserva) {
    formularioReserva.addEventListener("submit", (event) => {
        event.preventDefault();
        mensajeReserva.hidden = false;
        mensajeReserva.textContent = "Los datos cumplen las validaciones del navegador. Esta es una demostración local: todavía no se envía una reserva a un servidor.";
    });
}
