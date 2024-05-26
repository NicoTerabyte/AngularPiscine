module lez9
{
	//il decorator base ha solo il costruttore di default
	//al suo interno
	//una decorator factory ha più attributi che può sfruttare
	//per assegnarle gli attributi però dovremmo implementare
	//uan funzione in una funzione
	function Logger(messaggio: string)
	{
		return function(constructor: any)
		{
			console.log(messaggio)
			console.log(constructor)
		}
	}

	//da errore però in realtà sta funzionando l'errore è farlocco
	@Logger('ciao sono il logger della classe prova')
	class Prova
	{
		constructor()
		{
			console.log("Sto creando un oggetto di prova")
		}
	}

	@Logger('ciao sono il logger della classe qwerty')
	class Qwerty
	{
		constructor()
		{
			console.log("Sto creando un oggetto di prova")
		}
	}

	const prova = new Prova()
}
