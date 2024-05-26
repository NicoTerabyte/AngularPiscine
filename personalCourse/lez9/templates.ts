module lez9Pt2
{
	//qui proveremo a far comunicare tra di loro
	//l'html e il js
	function creaElemento(template: string, id: string, nome: string)
	{
		return function(constructor: any)
		{
			const container = document.getElementById(id)
			const prova = new constructor(nome)
			if (container)
			{
				container.innerHTML = template
				container.querySelector('h1')!.textContent = prova.nome
			}
		}
	}

	@creaElemento('<h1></h1>', 'container', 'Luca')
	class Prova
	{
		constructor(public nome: string)
		{
			console.log("Sto inizializzando l'oggetto prova")
		}
	}
}
