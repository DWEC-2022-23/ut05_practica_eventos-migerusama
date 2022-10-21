function muestraOculta(evento) {
    switch (evento.target.id) {
        case "enlace_1":
            var contenido1 = document.getElementById('contenidos_1').style.visibility
            document.getElementById('contenidos_1').style.visibility = contenido1 == 'hidden' ? '' : 'hidden'
            document.getElementById('enlace_1').innerHTML = contenido1 == '' ? "Mostar contenidos" : "Ocultar contenidos"
            break;
        case "enlace_2":
            var contenido2 = document.getElementById('contenidos_2').style.visibility
            document.getElementById('contenidos_2').style.visibility = contenido2 == 'hidden' ? '' : 'hidden'
            document.getElementById('enlace_2').innerHTML = contenido2 == '' ? "Mostar contenidos" : "Ocultar contenidos"
            break;
        case "enlace_3":
            var contenido3 = document.getElementById('contenidos_3').style.visibility
            document.getElementById('contenidos_3').style.visibility = contenido3 == 'hidden' ? '' : 'hidden'
            document.getElementById('enlace_3').innerHTML = contenido3 == '' ? "Mostar contenidos" : "Ocultar contenidos"
            break;
    }

}

document.getElementById('enlace_1').addEventListener('click', muestraOculta);
document.getElementById('enlace_2').addEventListener('click', muestraOculta);
document.getElementById('enlace_3').addEventListener('click', muestraOculta);