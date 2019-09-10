let links = document.querySelectorAll("nav a")

/*links.forEach( manipularLink )*/

links.forEach( function (link){                  //<----funcion anonima = no tiene nombre, se asignan al momento de necesitarla
	           console.log(link)

	           link.onclick = 	function ( e ){                                              
	           	
	
				e.preventDefault()                         


				console.log ("El culpable de este suceso es:")
				console.log(e.target)                    


				let url = e.target.href

				let rta = confirm(`Esta segurx que desea ir a ${e.target.innerText}?`)

				if( rta ){
				alert("Bye~bee")
				console.log("Hay que ir ak: " + url)
				window.location.href = url
				}
				}	
				}	 )

/*function manipularLink(link){
	//Aca manipulamos el link
	console.log(link)

	link.onclick = validar
}*/



/*function validar( e ){                                              // e de evento
	
	e.preventDefault()                         //<-- Frena el comportamiento predeterminado del link


	console.log ("El culpable de este suceso es:")
	console.log(e.target)                     //<--es EL elemento a traves del cual se provoca el evento


	let url = e.target.href

	let rta = confirm(`Esta segurx que desea ir a ${e.target.innerText}?`)

	if( rta ){
		alert("Bye~bee")
		console.log("Hay que ir ak: " + url)
		window.location.href = url
	}*/



