document.write(`<p class="paco">usuario: ${document.cookie.split('username=')[1].split(';')[0]}</p>`); // Enseño el nombre, recortando el string de cookies entre [username=] y [;] dando como resultado su valor. [usename=]paco[;] || La clase es para que el texto este a la derecha.

document.write(`<p class="countdown" id="countdown">0</p>`); // Creamos el contador

var countdown = document.getElementById('countdown'); // Nos guardamos el contador

var countdownInterval = window.setInterval(updateCountDown, 1000); // Creamos el interval para actualizarse cada segundo

function updateCountDown() {
	countdown.innerHTML = (parseInt(countdown.innerHTML)+1); // Actualizamos el contador

	if (parseInt(countdown.innerHTML) >= 20) // Si ha acabado el contador matamos el interval
		clearInterval(countdownInterval);
}