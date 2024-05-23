module lez7SecPt
{

	interface Internet
	{
		ip: string

		connettiInternet(): void
	}

	abstract class Dispositivo
	{
		constructor(protected nome: string, protected anno: number){}

		abstract accendi(): void
		abstract spegni(): void
	}

	class Telefono extends Dispositivo
	{
		constructor(nome: string, anno: number)
		{
			super(nome, anno)
		}
		accendi(): void
		{
			console.log("Il telefono si accende")
		}
		spegni(): void
		{
			console.log("Il telefono si Spegne")
		}
	}

	class Smarthphone extends Dispositivo implements Internet
	{
		ip: string

		constructor(nome: string, anno: number, ip: string)
		{
			super(nome, anno)
			this.ip = ip
		}
		connettiInternet(): void
		{
			console.log("Lo smartphone si connette ad internet")
		}
		accendi(): void
		{
			console.log("lo smartphone si accende")
		}
		spegni(): void
		{
			console.log("lo smartphone si spegne")
		}

	}
	class Computer extends Dispositivo implements Internet
	{
		ip: string

		constructor(nome: string, anno: number, ip: string)
		{
			super(nome, anno)
			this.ip = ip
		}
		connettiInternet(): void
		{
			console.log("il computer si connette ad internet")
		}
		accendi(): void
		{
			console.log("il computer si accende")
		}
		spegni(): void
		{
			console.log("il computer si spegne")
		}
	}
	//le interfacce possono estendere altre interfacce
	interface X
	{
		nome: string
	}
	interface Y extends X
	{
		cognome: string
	}
	interface Z
	{
		numeroTelefono: string
	}
	//solo le interfacce posso estendere più classi/interfacce
	interface W extends Y, Z
	{
		via: string
	}

	class Individuo implements W
	{
		via: string
		cognome: string
		nome: string
		numeroTelefono: string

		constructor(via: string, cognome: string, nome: string, numeroTelefono: string)
		{
			this.via = via
			this.cognome = cognome
			this.nome = nome
			this.numeroTelefono = numeroTelefono
		}
	}

}
