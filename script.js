function mostrarFecha() {

    var fecha = new Date();

    alert("La fecha actual es: " + fecha);

}





function cambiarColorFondo(elemento) {

    elemento.style.backgroundColor = "lightgreen";

}



function restaurarColorFondo(elemento) {

    elemento.style.backgroundColor = "";

}





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

