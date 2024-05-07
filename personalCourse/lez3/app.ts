//costruzione di un oggetto

// const persona =
// {
// 	nome : "luca",
// 	cognome : "rossi"
// }

//con questa dichiarazione non
//è possibile accedere alle variabili
//perché l'oggetto è vuoto
// let persona: object =
// {
// 		nome : "luca",
// 		cognome : "rossi"
// }


//funzione con un oggetto
function getData(data: {id: number, username: string, password: string})
{
	console.log(data.id)
}

let persona =
{
		nome : "luca",
		cognome : "rossi"
}

persona.nome


// inizializzazione con i tipi
let persona1:
{
	nome: string;
	cognome: string;
	eta: number
}

persona1 =
{
	nome : "luca",
	cognome : "rossi",
	eta : 21
}


let data =
{
	id: 5,
	username: "dralozzo",
	password: ""
}

getData(data)
