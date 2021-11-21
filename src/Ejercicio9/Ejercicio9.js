document.cookie = `username=${prompt("Introduce tu nombre de usuario pls:")};expires=${new Date(new Date().getTime() + 20*1000 )}`; // Guardamos la cookie que expirara dentro de 20 segundos a partir de ser generada

document.write(`<button onclick="window.location='reloj.html'">Reloj</button>`); // Creamos el boton que redirecciona a reloj.html