//any è una tipologia che accetta qualsiasi cosa
//ho imparato che i moduli separano le parti tra un file
//e l'altro cosìcché io non debba ogni volta cambiare nomi per le variabili
module Lez4
{
	let	prova: any[] = [1, 'ciao']
	let tupla: [any, number] = ['ciao', 5]
	let object:
	{
		code: 3456
	}

	//union variable che è un unione di più elementi
	//usato per circoscrivere l'utilizzo della variabile
	let test: string | number | string[] = ['ciap', 'come stai']

	//custom types usato quando l'oggetto ha troppi dati al suo interno
	//per esempio
	type Persona =
	{
		nome: string;
		cognome: string;
		// eta: number;
		// indirizzo: string;
		// coloriPreferiti: string[]
	}

	let persona: Persona
	persona =
	{
		nome: 'Carlo',
		cognome: 'Rossi'
	}

	//funzione che utilizza un tipo personalizzato
	function findPersona(persona: Persona)
	{}

	//puoi fare anche custom types con gli union
	type	Duo = number | string

	let	x : Duo = 'ciao'
}
