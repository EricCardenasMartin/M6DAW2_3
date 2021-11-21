// Es un link que al clicarlo te abre una ventana
document.write(`<a onclick="window.open('https://www.w3schools.com/','_blank','height=400,width=100')">www.w3cschool.com</a>`);

document.write('<br/><br/>');

console.log(navigator);

// toda la info del navegador a la que puede acceder javascript
for(let key in navigator)
	document.write(`${key}: ${navigator[key]}<br/>`);