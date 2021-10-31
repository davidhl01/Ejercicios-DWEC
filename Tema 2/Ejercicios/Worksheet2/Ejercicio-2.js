/*En una nueva página web, pide al usuario
un ángulo y calcula su seno, coseno y tangente.
*/
var grados = prompt('Dime los grados del ángulo: ');

function GradosRadianes(grados) {
    radianes = grados * Math.PI / 180
    return radianes
}
document.write(Math.sin(GradosRadianes(grados)));
document.write('<br>' + Math.cos(GradosRadianes(grados)));
document.write('<br>' + Math.tan(GradosRadianes(grados)));