

var accessGranted = false;
var karaokeInterval;


// Función para iniciar la animación de texto karaoke
function startKaraokeAnimation() {
    // Oculta el acceso modal
    document.getElementById("access-modal").style.display = "none";

    // Inicia la canción
    var audioPlayer = document.getElementById("audio-player");
    audioPlayer.play();

    // Muestra el contenedor de karaoke
    var karaokeContainer = document.getElementById("karaoke-container");
    karaokeContainer.style.display = "block";

    // Obtiene las líneas de karaoke
    var karaokeText = document.getElementById("karaoke-text");
    var karaokeLines = karaokeText.querySelectorAll(".karaoke-line");

    // Duración predeterminada para cada línea (en milisegundos)
    var defaultDuration = 5000;

    // Inicializa el índice de línea actual
    var currentLineIndex = 0;

    // Función para resaltar la línea actual y avanzar a la siguiente
    function highlightNextLine() {
        // Resalta la línea actual
        karaokeLines[currentLineIndex].classList.add("current-line");

        // Duración de la línea actual (en milisegundos)
        var duration = parseInt(karaokeLines[currentLineIndex].getAttribute("data-duration")) || defaultDuration;

        // Después de un tiempo de resaltado, quita el resaltado y pasa a la siguiente línea
        setTimeout(function() {
            karaokeLines[currentLineIndex].classList.remove("current-line");
            currentLineIndex++;

            // Si estamos al final de las líneas, regresa al principio
            if (currentLineIndex === karaokeLines.length) {
                currentLineIndex = 0;
            }

            // Si hemos llegado al final de las líneas, oculta el karaoke y muestra el contenido de la página
            if (currentLineIndex === 0) {
                karaokeContainer.style.display = "none";
                document.getElementById("page-content").style.display = "block";
            }

            highlightNextLine(); // Llama recursivamente para la siguiente línea
        }, duration);
    }

    // Inicia el ciclo de resaltado
    highlightNextLine();

    // Iniciar la animación Lottie al final
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lottie-container'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/a3b95495-36df-4d8d-93f7-0d74c0dd3e28/QDTngHSrBd.json'
    });
}

// Obtención de una lista de todos los elementos textPath
const textPaths = document.querySelectorAll('textPath');

// Duración y la función de temporización de la animación
const duracionAnimacion = 5; // 
const temporizacionAnimacion = () => {
  const tiempoActual = performance.now() / 1000; 
  const desplazamiento = (tiempoActual % duracionAnimacion) / duracionAnimacion;
  
  // Aplicar animación a cada textPath
  textPaths.forEach((textPath) => {
    textPath.setAttribute('startOffset', (desplazamiento * 100) + '%');
  });
  
  // Solicitar una nueva animación en el próximo cuadro de animación
  requestAnimationFrame(temporizacionAnimacion);
};

// Iniciar la animación
temporizacionAnimacion();

// Mapa de estrellas 
document.getElementById("boton-estrellas").addEventListener("click", function() {
    // Oculta el contenedor de texto y muestra el contenedor de imagen
    document.querySelector(".intro-estrellas").style.display = "none";
    document.querySelector(".mapa-estrellas").style.display = "block";
});


var myFP = fluidPlayer("video", {
    layoutControls: {
      controlBar: {
        autoHideTimeout: 3,
        animated: true,
        autoHide: true,
      },
      htmlOnPauseBlock: {
        html: null,
        height: null,
        width: null,
      },
      autoPlay: false,
      mute: true,
      allowTheatre: true,
      playPauseAnimation: true,
      playbackRateEnabled: true,
      allowDownload: true,
      playButtonShowing: true,
      fillToContainer: false,
    },
    vastOptions: {
      adList: [],
      adCTAText: false,
      adCTATextPosition: "",
    },
  });

