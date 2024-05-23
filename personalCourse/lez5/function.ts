module lez5
{
	//un parametro di default è un parametro autogestito
	//e già inizializzato che nel caso la funzione non venisse inserito
	//il secondo numero in questo caso userebbe quello di default
	function somma(num1 = 18, defParam = 1): number
	{
		return num1 + defParam
	}
	//funzione che non usa il return se invece potrebbe returnare oppure
	//no inserisci any
	function doAndNothing(val1: string, val2 = 'Lorenzo'): void
	{
		console.log(val1 + ' '+ val2)
	}
	let prova: Function
	prova = somma

	//valore che lavora con una raw function
	let	raw: (x: number, y: number) => number

	raw = somma
	raw(15, 18)
	//puoi ovviamente passare i valori di funzioni all'interno di altre funzioni
}
