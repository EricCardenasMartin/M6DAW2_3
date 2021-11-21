var diasSemana = ["lunes","martes","miercoles","jueves","viernes"]; //Creamos el array con los dias
var horasDia = [5]; //Creamos el array con los dias

for(var dia in diasSemana) // Pedimos las horas de cada dia
	horasDia[dia] = prompt(`Cuantas horas de M6 tienes el ${diasSemana[dia]}`);

window.onload = () => {
	let tbody = document.getElementById("tBody"); //Nos guardamos el cuerpo de la tabla
	let total = document.getElementById("total");//Nos guardamos el pie de la tabla
	let totalHoras = 0;

	for(var dia in diasSemana){ // creamos cada fila con su nombre del dia y las horas que hay
		tbody.innerHTML += `<td>${diasSemana[dia]}:</td><td>${horasDia[dia]} horas.</td>`;
		totalHoras += parseInt(horasDia[dia]); // Sumamos las horas del dia al total
	}

	total.innerHTML = `${totalHoras} horas a la semana`; // Ponemos el total de horas en el pie
}