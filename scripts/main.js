let miImage = document.querySelector('img');

miImage.onclick = function () {
	let miSrc = miImage.getAttribute('src');
	if (miSrc === 'images/mesa.jpg'){
	} else {
		miImage.setAttribute('src','images/mesa2.jpg');
	}
}


let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableNombreUsuario(){
	let miNombre = prompt('Por favor, ingresa tu nombre');
	if(!miNombre){
		estableNombreUsuario();
	} else{
		localStorage.setItem('nombre', miNombre);
		miTitulo.innerHTML = 'Mi mesa, ' + miNombre;
	}
}

if(!localStorage.getItem('nombre')){
	estableNombreUsuario();
} else{
	let nombreAlmacenado = localStorage.getItem('nombre');
	miTitulo.textContent = 'Mi mesa, ' + nombreAlmacenado;
}

miBoton.onclick = function(){
	estableNombreUsuario();
}