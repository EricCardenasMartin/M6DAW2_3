let horasDia = [0,3,0,0,2,0,0];

let horasTotalSemana = horasDia[0] + horasDia[1] + horasDia[2] + horasDia[3] + horasDia[4];



let fechaInicio = new Date(prompt(`Introduce la fecha de inicio de la uf pls:`));
let fechaFin = new Date(prompt(`Introduce la fecha de fin de la uf pls:`));



let oneDayMilliseconds = 24*60*60*1000; // Milisegundos en un dia



let fechaInicioProximoLunes = new Date(fechaInicio);


let inicioDia = fechaInicio.getDay();

if(inicioDia == 0)	//Si es domingo lo cambiamos por el dia 7, es mas intuitivo que el 0
	inicioDia = 7 


let inicioDiasHastaLunes = 0;


if(inicioDia != 1){	//si no es lunes buscamos el siguiente
	inicioDiasHastaLunes = oneDayMilliseconds * (7 - inicioDia + 1)
	fechaInicioProximoLunes.setTime(fechaInicio.getTime() + inicioDiasHastaLunes);

	/*
		Chuleta debugging:
			- ID = Dia de inicio: 	1 - Lunes => 7 - Domingo 
			- IL = Fecha: 			fechaInicioProximoLunes
				- DtM = Dias que faltan hasta el lunes (en milisegundos) 
				- DtM + I = Fecha del siguiente lunes (en milisegundos) 
	*/
	console.log(`Calculando el primer lunes...`);
	console.log(``);

	console.log(`ID: ${inicioDia}`);
	console.log(`IL: ${fechaInicioProximoLunes}`);
	console.log(`	DtM: ${inicioDiasHastaLunes}`);
	console.log(`	DtM+I: ${fechaInicio.getTime() + inicioDiasHastaLunes}`);
	console.log(``);
	console.log(`######################################`);
	console.log(``);

}



let fechaFinUltimoLunes = new Date(fechaFin);


let finDia = fechaFin.getDay();

if(finDia == 0)	//Si es domingo lo cambiamos por el dia 7, es mas intuitivo que el 0
	finDia = 7 


let finDiasDesdeLunes = 0;


if(finDia != 1){	//si no es lunes buscamos el siguiente
	finDiasDesdeLunes = oneDayMilliseconds * (finDia - 1);
	fechaFinUltimoLunes.setTime(fechaFin.getTime() - finDiasDesdeLunes);

	/*
		Chuleta debugging:
			- FD = Dia de fin: 	1 - Lunes => 7 - Domingo 
			- FL = Fecha: 			fechaFinUltimoLunes
				- DtM = Dias que han pasado desde el lunes (en milisegundos) 
				- F-DtM = Fecha del anterior lunes (en milisegundos) 
	*/

	console.log(`Calculando el ultimo lunes...`);
	console.log(``);

	console.log(`FD: ${finDia}`);
	console.log(`FL: ${fechaFinUltimoLunes}`);
	console.log(`	DtM: ${finDiasDesdeLunes}`);
	console.log(`	F-DtM: ${fechaFin.getTime() - finDiasDesdeLunes}`);
	console.log(``);
	console.log(`######################################`);
	console.log(``);

}

/*
	Chuleta debugging:
		- I = Fecha: FechaInicio
		- F = Fecha: FechaFin

		- IL = Fecha: fechaInicioProximoLunes
		- FL = Fecha: fechaFinUltimoLunes

		- IL = Fecha: fechaInicio (en milisegundos) 
		- FL = Fecha: FechaFin (en milisegundos) 
		
		- ODM = Un dia en milisegundos

		- S = Canidad de semanas que tiene la UF (desde IL hasta FL)
		- THUF = Total de horas que tiene la UF (desde IL hasta FL)
*/

console.log(`Calculando las horas de la uf desde el primer lunes hasta el ultimo lunes...`);
console.log(``);

console.log(`I: ${fechaInicio.toDateString()}`);
console.log(`F: ${fechaFin.toDateString()}`);
console.log(``);
console.log(`IL: ${fechaInicioProximoLunes.toDateString()}`);
console.log(`FL: ${fechaFinUltimoLunes.toDateString()}`);
console.log(``);
console.log(`IM: ${fechaInicio.getTime()}`);
console.log(`FM: ${fechaFin.getTime()}`);
console.log(``);
console.log(`ODM: ${oneDayMilliseconds}`);
console.log(``);

let semanasUF = (fechaFinUltimoLunes.getTime() - fechaInicioProximoLunes.getTime())/oneDayMilliseconds/7;

console.log(`S: ${semanasUF}`);

let totalHorasUF = semanasUF * horasTotalSemana

console.log(`THUF: ${totalHorasUF}`);

/*////////////////////////////////////////////////////////
				Las horas que faltan
////////////////////////////////////////////////////////*/

// Primera semana

if(inicioDia > 1){
	console.log(``);
	console.log(`Añadiendo las horas que faltan de la primera semana...`);
	console.log(``);

	for(let i = inicioDia-1; i < 7; i++){
		// console.log('FOR i='+i)
		// console.log('FOR array index='+(i))
		// console.log('FOR Horas dia='+horasDia[i])
		totalHorasUF += horasDia[i];
	}

	console.log(`THUF: ${totalHorasUF}`); // Total horas en la UF (desde I hasta FL)
}

// Ultima semana

if(finDia > 1){
	console.log(``);
	console.log(`Añadiendo las horas que faltan de la ultima semana...`);
	console.log(``);

	for(let i = finDia-1; i >= 0 ; i--){
		// console.log('FOR i='+i)
		// console.log('FOR array index='+(i))
		// console.log('FOR Horas dia='+horasDia[i])
		totalHorasUF += horasDia[i];
	}

	console.log(`THUF: ${totalHorasUF}`); // Total horas en la UF (desde I hasta F)
}

document.write(`La fecha de inicio de la UF es: ${fechaInicio.toDateString()}<br/>`);
document.write(`La fecha de finalización de la UF es: ${fechaFin.toDateString()}<br/>`);
document.write(`El número de horas que se impartirán en la UF es de ${totalHorasUF}.`);
// document.write(`De ${fechaInicio.toDateString()} a ${fechaFin.toDateString()} hay un total de ${totalHorasUF}h de M6 D:`);