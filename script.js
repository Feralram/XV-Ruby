// --- VARIABLES GLOBALES ---

const codigoInput = document.getElementById('codigo-input');
const codigoSubmit = document.getElementById('codigo-submit');
const codigoError = document.getElementById('codigo-error');
const entradasAviso = document.getElementById('entradas-aviso');
const playButton = document.getElementById("playButton");
const cuentaRegresivaElemento = document.getElementById("cuenta-regresiva");
const alertaOverlay = document.getElementById('alerta-overlay'); // AÑADIDO
const alertaCuadro = document.getElementById('alerta-cuadro'); // AÑADIDO
const alertaMensaje = document.getElementById('alerta-mensaje'); // AÑADIDO

// Arreglo de códigos y número de invitados (simulado)
const codigosInvitados = {
    'AR2024-1': 5,
    'LR2024-2': 2,
    'MJ2024-3': 3,
    // Agrega aquí todos tus códigos
};

// Fecha del evento
const fechaEvento = new Date("November 16, 2025 23:02:27").getTime();

let audioReproducido = false; // Para controlar si el audio ya se reprodujo

// --- FUNCIONES ---

function verificarCodigo() {
    const codigoIngresado = codigoInput.value.trim().toUpperCase();

    if (codigosInvitados.hasOwnProperty(codigoIngresado)) {
        const numeroInvitados = codigosInvitados[codigoIngresado];
        mostrarEntradas(numeroInvitados);
    } else {
        mostrarError();
    }
}

function mostrarEntradas(numeroInvitados) {
    alertaMensaje.textContent = `El número de entradas para esta familia es: ${numeroInvitados}`;
    alertaOverlay.style.display = 'flex';
    codigoError.style.display = 'none';

    setTimeout(() => {
        alertaOverlay.style.display = 'none';
    }, 3000);
}

function mostrarError() {
    codigoError.style.display = 'block';
    codigoInput.classList.add('error-input');
    alertaOverlay.style.display = 'none'; // Asegurarse de que esté oculto

    setTimeout(() => {
        codigoError.style.display = 'none';
        codigoInput.classList.remove('error-input');
    }, 3000);
}

function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        cuentaRegresivaElemento.textContent =
            `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
    } else {
        cuentaRegresivaElemento.textContent = "¡El gran día!";
    }
}

function reproducirAudio() {
    if (!audioReproducido) {
        const audio = new Audio("audio/cancion_invitacion.mp3");
        audio.play();
        audioReproducido = true;
    }
}

// --- EVENTOS Y MANEJADORES ---

codigoSubmit.addEventListener('click', verificarCodigo);

codigoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificarCodigo();
    }
});

if (playButton) {
    playButton.addEventListener("click", reproducirAudio);
}

// --- INICIALIZACIÓN ---

actualizarCuentaRegresiva();
setInterval(actualizarCuentaRegresiva, 1000);