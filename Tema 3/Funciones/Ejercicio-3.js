/*3. Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores.*/

function lanzamiento(){
    return Math.round(Math.random()*(6-1)+1);
};

function simulacion() {
	uno = 0
	dos = 0
	tres = 0
	cuatro = 0
	cinco = 0
	seis = 0
	for (var i = 0; i < 6001; i++) {
		let numeroAleatorio = lanzamiento()
		if (numeroAleatorio==1) {
			uno++
		}else if (numeroAleatorio==2) {
			dos++
		}else if (numeroAleatorio==3) {
			tres++
		}else if (numeroAleatorio==4) {
			cuatro++
		}else if (numeroAleatorio==5) {
			cinco++
		}else if (numeroAleatorio==6) {
			seis++
		};
	};
	return (`1: ${uno}<br>2: ${dos}<br>3: ${tres}<br>4: ${cuatro}<br>5: ${cinco}<br>6: ${seis}`)
};

document.write(simulacion())