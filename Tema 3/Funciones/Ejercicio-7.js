function factorial(num) {
	if (num==0) {
		return 1
	} else{
		return num*factorial(num-1)
	};
};
document.write('<h1>Números factoriales del 1 al 10</h1><table bgcolor="black">')
for (var i = 1; i < 11; i++) {
	document.write(`<tr bgcolor="white"><td>${i}</td><td>${factorial(i)}</td></tr>`)
}

document.write('</table>')