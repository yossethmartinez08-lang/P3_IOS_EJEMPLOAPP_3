function mostrarSeccion(seccionId) {
    let secciones = document.querySelectorAll('.seccion');

    secciones.forEach(seccion => {
        seccion.classList.remove('activa');
    });

    document.getElementById(seccionId).classList.add('activa');
}

function comprar(producto) {
    alert("Has comprado: " + producto);
}
