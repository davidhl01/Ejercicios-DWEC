/*Crea una web que genere una tabla con dos columnas.En la
primera un número ascendente y en la otra el valor de su seno.*/

document.write('<table border="0" cellspacing="2" bgcolor="black" text-align="center align="center >' +
    '<tr bgcolor = "white">' +
    '<th scope = "col">Numero</th>' +
    '<th scope = "col">Seno</th> </tr>');

for (var i = 0; i < 10; i++) {
    document.write(`<tr bgcolor="white"><td>${i}</td><td>${Math.sin(i)}</td></tr>`)
}

document.write('</table>')