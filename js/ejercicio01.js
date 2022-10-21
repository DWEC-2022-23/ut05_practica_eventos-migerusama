addEventListener('DOMContentLoaded', inicio);

function inicio() {
    document.getElementById('numero').addEventListener('dblclick', dobleClick);
    document.getElementById('numero').addEventListener('mouseover', onMouseHover);
    document.getElementById('numero').addEventListener('mouseout', onMouseOut);
}

function dobleClick() {
    var num = Number(document.getElementById('numero').textContent)
    num *= 3
    document.getElementById('numero').textContent = num
}
function onMouseHover() {
    document.getElementById('numero').style.backgroundColor = "red"
    document.getElementById('numero').style.fontFamily = "Impact,Charcoal,sans-serif"
}
function onMouseOut() {
    document.getElementById('numero').style.backgroundColor = ""
    document.getElementById('numero').style.fontFamily = ""
}