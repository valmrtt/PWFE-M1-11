let links = document.querySelectorAll("nav a")

links.forEach( manipularLink )

function manipularLink(link){
	//Aca manipulamos el link
	console.log(link)

	link.onclick = validar
}

function validar( e ){                                              // e de evento
	
	e.preventDefault()                         //<-- Frena el comportamiento predeterminado del link

	let rta = confirm("Esta seguro que desea salir de la pag?")

	if( rta ){
		alert("Bye~bee")
	}
}
