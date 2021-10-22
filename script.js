var texto, letra;

do{
	texto = prompt("Introduce un texto pls:");
	if(texto.length < 10)
		alert("El texto introducido tenia menos de 10 caracteres, porfavor introduce un texto mas largo UwU");
} while (texto.length < 10)

letra = prompt("Introduce una letra pls:");

regexp = new RegExp(letra, "gi");// es una ecpresion regular, equivale a /(la letra)/gi mas o menos, todas las coincidencias de letra en case insensitive

alert(`el texto "${texto}" tiene ${texto.match(regexp).length} coincidencias con la letra ${letra}`);