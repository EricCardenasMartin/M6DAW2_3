document.write(`<p class="paco">usuario: ${document.cookie.split('username=')[1].split(';')[0]}</p>`); // Enseño el nombre, recortando el string de cookies entre [username=] y [;] dando como resultado su valor. [usename=]paco[;] || La clase es para que el texto este a la derecha.

document.write(`<p class="countdown" id="countdown">0</p>`);

// document.onload = {
 	var countdown = document.getElementById('countdown');

 	var countdownInterval = window.setInterval(updateCountDown, 1000);
// }

function updateCountDown() {
	console.log('a');
	countdown.innerHTML = (parseInt(countdown.innerHTML)+1);

	if (parseInt(countdown.innerHTML) >= 20)
		clearInterval(countdownInterval);
}