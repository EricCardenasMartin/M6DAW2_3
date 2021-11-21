var nombreCF = prompt("Introduce el nombre de tu ciclo formativo pls:");// Pedimos el nombre del curso formativo
var nombreM = prompt("Introduce el nombre de una asignatura pls:");// Pedimos el nombre del modulo

if(nombreCF == "Daw") //Si el DF es Das avisamos mediante un alert
	alert("has introducido el texto Daw");
else // Sino sacamos el CF en mayusculas seguido del modulo en minusculas meidante un alert
	alert(nombreCF.toUpperCase() + " " + nombreM.toLowerCase());

alert(nombreCF + " tiene " + nombreCF.length + " caracteres :D");//De todas formas sacamos por un alert el nombre del cf y cuantos caracteres tiene