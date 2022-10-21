let caja = document.getElementById("info")
document.addEventListener('mousemove', logKey);
document.addEventListener('click', onClick);

function logKey(e) {
    caja.innerText = `Navegador [${e.screenX},${e.screenY}]\n
        Página [${e.clientX},${e.clientY}]`;
    caja.style.backgroundColor = ""
}
function onClick(e) {
    caja.style.backgroundColor = "#FFFFCC"
}

window.addEventListener("keydown", (event) => {
    caja.innerText = `Caracter='${event.key}'\nCodigo='${event.code}'`
    caja.style.backgroundColor = "#CCE6FF"
}, true);