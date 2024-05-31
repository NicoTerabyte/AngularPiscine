# Appunti typescript
con tsc file.ts puoi compilare il file typescript se invece anziché compilarlo in continuazione volessi compilarlo in continuazione aggiungi alla fine la flag -watch/w
tsc file.ts -w

tsc --init ci permette di creare un file di configurazione json che compilerà automaticamente tutti i file typescript quando mettiamo il compilatore in watchmode cioè usiamo solo tsc e basta.
Nel configure del file json possiamo decidere quali file vogliamo escludere e che il compilatore dovrà compilare, anche includerli volendo

Il configure ha anche una sezione target che definisce con quale compilatore stiamo lavorando, volendo possiamo usare vecchie versioni del compilatore

La sourceMap, se la mettiamo il debugger del browser riconoscerà i file ts come file intermedi e c'è li farà vedere

nel compilatore rootdir definisce quale cartella con ts il compilatore dovrà compilare

outdir nel compilatore serve per salvare la compilazione dei file ts in un'altra cartella cosicché tu abbia in maniera ordinata i file js e ts separati, è forse una delle opzioni più comode per il compilatore

Fun fact puoi direttamente dichiarare gli attributi nel costruttore di una classe in typescript senza dover necessariamente dichiararli all'inizio della classe.
Per esempio:
```typescript
//classe con scorciatoia di typescript chiamato shorthand
	class ShortHandShowcase
	{
		//la dichiarazione e inizializzazione della variabile
		//avverrà tutta nel costruttore

		constructor(private val1N: number, private val2Str: string)
		{}
		showcase(): void
		{
			console.log(`this is ${this.val1N} and ${this.val2Str}`)
		}
	}

```
## I decorators
I decorators sono molto usati in angular ma derivano da Typescript, essi sono delle funzioni che noi andiamo a creare e che applichiamo ad una classe o ad altro utilizzando la @
è una funzione che assegniamo ad una classe e che viene agganciata ad una classe

ricapitolando è una funzione che assegniamo ad una classe e parte appena lanciamo il programma.
Una decorator factory è un decorator a cui passiamo dei parametri.
Piccola nota dell'autore, per far funzionare come si deve i decorators, c'è bisogno che utilizziamo anche il file di configurazione e che al suo interno decommentare la riga con su scritto:
""experimentalDecorators": true,"
