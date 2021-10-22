var nombreCF = prompt("Introduce el nombre de tu ciclo formativo pls:");
var nombreM = prompt("Introduce el nombre de una asignatura pls:");

if(nombreCF == "Daw")
	alert("has introducido el texto Daw");
else
	alert(nombreCF.toUpperCase() + " " + nombreM.toLowerCase());

alert(nombreCF + " tiene " + nombreCF.length + " caracteres :D");