var diasSemana = ["lunes","martes","miercoles","jueves","viernes"];
var horasDia = [5];

for(var dia in diasSemana)
	horasDia[dia] = prompt(`Cuantas horas de M6 tienes el ${diasSemana[dia]}`);

window.onload = () => {
	let tbody = document.getElementById("tBody");
	let total = document.getElementById("total");
	let totalHoras = 0;

	for(var dia in diasSemana){
		tbody.innerHTML += `<td>${diasSemana[dia]}:</td><td>${horasDia[dia]} horas.</td>`;
		totalHoras += parseInt(horasDia[dia]);
	}

	total.innerHTML = `${totalHoras} horas a la semana`;
}