# Appunti angular
Sono applicazioni in html che avvengono in una singola pagina web
è una pagina con singoli componenti che mostra ciò che ci serve.
Angular ci da un pacchetto per lavorare con js. Ci semplifica lo sviluppo delle applicazioni, risparmia tempo e fatica per il prodotto questo è un framework

## Le cartelle create da angular
La cartella node ci da la possibilità di gestire i pacchetti, infatti nella cartella ci sono i pacchetti che abbiamo installato e che ci permettono di utilizzare angular. Non comprendo come mai angular non possieda determinate cartelle rispetto a quelle nel video, alla fine mancava solo il file karma che sarebbe un file che nell'ambito lavorativo viene utilizzato per la fase di testing.
Nel file package.json abbiamo gli script che sostituiscono determinati comandi utilizzando le parole chiavi definite nella sezione script del file json
Sempre nel file la sezione "dependencies" definisce le dipendenze dalle quali il nostro progetto dipende.
Noi dipendiamo dai pacchetti definiti in questa sezione che a loro volta dipendono da altri pacchetti per questo ce ne sono così tanti.
Le "devdependencies" sono delle dipendenze che servono per lo sviluppatore e non sono fondamentali per angular ma servono a noi per lo sviluppo.
tsconfig.app.json fa riferimento al main di typescript
tsconfig.json serve per i file typescript
tsconfig.spec.json è dedicata alla fase di testing

## Ritorniamo alla teoria
I componenti sono i blocchi fonamentali per tutte le applicazioni angular, goni componente ha tre parti. La bellezza dei componenti è che li andiamo a riutilizzare. Creare un file a parte più piccolo che viene richiamato in base alle necessità. 
Un componente si compone di un template, uno stile e di javascript per renderlo dinamico e viene chiamato con un selettore.

Se usiamo il comando "ng g c nome" creeremo un nuovo componente in angular, questo è possibile perché stiamo utilizzando i comandi CLI di angular

Se vogliamo utilizzare angular in versione "no standalone" quando facciamo ng new nome progetto aggiungiamo anche la flag --standalone false

## Come usare Angular Material
Angular material è un sito sempre di google, dove si può reperire materiali e librerie per riuscire a migliorare il nostro sito più velocemente. Essendo che molto probabilmente utilizzeremo davvero tanti di questi moduli, Edoardo Midali consigliad i creare un file a parte chiamato per esempio: "materialDesign.module.ts che come l'app-routing viene importato nel file app.module.ts

## Il ciclo di vita di un componente
Il ciclo di vita di un componente è: quando mi serve, lo creo, quando non mi serve più lo distruggo.
Però in realtà è più complesso. ngOninit() il componente viene inizializzato dopo essere stato creato, ricordo che è una classe.
Viene fatto un controllo al componente e non appena inizializzato il contenuto esso viene controllato.
Poi viene controllata la view, che sarebbe il risultato finale del componente, dopodiché il componente rimane li finché non viene cambiata la pagina, nel caso poi tornassimo indietro verrà ripetuta la procedura, solo che alcune azioni non verranno ripetute perché basta che avvenganon una volta sola, tipo le fasi di creazione e inizializzazione del componente.
Il componente è sempre in ascolto.
Il ciclo di vita del componente ci permette di fare azioni mirate non appena avvengono specifiche azioni sul nostro sito

## Che cos'è il data binding
Leghiamo i dati.  Consiste nel collegare le parti presenti nella parte logica con quello che vede l'utente, il collegamento tra ciò che l'utente vede e quello che succede nell'applicazione, modifichiamo i modelli per avere dei componenti dinamici (tipo la card che è appunto un componente).
Il data binding si scompone in due categorie
1. data binding 1 one way, strada a senso unico unica via, stiamo portando i dati dalla logica al componente o viceversa
2. data binding 2 way i dati vanno sia da un lato che dall'altro in contemporanea.

Ci sono quattro modi di fare data-binding:
string interpolation cambiamento delle stringhe mostrato a schermo, property binding tramite colori e la modifca dello stile css in base a dterminati dati inviati da TS utilizziamo le proprietà per trasmettere un messaggio, event binding leghiamo degli eventi che compaiono su schermo e che lavoreranno con typescript uno specifico evento causa delle azioni tipo quando schicci "condividi" sui siti va dall'utente a ts rispetto a quelli precedenti, two way binding che è l'unico che usa la categoria two way binding, possiamo avere delle situazioni in cui prendiamo dei dati da ts ma se succede qualcosa li andiamo a cambiare.

Il data binding è fondamentale perché ci permette di creare dinamicità nella nostra applicazione.
Ricorda passare la logica sullo schermo e gestire le azioni dell'utente col backend

### String interpolation
Con string interpolation noi vogliamo mandare a schermo dei dati
Nella sezione HTML quando lo facciamo andare in combinazione con ts se volessimo usare degli if else dovremmo usare la logica dei ternari perché dobbiamo fare il tutto su di una riga soltanto. La logica è la seguente
condizione ? se vera fai questo : else

### Event binding
Vuol dire legare ciò che succede ad un nostro componente per fare in modo che succeda qualcosa.
Si possono creare dei metodi che si collegano ala pagina html, questi metodi sono sviluppati in ts, pare che basti svilupparli all'interno di una classe per poi essere richiamati dalla pagina html utilizzando delle azioni tra parentesi.
$event è una variabile particolare, è proprietaria di angular e viene usata negli eventi la variabile viene genarata quando si crea un evento, e questo evento genera dei dati.
Se noi buttiamo in un evento $event angular sa che noi prendiamo tutta questa serie di dati e li elaboriamo per conto nostro

### Two way binding
Consiste nel collegare ts e il componente HTML da entrambi i lati.
Abbiamo eventi in HTML che vanno a cambiare ts.
Utilizzando le [] e la caratteristica NgModel, dove si collega ad una variabile presente in ts, e con l'evento quando vado a schiacciare un input vado a modificare la variabile, però essendo che ha le parentesi quadre noi gli stiamo dicendo: Quando vado a modificare la variabile, fammi vedere la modifica esempio

```html
<!-- richiamo il metodo sviluppato nel file ts e ne usufruisco -->
<button mat-raised-button color="primary" (click)="onClick($event)">Primary</button>
<mat-form-field class="example-full-width">
    <mat-label>Favorite food</mat-label>
    <input matInput placeholder="Ex. Pizza" [(ngModel)]="title">
</mat-form-field>
<p>{{title}}</p>

```

E la variabile in questione risiede in questo snippet di codice di typescript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'corso_angular';

  //questo metodo si collegherà a app.component.html
  onInput(event: Event)
  {
    //quello tra <> è un casting visto che stiamo usando
    //un evento HTML
    console.log((<HTMLInputElement>event.target).value)
    this.title = (<HTMLInputElement>event.target).value
    if ((<HTMLInputElement>event.target).value == `pizza`)
    {
      (<HTMLInputElement>event.target).value = `ricchione`
    }
  }
  onClick(event: Event)
  {
    this.title = 'Ho cliccato il bottone'
  }
}
```

Quindi il 2 way binding sarebbe la modifica di una variabile, per esempio, sia dal lato html sia dal lato typescript, un evento che cambia con una variabile e cambia anche la variabile typescript

## Cosa sono le direttive
Le direttive sono classi che anziché componenti vengono viste appunto come direttive. E queste direttive, servono per essere messe sugli elementi nel html per andare a cambiare il comportamento degli elementi stessi.
ngModel è per esempio una direttiva. Perché è una classe messa a disposizione da angular per cambiare il comportamento di un elemento.
Si dividono in 3 categorie:
1. built-in
2. attribute
3. e structural

Le built-in sono quelle già presenti in angular
Le attribute è un attributo appunto che viene inserito nel tag html creato da noi che può fare determinate operazioni, modifica sia il comportamento che l'apparenza
Le strutturali sono scritte con l'* prima del nome e modificano la struttura del DOM

### Il DOM 
Certo, immagina che il DOM sia come una mappa o uno schema dell'intera pagina web. Ora, spiegherò cos'è il DOM in JavaScript con un linguaggio semplice e chiaro.

#### Cos'è il DOM?

DOM sta per **Document Object Model**. È un modo per rappresentare la struttura di una pagina web in modo che JavaScript (e altri linguaggi di programmazione) possano interagire con essa. Immagina che la tua pagina web sia un documento scritto in HTML. Il DOM trasforma questo documento in un modello ad albero che il tuo browser può usare per capire e modificare la pagina.

#### Come Funziona?

1. **Struttura ad Albero**: Pensa a un albero genealogico. In cima c'è un nodo principale (la radice) e sotto di esso ci sono i rami (nodi) che rappresentano gli elementi HTML. Il nodo principale del DOM è chiamato `document`.

2. **Nodi**: Ogni elemento HTML, attributo e testo nella tua pagina è un nodo nel DOM. Ci sono diversi tipi di nodi:
   - **Elementi**: Rappresentano i tag HTML (es. `<div>`, `<p>`, `<a>`).
   - **Attributi**: Rappresentano gli attributi dei tag HTML (es. `class`, `id`).
   - **Testi**: Rappresentano il contenuto testuale dentro gli elementi HTML.

3. **Navigare e Modificare**: Con JavaScript, puoi navigare attraverso questi nodi, aggiungere nuovi nodi, modificare il testo o gli attributi, e persino eliminare nodi. È come se avessi un telecomando che ti permette di cambiare qualsiasi cosa nella pagina web in tempo reale.

#### Un Esempio Pratico

Immagina di avere questa semplice pagina HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>La Mia Prima Pagina</title>
</head>
<body>
    <h1>Ciao, Mondo!</h1>
    <p>Questa è la mia prima pagina web.</p>
</body>
</html>
```

Quando questa pagina viene caricata nel browser, il DOM la rappresenta così:

```
document
 └── html
      ├── head
      │    └── title
      │         └── "La Mia Prima Pagina"
      └── body
           ├── h1
           │    └── "Ciao, Mondo!"
           └── p
                └── "Questa è la mia prima pagina web."
```

#### Interagire con il DOM Usando JavaScript

Ora, vediamo come puoi usare JavaScript per interagire con questa struttura.

1. **Selezionare un Elemento**:
   ```javascript
   var heading = document.querySelector('h1');
   ```

2. **Modificare il Testo**:
   ```javascript
   heading.textContent = 'Benvenuto nel Mondo del DOM!';
   ```

3. **Aggiungere un Nuovo Paragrafo**:
   ```javascript
   var newParagraph = document.createElement('p');Ho cliccato il bottone
   newParagraph.textContent = 'Sto imparando a manipolare il DOM!';
   document.body.appendChild(newParagraph);
   ```

In questo modo, puoi cambiare dinamicamente il contenuto della pagina web senza dover ricaricare la pagina.

#### Riassunto

Il DOM è una rappresentazione strutturata della tua pagina web che JavaScript può usare per leggere e modificare il contenuto e la struttura della pagina in modo dinamico. È come avere un telecomando che ti permette di fare qualsiasi cambiamento tu voglia sulla tua pagina web, direttamente dal codice.

Spero che questa spiegazione ti abbia aiutato a capire cos'è il DOM e come funziona!
In parole povere, il DOM è la struttura della pagina con i suoi tag attributi CSS e altro ancora, in pratica noi rendiamo **dinamico** il DOM utilizzando JavaScript, o nel nostro caso TypeScript, aggiungendo funzioni che modificano il comportamento dei tag, come per esempio facendo una to do list che aggiunge task appena premuto un pulsante, o aggiungendo attributi che migliorano i tag stessi, tipo evidenziare una parola quando viene inserita.

## NGIF
è la prima direttiva che vediamo nello specifico, ed è la prima direttiva strutturale e aggiunge o rimuove degli elementi HTML, ci permette di mostrare o no un elemento in base a delle condizioni.
il tag <ng-template> è un elemento che di base vede solo angular, non ha alcun tipo influenzato. è un wrapper che angular vede ma che il DOM non vede.
In questo caso, per esempio, l'abbiamo utilizzato per definire la conseguenza di un else usfruendo dell'assegnazione con il # definendo nell'else del tag <p> a quale variabile deve fare ricorso in caso l'if non sia veritiero
```html
<!-- richiamo il metodo sviluppato nel file ts e ne usufruisco -->
<button mat-raised-button color="primary" (click)="onClick($event)">Testing</button>
<mat-form-field class="example-full-width">
    <mat-label>Favorite food</mat-label>
    <input matInput placeholder="Ex. Pizza" [(ngModel)]="title">
</mat-form-field>
<!-- <p>{{title}}</p> -->
<p *ngIf="isVisible; else bloccoElse">Adesso ci vedo</p>
<ng-template #bloccoElse>
    <p>Non sono più visibile</p>
</ng-template>
```
Piccola nota la variabile con il # si chiama **variabile template**


## NGFOR
Un'altra drettiva che ci permette di ciclare, con i dati che abbiamo per generare per esempio un numero definito di elementi, come vedremo prenderemo un array di dati, e lo manderemo a schermo.
Nelle seguenti linee di codice per esempio ho usufruito di un'array di persone usate come attributi nella mia classe in typescript, ho preso questa lista è ho usato il ngFor per scorrerla e stamparla tutta in html
```html
<ul>
    <li *ngFor="let persona of persone">
        {{persona.nome}} - {{persona.cognome}}
    </li>
</ul>
```
ho creato la variabile persona con "let persona" è ho definito il suo utilizzo che sarebbe quello di essere una persona della lista persona, e che essa dev'essere stampata in un modo predefinito.
Una piccola nota interessante è che implicitamente ngFor possiede un indice che può uscire se richiesto quando chiamiamo ngFor.
Oppure possiede un counter per contare il numero di oggetti, il primo degli oggetti, l'ultimo, se sono di indice pari o dispari


## NGSwitch
Funziona principalmente come lo switch classico utilizzato nei linguaggi di codice, principalmente crea uno schema dov'è possibile creare multiple condizioni in base ad un caso definito. cosa particolare è che il ngSwitch non cambia direttamente il DOM, questo cosa comporta, che non verrà chiamato come gli altri due menzionati in precedenza, ma bensì viene dichirato con le parentesi quadre [ngSwitch]
Però e c'è un però, il ngSwitch possiede una proprietà che effettivamente modifica il DOM e si manifesta **solamente** quando usiamo il ngSwitch tra [], sto parlando del ngSwitchCase che nel mio caso viene triggherato diciamo quando, è all'interno di un tag html che usa [ngSwitch], per fare un esempio pratico:
```html
<div [ngSwitch]="numeroSwitch">
    <p *ngSwitchCase="1">uno</p>
    <p *ngSwitchCase="2">due</p>
    <p *ngSwitchCase="3">tre</p>
    <p *ngSwitchCase="4">quattro</p>
    <p *ngSwitchCase="5">cinque</p>
    <p *ngSwitchDefault>default</p>
</div>
```
Dove all'interno di div ci sta ngSwitch e i tag che usiamo al suo interno usano ngSwitchCase
Funziona anche con le stringhe ma bisogna mettere il valore, oltre alle normali "", tra ''


## NgStyle
Ci permette di cambiare lo stile di un elemento in base a dei dati. Praticamente darebbe la possibilità di attribuire uno stile CSS al tag così sul momento, puoi anche usufruire delle variabili definiti negli utenti per manipolare lo stile CSS

## NgClass (classi dinamiche)
Anziché cambiare lo stile a mano con ngStyle possiamo cambiare banalmente la classe e chiamare ngClass e aprofittarne, puoi cambiare tutto in una volta in questo esempio cambiamo sia il colore del cerchio sia lo stile del testo con una sola condizione, cioè principalmente anziché cambiare una statistica alla volta, ci limitiamo ad usfruire direttamente classi CSS, ah si possono mettere anche più classi conteporaneamente nella condizione, basta solo separarle da uno spazio.
Si possono anche usari gli operatori ternari per gestire le condizioni

## Passare dei dati dal componente parent al child
L'obiettivo è accedere ad un componente presente in un altro componente, per riuscire ad usare le sue caratteristiche.
Per ora pare che per riuscire nel passaggio di dati, ci sia bisogno di dichiarare il decoratore Input, nota per dichiararlo in maniera pulita nel codice ts, bisogna prima inserirlo nei valori di input.
Viene usato per dichiarare una variabile, con input angular sa che i valori che entrreranno nella variabile arriveranno da fuori.
Quindi con input prendiamo tutti i possibili dati grazie al tag personalizzato component, infatti qui prendiamo dall'altro file ts i dati che verranno inseriti in data
```html
<app-prova [data]="persone"></app-prova>
```

da notare che abbiamo usfruito del **property binding** per riuscire a prendere i dati dalla lista di persone.

esercizio: rifare tutto da capo, prova brother

## Passare dati da componente Child al Parent
Faremo il contrario di quello che abbiamo fatto prima. dobbiamo prendere una variabile dal figlio e farlo andare al padre, cioè l'altro componente.
A quanto pare serve usar un altro datasBinding per riuscire a passare questi dati, i componenti devono **uscire dal componente figlio** come escono?	con il decoratore **output**
Il modo per farli comunicare sarebbe quello di utilzzare degli eventi per mandare in output, usando il sistema di output, al padre e poi riceverlo per capire:
parte del figlio che crea una variabile output di tipo stringa e un metodo per mandarlo al padre:
```typescript
@Output() mandaDatiEvento = new EventEmitter<string>()
mandaDati()
  {
    this.mandaDatiEvento.emit(this.nome)
  }


//parte html
<button (click)="mandaDati()">Manda i dati al padre</button>
```
Padre che utilizza la variabile output del figlio per ricevere il dato e utilizza anche un suo metodo per elaborarla:
```typescript
riceviDatiEvento(value: string)
  {
    console.log(value)
  }

//parte html
 <!-- riceviamo i dati dell'evento grazie alla variabile Output nella classe figlio -->
<app-prova (mandaDatiEvento)="riceviDatiEvento($event)"></app-prova>

	
```
da parente a child si usa il property binding, da child a parent utilizzate l'event binding

## Le variabili template
Prenderemo le famose variabili template, quelle con #, che funzionano solo con angular per utilizzarle con typescript.
Per manipolare e usufruire dei template di Angular con ts, utilizziremo il decoratore "@Viewchild("nomeTemplate")"
E dice che ha un figlio nella view, parliamo di un elemento visibile all'utente che è dentro il componente.
Un figlio della view che si chiama InputSaluti nel mio caso.
Per definire la variabilre del decoratore potremmo banalmente usare any, ma ci viene suggerito di usare come specificatore, il definitore "ElementRef" questo perché così quando cercheremo il valore effettivo all'interno della variabile template, con l'autocompilazione il computer sa che questa variabile possiede un **NativeElement** al suo interno che è l'unico modo per reperire il value effettivo, visto che il type any **non ha** un nativeElement. la variabile dev'essere anche inizializzata o **assicurata** di non essere mai di valore NULL, per fare ciò ci basta inserire davanti al nome della variabile il punto esclamativo
```typescript
@ViewChild('inputSaluti') valoreInput!: ElementRef
```

Sappi che lavora bene con l'intefaccia "AfterVfiewInit" che ci permette di vedere se il template è stato realmente inizializzato.
Parte di codice che utilizza il afterview:
```typescript
  ngAfterViewInit(): void
  {
    console.log(this.valoreInput)
  } 
```

Però così si stampa il valore **Effettivo** della variabile template
 ```typescript
  onClickTemp(): void
  {
    //questo solo per stampare il valore effettivo del template
    //anche perché la struttura sarebbe così:
    //ElementRef->NativeElement->Value Quindi il valore non lo prendi così
    console.log(this.valoreInput.nativeElement.value);
  }


  //parte html
<input #inputSaluti value="valore">
<button (click)="onClickTemp"></button>
```
ricorda typescript più sei specifico più ti aiuta, infatti abbiamo specificato ancora di più la variabile viewchild così ci aiuterà di più il compilatore
```typescript
@ViewChild('inputSaluti') valoreInput!: ElementRef<HTMLInputElement>
```