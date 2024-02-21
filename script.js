document.getElementById("creditosBtn").addEventListener("click", function() {
    alert("Autor:SABELA MARTINEZ BOTO\nCurso y grupo:N21 2B");
});

document.getElementById("ocultarBtn").addEventListener("click", function() {
    document.querySelector(".bloque1").style.display = "none";
});

document.getElementById("mostrarBtn").addEventListener("click", function() {
    document.querySelector(".bloque1").style.display = "block";
});

document.getElementById("cambiarColorBtn").addEventListener("click", function() {
    document.querySelector(".bloque1").style.backgroundColor = "purple";
});

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
