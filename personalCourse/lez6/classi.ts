module lez6
{
	//dichiarazione di una classe astratta
	abstract class Persona
	{
		protected nome: string
		protected cognome: string

		constructor(nome: string, cognome: string)
		{
			this.nome = nome
			this.cognome = cognome
		}
		presenta() : void
		{
			console.log(`ciao sono ${this.nome} ${this.cognome}`)
		}
		saluta(entity: Persona) : void
		{
			console.log(`hey ${entity.nome} ${entity.cognome} come stai`)
		}
		setNome(newNome: string): void
		{
			this.nome = newNome
		}
		setCognome()
		{

		}
		//si possono anche creare metodi astratti
		abstract test(): void
	}
	//classe con scorciatoia di typescript chiamato shorthand
	class ShortHandShowcase
	{
		//la dichiarazione e inizializzazione della variabile
		//avverrà tutta nel costruttore
		//la proprietà readonly rende impossibile da cambiare la
		//variabile che possiede questa proprietà
		constructor(private readonly val1N: number, private val2Str: string)
		{
		}

		showcase(): void
		{
			console.log(`this is ${this.val1N} and ${this.val2Str}`)
		}
		//I metodi e le prorpietà statiche sono proprietà
		//che possono essere chiamate senza usare un oggetto
		static daje(): void
		{
			console.log("daje romaaaaaa hai chiamato un metodo statico")
		}
	}
	/*
	classe figlia che deriva da persona
	*/
	class Studente extends Persona
	{
		//lo studente può avere un costruttore super
		//che praticamente riceve valori dal padre
		//e vengono definiti nel metodo super
		constructor(nome: string, cognome: string, private materiaPreferita: string)
		{
			super(nome, cognome)
		}
		test(): void
		{
			console.log("il test e stato un successo")
		}
	}
	//questa la utilizziamo per avere un'instanza singleton
	class Preside
	{
		//per riuscire però a inizializzare i valori del costruttore
		//c'è bisogno di un'istanza statica
		private static instance: Preside
		//per forzare la regola è buona norma mettere il costruttore privato
		private constructor(private nome: string, private cognome: string)
		{}
		static getInstance()
		{
			if (Preside.instance)
			{
				return this.instance
			}
			this.instance = new Preside('marco', 'verdi')
			return this.instance
		}
		presenta(): void
		{
			console.log(`Buongiorno sono il preside ${this.nome} ${this.cognome}`)
		}
	}
	// let entity: Persona = new Persona("carlo", "alberto")
	let	shortEr: ShortHandShowcase = new ShortHandShowcase(7, "lollo")
	let	entity: Studente = new Studente("carlo", "alberto", "scienze")
	// entity.presenta()
	entity.presenta()
	shortEr.showcase()
	ShortHandShowcase.daje()

	Preside.getInstance().presenta()
}
