/*Crea una web en la que cada vez
que se accede se muestre
una imagen (de modo aleatorio) de entre 3 posibles.*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
document.write(`<img src="img${getRandomIntInclusive(1,3)}.png">`);