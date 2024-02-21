// Función para mostrar la fecha actual en una ventana de alerta
function mostrarFecha() {
    var fecha = new Date();
    alert("La fecha actual es: " + fecha);
}

// Función para cambiar el color de fondo del segundo div al pasar el ratón sobre él
function cambiarColorFondo(elemento) {
    elemento.style.backgroundColor = "lightgreen";
}

// Función para restaurar el color de fondo original del segundo div al quitar el ratón de encima
function restaurarColorFondo(elemento) {
    elemento.style.backgroundColor = "";
}

// Función para obtener la ubicación del dispositivo y mostrarla en un mapa
document.getElementById("ubicacionBtn").addEventListener("click", function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitud = position.coords.latitude;
        var longitud = position.coords.longitude;
        
        var mapa = L.map('ubicacionMapa').setView([latitud, longitud], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(mapa);

        L.marker([latitud, longitud]).addTo(mapa)
            .bindPopup('¡Estás aquí!')
            .openPopup();
    });
});
