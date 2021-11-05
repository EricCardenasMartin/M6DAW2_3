var fechaInput = prompt(`Por favor introduce una fecha en formato dd/mm/aaaa`);
fechaInput = fechaInput.split('/');
fechaInput = new Date(fechaInput[2] < 1000 ? 2000 + parseInt(fechaInput[2]) : fechaInput[2], parseInt(fechaInput[1])-1, fechaInput[0])

var diasSemana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var day,month,year,dayDate;

day = fechaInput.getDay()-1;
dayDate = fechaInput.getDate();
month = fechaInput.getMonth()+1;
year = fechaInput.getFullYear();

document.write(`Formato estandar: ${fechaInput.toString()} `);
document.write(`${diasSemana[day]}`);

document.write(`<br/>`);

document.write(`${diasSemana[day]}, ${dayDate} de ${meses[month-1]} de ${year} `);
document.write(`- ${day+1 > 5 ? "Es" : "No es"} fin de semana `);

var isHolidays = (month < 7 || month > 9 || (month == 9 && dayDate > 15)) ? false : true;

document.write(`- ${ isHolidays ? "Es" : "No es "} vacaciones`);