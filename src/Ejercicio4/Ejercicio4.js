var target = Math.floor(Math.random() * (9 - 1) + 1); // Generamos el numero aleatorio
var n; // input introducido por el usuario
var intentos = 5; // cantidad de intentos que tendra el usuario

do{
	n = prompt("Introduce un numero del 1 al 9");

	if(isNaN(n)){ //comprobamos que sea un numero, en caso de no serlo avisamos al usuario
		 window.open("/src/Ejercicio4/isnan.html", "_blank");
	} else if(n < 1 || n > 9){ //comprobamos que el numero sea valido, en caso de no serlo avisamos al usuario
		 window.open("/src/Ejercicio4/outofrange.html", "_blank");
	} else if(n < target){//comprobamos si el numero es menor al que buscamos, en ese caso quitamos un inteno y avisamos al usuario
		intentos--;
		alert("¡Fallaste! El número que quieres acertar es MAYOR.");
	} else if(n > target){//comprobamos si el numero es mayor al que buscamos, en ese caso quitamos un inteno y avisamos al usuario
		intentos--;
		alert("¡Fallaste! El número que quieres acertar es MENOR.");
	}
}while(intentos > 0 && n != target); // Repetimos la validacion mientras sea un valor erroneo y queden intentos

if(n == target) // Si hemos acertado felicitamos al usuario por acertar
	alert(`Felicidades era ${n} :D`); 
else // Si no F
	alert(`Te has quedado sin intentos F D:`);