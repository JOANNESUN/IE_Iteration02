function soltarAqui(ev) {
    ev.preventDefault();
}

function arrastar(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function soltar(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
