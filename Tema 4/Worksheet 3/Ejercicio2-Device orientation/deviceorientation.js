window.addEventListener('deviceorientation', tratarOrientacion);
function tratarOrientacion(e) {
    document.getElementById("miimagen").style.transform = "rotateX(" + e.alpha + "deg) rotateY("+ e.beta + "deg)";
}