module lez7
{
	//per creare un'interfaccia specifichiamo il tipo
	interface	Prova
	{
		nome: string
		//i metodi di un'interfaccia non possono essere
		//implementati
		base(): void
	}

	interface Qwerty
	{
		scrivi(): void
	}

	//regola interessante
	//si possono implementare più interfacce ma non si possono estendere
	//più classi
	class X implements Prova, Qwerty
	{
		// constructor(readonly nome: string)
		// {
		// 	this.nome = nome
		// }
		nome: string

		constructor(nome: string)
		{
			this.nome = nome
		}
		base(): void {
			console.log("ho implementato l'interfaccia")
		}
		scrivi(): void
		{
			console.log("qwerty")
		}
	}
}
