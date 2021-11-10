const parrafo = document.querySelector('p');
const div = document.querySelector('div');
const img = document.querySelector('img');
const h2 = document.querySelector('h2');
const boton = document.querySelector('button');

function random(number) {
	return Math.floor(Math.random()*(number+1));
}

cambiarColor = function(e) {
    const rndCol = `rgb(${random(255)},${random(255)},${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    //alert(`Esta saltando el color ${rndCol}`);
}

parrafo.onclick = cambiarColor
div.onclick = cambiarColor
img.onclick = cambiarColor
h2.onclick = cambiarColor
boton.onfocus = cambiarColor