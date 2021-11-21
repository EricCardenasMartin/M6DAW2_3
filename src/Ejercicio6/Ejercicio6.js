var fechaInput = prompt(`Por favor introduce una fecha en formato dd/mm/aaaa`); // Pedimos la fecha
fechaInput = fechaInput.split('/'); // Separamos la fecha para poder crearla de forma correcta
fechaInput = new Date(fechaInput[2] < 1000 ? 2000 + parseInt(fechaInput[2]) : fechaInput[2], parseInt(fechaInput[1])-1, fechaInput[0]); // Creamos la fecha (Lo primero se supone que se asegura que pone bien lo de antes del 2000 y lo de despues, pero estoy comentando esto bastante despues de hacerlo y leyendolo no estoy muy seguro de que sea necesario xd)

var diasSemana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var day,month,year,dayDate;

day = fechaInput.getDay()-1; // Guardamos el dia de la semana
dayDate = fechaInput.getDate(); // Guardamos el dia del mes
month = fechaInput.getMonth()+1; // Guardamos el mes
year = fechaInput.getFullYear(); // Guardamos el año

//Y lo imprimimos todo
document.write(`Formato estandar: ${fechaInput.toString()} `);
document.write(`${diasSemana[day]}`);

document.write(`<br/>`);

document.write(`${diasSemana[day]}, ${dayDate} de ${meses[month-1]} de ${year} `);
document.write(`- ${day+1 > 5 ? "Es" : "No es"} fin de semana `);

// Comprobamos si es entre 1 de julio y el 15 de septiembre para saber si es vacaciones
var isHolidays = (month < 7 || month > 9 || (month == 9 && dayDate > 15)) ? false : true;

document.write(`- ${ isHolidays ? "Es" : "No es "} vacaciones`);