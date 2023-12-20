const nombreSpan = document.getElementById("nombre");
const contenedorCajas = document.getElementById("cajas");
const cajas = contenedorCajas.querySelectorAll('div');

function getNombre(nombre) {
    let salida = "(Desconocido)";
    if (nombre.toLowerCase() === "mario") {
        salida = "Mario"
    }
    if (nombre.toLowerCase() === "luigi") {
        salida = "Luigi"
    }
    if (nombre.toLowerCase() === "bowser") {
        salida = "Bowser Morton Koopa"
    }
    if (nombre.toLowerCase() === "peach") {
        salida = "Princesa Peach Toadstool"
    }
    if (nombre.toLowerCase() === "yoshi") {
        salida = "T. Yoshisaur Munchakoopas"
    }
    if (nombre.toLowerCase() === "toad") {
        salida = "Toad"
    }
    if (nombre.toLowerCase() === "toadette") {
        salida = "Toadette"
    }
    if (nombre.toLowerCase() === "daisy") {
        salida = "Princesa Daisy"
    }
    return salida;
}

function mostrarPersonaje() {
    const nombre = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    getNombre(nombre);
    nombreSpan.textContent = getNombre(nombre);
    const presenta = document.getElementById(nombre.toLowerCase());

    if (presenta) {
        reiniciaImagenes();
        presenta.title = "Presentado";
    }
}

function muestraImagen(id){
    const presenta = document.getElementById(id)
    if(presenta.title === "Presentado"){
        presenta.title = "";
        nombreSpan.textContent = ""
    }else{
        reiniciaImagenes();
        presenta.title = "Presentado";
        nombreSpan.textContent = getNombre(presenta.id);
    }
}

function reiniciaImagenes(){
    cajas.forEach(caja => {
        caja.title = "";
    })

}
