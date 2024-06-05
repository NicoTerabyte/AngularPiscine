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

## Creare delle direttive
Utilizzando angular CLI che sarebbero i comandi da terminale, noi creiamo la nostra direttiva utilizzando il comando "ng g d highlight" che in versione integrale sarebbe "ng generate directive".
Per essere definita come direttiva essa sarà provvista del decoratore 	"@Directive" nel suo file typescript.
dopo averla dichiarata e aver fatto il costruttore
```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef)
  {
    this.element.nativeElement.style.backgroundColor = 'yellow'
  }

}

```
Andiamo a chiamare la direttiva nel tag paragrafo nel file principale, che sarebbe app.component.html
```html
<!-- Inseriamo la direttiva nel tag del paragrafo -->
<p appHighlight>ciao sono un paragrafo</p>
```
E il paragrafo avrà tutti gli attributi assegnati alla direttiva, che siano metodi, variabili ecc…
Pare che il binding delle variabili con i selettori non sia così scontato. da quanto ho capito, per fare iol binding correttamente usando il decoratore Input per far andare al figlio, che è una direttivva, il valore del padre, bisogna chiamare la variabile con lo stesso nome del selettore presente nella direttiva.
Per capire meglio faccio vedere il codice
```typescript
//codice della direttiva
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  //notare come la direttiva abbia lo stesso nome del selettore
  @Input() appHighlight = ''
}


//property binding applicata nel app.component.html
<p [appHighlight]="colore">ciao sono un paragrafo</p>
```
se usassimo altre proprietà create nella nostra direttiva, il nome della variabile non importerebbe, è solo la prima variabile della direttiva che **dovrebbe essere** uguale al nome del selettore

## Le funzioni pipe
Le pipes sono delle funzioni che possiamo utilizzare all'interno delle espressioni stringa (string interpolation).
La pipe per aggiungere modifiche sul momento ad un valore presente nella classe ts, quindi quando usiamo la string interpolation {{}}
Puoi anche direttamente formattare le date con le pipe e sulla documentazione puoi vedere come formattarla cercando tipo pipe date format.
la decimal pipe ci permette di inserire i decimali si usa con number
La percentage pipe funziona uguale alla decimal si usa con percent
La currency pipe serve per mostrare i valori con vicino un valore monetario di una variabile number.
Pipe showcase:
```html
<p>Ciao benvenuti al {{title | uppercase}}</p>
<p>Oggi che giorno è: {{today | date}}</p>
<p>Oggi che giorno è: {{today | date:'medium'}}</p>
<p>Oggi che giorno è: {{today | date:'d MMM yyyy - h:mm:ss'}}</p>
<!-- i valori dei decimali definiscono quante cifre intere ci stano 1
e quante decimali 1, però il - vicino al numero di decimali definisce
quante massimo ce ne possono stare (quindi massimo 4 cifre decimali)
la stessa cosa si può applicare con il numero di cifre per un numero intero -->
<p>decimal pipe showcase: {{val | number:'1.1-4'}}</p>
<p>decimal pipe showcase: {{val | percent:'1.0-4'}}</p>
<p>decimal pipe showcase: {{val | currency:'EUR':'code'}}</p>
```

## Cosa sono i service
Perché li usiamo? Loro sono al di fuori dell'applicazione e ci permettono di comunicare con chiunque in modo trasversale. La seconda motivazione è che i componenti devono limitarsi a mostrare a schermo cose, e non dovrebbero avere al loro interno logica che sarebbero delegati ai services, tipo determinati dati che potrebbero servire a tutta l'applicazione, i dati più importanti per esempio dovrebbero essere inseriti sopratutto nei services, l'obiettivo utlimo del componente è mandare a schermo roba.
Utilizzeremo un nuovo comando generate per creare un nuovo service.
Useremo: ng g s nomeServizio
La s sta per service. 
Il suo import possiede il decoratore @Injectable iniettabile, il che significa che noi possiamo "iniettare" il nostro service in giro, visto che esso viene inserito all'interno di altri componenti, viene inniettato nel nostro component.
Per capire la struttura del service:
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvaService {

  constructor() { }
}

```

Dove providedIn sarebbe da dov'è che è disposizione, nella root significa che chiuque può chiamare questo servizio, però questo significa anche che potremmo cambiare il providedIn per renderlo disponibile solo a determinati componenti.
Ricorda, un servizio è definito tale solamente se è @Injectable.
**Piccola nota** app.modules.ts possiede una sezione chiamata, providers, suona familiare? Si perché è li che possiamo definire i servizi di cui usufruire se non definiti nella classe, in più c'è la definizione root quindi non serve proprio definirlo anche in app modules.
Il service è il cervello del programma, più service significa più compiti ben disposti, i componenti sfruttano i service per usufruire della loro logica.
Banalmente per utilizzare un servizio in un altro componente basta, per esempio nel costruttore, dichiararlo definendo il tipo con il nome della classe service
Esempio nel componente di prova:
```typescript
  constructor(provaService: ServiceProvaService)
  {
    console.log("costruttore")
  }
```

Ma perché l'abbiamo dichiarato direttamente nel costruttore? Perché è come la classica classe typescript ha la stessa definizione e può essere richimata per costruiew in questo caso quest'altra classe avendo una variabile di quel tipo.

comunque il service è davvero comodo ed è praticamente la parte di programmazione dietro all'elaborazione dati

## Cambiare pagina con il routing
è la capacità di spostarci da una pagina all'altra, o mostrare un componente invecfe che un altro, almeno con angular, visto che angular è un'applicazione single page.
Di norma il file di routing.ts viene creato quando crei il progetto angular, all'inizio, però nel caso dovessimo generarlo si può digitare il comando:
ng g m app-routing --flat --module=app

La parte importante di questo modulo è la sua possibilità di inserire dei percorsi e componenti grazie all'array di oggetti predefinito chiamato **routes**
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Per gestire i componenti e decidere quale fare vedere o no e "falsificare" il cambio pagina tra un componente ad un altro, avremo bisogno di definire gli url dei componenti.
Con il tag router-outlet definiremo i vari component al loro interno, è una sorta di area di lavoro che distingue i vari componenti.
Cambiamo i route per permettere ai nostri componenti di apparire in determinati modi
```typescript
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},

];
```
Per spiegare cosa intendo, nel primo caso avremo "http://localhost:4200" che mostrerà il contenuto del componente home (creato prima con  ng g c components/home ) ma se mettiamo per esempio "http://localhost:4200/about" ci sposteremo e vedremo l'output del componente about (sempre creato prima eh, come avevamo fatto per prova all'inizio).

## Come fare routing con parametri
Sarebbe avere un url con un altro url al suo interno o per meglio dire un id, che in questo caso sarebbe il parametro. Per aggiungere il parametro a una delle pagine di routing
Modifichiamo il ifle di routing aggiungendo la possibilità di gestire degli id (nome del parametro a piacere) da parte del nostra pagina contact:
```typescript
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact/:id', component: ContactComponent},
];
```

Poi aggiungiamo una variabile di tipo ActivatedRoute al componente contact, e usiamo il metodo snapshot seguito da paramap seguito dal nome messo per definire il parametro di contact, cioè id

```typescript
  ngOnInit(): void
  {
    this.persone = this.servizio.getPersone()
    this.route.snapshot.paramMap.get(':id')
  }
```
Per prendere l'id assegnato nell'app routing, bisogna prenderlo dal componente.
Si può usare ng-template sui secondi blocchi usandola per fare un l'else di un *ngIf per essere più chiari guarda il seguente codice dove abbiamo messo una casistica per controllare se l'utente avesse scelto un determinato individuo nella lista contacts presentata in html
```html
<div *ngIf="!isProfile; else profiloContatto">
	<p style="text-transform: uppercase; margin-top: 15px;">lista contatti</p>
	<div *ngFor="let persona of persone">
		<p>{{persona.nome}} - {{persona.cognome}}</p>
	</div>
</div>
<ng-template #profiloContatto>
	<p>Profilo di Carlone</p>
</ng-template>
```

Poi per rendere il profilo visibile singolarmente utilizzeremo il router-link classico, ma utilizzeremo una tattica in più precisa, definiremo anche il path del link	, e per entrare nel contatto preciso teniamo conto dell'indice di scorrimento del suddetto (cosa che possiamo fare grazie a ngFor)

```html
<div *ngIf="!isProfile; else profiloContatto">
	<p style="text-transform: uppercase; margin-top: 15px;">lista contatti</p>
	<div *ngFor="let persona of persone; index as i">
		<a routerLink="/contacts/{{i}}"><p>{{persona.nome}} - {{persona.cognome}}</p></a>
	</div>
</div>
<ng-template #profiloContatto>
	<p>Profilo di {{persona.nome}} {{persona.cognome}}</p>
</ng-template>

```

## Routing children per caricare i sottocomponenti
Vorremmo che tutta la procedura della visione contatti avvenga sulla pagina dei contatti e che un valore figlio a lato della pagina mostri il profilo del contatto scelto.
Allora la procedura è stata la seguente:
Abbiamo creato nuovamente un altro componente chiamato contact che usiamo per trasmettere il contatto singolo.
abbiamo inserito in contact la variabile "persona" che gestirà il contatto che andiamo a prendere dall'altro componente (contacts), gli abbiamo aggiunto il decoratore @Input() per permettere il property binding.
Abbiamo fatto la stampa in contact.html dell'utente che andiamo a prendere
e abbiamo chiamato il componente in contacts
```html
<div *ngIf="!isProfile; else profiloContatto">
	<p style="text-transform: uppercase; margin-top: 15px;">lista contatti</p>
	<div *ngFor="let persona of persone; index as i">
		<a routerLink="/contacts/{{i}}"><p>{{persona.nome}} - {{persona.cognome}}</p></a>
	</div>
</div>
<ng-template #profiloContatto>
	//property binding
	<app-contact [persona]="persona"></app-contact>
</ng-template>

```
E questa sarebbe la fase1 la fase due però consisterebbe nel mettere a lato questi profili così li vediamo in tempo reale.
torniamo al file del routing e aggiungiamo, la proprietà children al componente contacts
```typescript
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent, children:[
	{path: ':id', component: ContactComponent}
  ]},

];
```
children è una proprietà che può contenere un array di path, e li metteremo il vecchio path dell'id tenendo solo l'id come path e togliendo contacts. metteremo anche chi sarebbe il componente figlo, che sarebbe contact al singolare, e voilà adesso ci rimane sistemare il router outlet per trasmettere a schermo le variabili a lato, pare.
Fun fact se metti il simbolo + davanti ad una variabile la stai **parsando in un intero**

```typescript
this.id = +this.route.snapshot.paramMap.get('id')!
```

Il giro del fumo (riassunto)
Contatti/contacts:
In contatti prendiamo this.persone e usiamo il servizio per salvare il dato nella variabile persone.
le mandiamo a schermo con ngFor e mettiamo il router link per collegarlo agli id dei contatti, però questa volta abbiamo messo il router-outlet, questo perché se vogliamo ogni volta in un componente caricare un altro componente dinamico, non sapendo se abbiamo quel componente o qualcos'altro lo mettiamo sopratutto se abbiamo un router-child.
nel caso base siamo su contatti component, però con il router-outlet ci assicuriamo che se carichiamo un componente dentro ContattiComponent prendiamo quello al suo interno che in questo caso sarebbe Contact/contatto (singolo) che è il figlio.
Quindi cosa succede nel componente figlo Contact? andiamo a iscrivere/sottoscrivere alla mappa di parametri, quando cambia siamo sul child route per questo siamo obbligati ad iscriverci, e quando facciamo la sottoscrizione andiamo a prendere il nostro parametro e lo riassegniamo.

Da fare:
* Tocca revisionare delle parti mancanti da sapere
    * Perché facciamo router link qui?
```html
<div>
	<p style="text-transform: uppercase; margin-top: 15px;">lista contatti</p>
	<div>
		<div *ngFor="let persona of persone; index as i">
			<a routerLink="/contacts/{{i}}"><p>{{persona.nome}} - {{persona.cognome}}</p></a>
		</div>
	</div>
</div>
<router-outlet></router-outlet>
```
Come si collegano i blocchi e per cosa usiamo router-outlet
RISPOSTA: il routerLink è per capire a cosa ci stiamo collegando quando clicchiamo sulla scritta con il link (quello a cui ci stiamo collegando è semplicemente il link dove troveremo i valori) che poi farà apparire i dati nella zona dov'è presente il router outlet per questo usiamo entrambi 
* come l'architettura della classe figlio ci permette di rendere così dinamico il routing, per la precisione capire come funziona, il subcribe come ci permette di portare a termine, l'obiettivo di dinamicità? come funziona paramap perché ha subscribe
* che cazzo succede qui?
```typescript
subscribe((params: ParamMap)=>{
      this.id = +params.get('id')!
      
```
* Aggiungere più dati alle persone
* Aggiungere con angular material per abbellire il prodotto



Per essere più concreti con l'analisi cito chatgpt che mi ha aiutato a comprendere meglio i miei dubbi:

Il routing in Angular può sembrare complesso inizialmente, ma una volta capiti i concetti di base, diventa molto potente e flessibile. Vediamo di chiarire i tuoi dubbi passo dopo passo.

### 1. Il File di Routing

Il tuo file di routing definisce le rotte principali dell'applicazione e le rotte figlie. Ecco il codice:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent, children:[
    {path:':id', component: ContactComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### 2. Template HTML del Componente `Contacts`

Ecco il codice del template:

```html
<div>
  <p style="text-transform: uppercase; margin-top: 15px;">lista contatti</p>
  <div>
    <div *ngFor="let persona of persone; index as i">
      <a [routerLink]="['/contacts', i]"><p>{{persona.nome}} - {{persona.cognome}}</p></a>
    </div>
  </div>
</div>
<router-outlet></router-outlet>
```

#### Spiegazione dei Dubbi

1. **Perché usare `<a [routerLink]="['/contacts', i]">` se abbiamo già `router-outlet`?**

   - Il `routerLink` è utilizzato per creare un link che, quando cliccato, modifica l'URL e naviga verso la rotta specificata.
   - `router-outlet` è il punto in cui viene caricato il contenuto della rotta corrispondente.
   - In questo caso, cliccando su uno dei link generati da `routerLink`, l'URL cambia in `/contacts/{id}` e Angular carica dinamicamente il componente `ContactComponent` all'interno di `router-outlet`.

2. **Perché usiamo `router-outlet`? Come crea la magia per collegarci alla pagina figlio?**

   - `router-outlet` è un segnaposto dove i componenti associati alle rotte figlie vengono inseriti.
   - Quando navighi verso `/contacts/{id}`, Angular riconosce la rotta e carica il componente `ContactComponent` all'interno del `router-outlet` definito nel template del componente `ContactsComponent`.

### 3. Componente Figlio `ContactComponent`

Ecco il codice del componente figlio:

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceProvaService } from 'path-to-service-prova-service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  persona: any;
  id: number;

  constructor(private route: ActivatedRoute, private servizioProva: ServiceProvaService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      this.persona = this.servizioProva.getPersona(this.id);
    });
  }
}
```

#### Spiegazione del Codice

1. **Costruttore e `ngOnInit`**

   - Il costruttore inietta `ActivatedRoute` per ottenere informazioni sulla rotta attiva.
   - `ngOnInit` è un metodo del ciclo di vita di Angular chiamato una volta che il componente è inizializzato.

2. **Sottoscrizione a `paramMap`**

   ```typescript
   this.route.paramMap.subscribe((params: ParamMap) => {
     this.id = +params.get('id')!;
     this.persona = this.servizioProva.getPersona(this.id);
   });
   ```

   - `paramMap` è una mappa dei parametri della rotta attiva. In questo caso, stai ottenendo il parametro `id`.
   - `+params.get('id')!` è un modo per convertire il parametro `id` da stringa a numero (`+` è l'operatore di coercizione).
   - `this.persona = this.servizioProva.getPersona(this.id)` chiama un servizio per ottenere i dati della persona con l'ID specificato.

### Miglioramenti e Considerazioni

1. **Utilizzare Parametri Tipizzati**

   Potresti voler utilizzare parametri tipizzati per evitare l'uso di `!` (non-null assertion operator) e rendere il codice più robusto:

   ```typescript
   this.route.paramMap.subscribe(params => {
     const id = params.get('id');
     if (id !== null) {
       this.id = +id;
       this.persona = this.servizioProva.getPersona(this.id);
     }
   });
   ```

2. **Verifica delle Rotte**

   Assicurati che il servizio `ServiceProvaService` restituisca correttamente i dati delle persone per evitare errori runtime.

3. **Feedback Utente**

   Aggiungi del feedback per l'utente mentre i dati vengono caricati, ad esempio uno spinner di caricamento.

### Conclusione

- **`routerLink`**: Crea link che aggiornano l'URL e attivano il caricamento dei componenti appropriati tramite `router-outlet`.
- **`router-outlet`**: Segnaposto per il contenuto delle rotte figlie, caricando dinamicamente i componenti in base all'URL.
- **Componente Figlio (`ContactComponent`)**: Utilizza `ActivatedRoute` per accedere ai parametri della rotta e caricare i dati appropriati tramite un servizio.

Spero che queste spiegazioni ti aiutino a comprendere meglio il routing in Angular e come collegare dinamicamente i componenti padre e figlio. Se hai ulteriori domande, non esitare a chiedere!

### concetti chiave:
Il metodo subscribe serve perché monitora i dati in continuazione, se avviene un cambiamento (viene schiacciato un altro dato), subscribe verrà chiamato nuovamente. La funzione come spiegato cambia 	this.id e this.persona ogni volta.
e paramap pare, una mappa dei parametri della rotta corrente.
Da quel che ho capito il => viene usato per sostituire delle funzioni anonime a quanto pare, devo capire meglio il concetto.
Allora ho capito come funziona il =>
Esso sarebbe una funziona anonima senza nome che fa il suo dovere sul momento, nel contesto di subscribe, questa funzione ha il compito di ritornare a suscribe i valori che vengono cambiati tra parentesi grazie alla freccia (fat arrow viene chiamata).
per esempio:
```typescript
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.id = +params.get('id')!
      this.persona = this.servizioProva.getPersona(this.id)
    })
```
immagina che params venga messo dentro una funzione, infatti lo è vedi le parentesi?
e che questa funzione sia void infatti non c'è un return, però i valori vengono camviati dinamicamente e rimangono cambiati per poi essere messi in pasto a subscribe, che ancora non capisco che parametri accetta, ma capisco come funziona	. Però sappiamo che i valori, essendo della classe e chiamati con this, vengono aggiornati in tempo reale.

## Redirect ed errori
è possibile con la modifica del file di routing riuscire a definire un path nel caos l'utente vada i dei path sbagliati con l'url

aggiungiamo il path ai vari path già esistenti nel routing
```typescript
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent, children:[
    {path:':id', component: ContactComponent}
  ]},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo:'/404'}
];
```
Abbiamo creato il componente per dare il messaggio di errore e sotto di esso abbiamo definito il redirect per farlo arrivare alla pagina dove viene segnalato l'errore.
E piccola nota, il redirect va sempre SOTTO al componente in cui deve essere ridirezzionato, ma più che altro è una caratteristica degli asterischi che non ti permetteranno più di cambiare pagina se lo definisci sopra.

## Proteggere l'accesso alle pagine con routing-guard
Per utilizzare un file di guarding devi crearlo come i component o i services, solo che devi usare la sua flag per creare il guard:
ecco il comando da fare:
```bash
ng g guard cartellaDoveLoVuoiInserire
```
Per dopo: il mio guard non è uguale al suo devo capire perché manca così tanta roba.
Il problema:
Perché il mio auth guard è diverso da quello del professore?

A quanto pare le classi authguard sono obsolete e non si usano più sin da angular 15, quindi al posto di usare una classe usiamo una functional guards che sarebbero praticamente funzioni invece che classi, funzionali che farebbero lo stesso compito con meno righe di codice.
la cosa difficile è comprendere come utilizzare una functional guard al posto di quella class based, quindi
* capire le functional guards
* sostituire le class based con le functional
* fare la lezione 27 con la functional guard

Piccola aggiunta le routing functional guard, sono molto volatili possono essere create così e richiamate dal file di routing pare.
Abbiamo fino ad ora implementato la routing guard attraverso la functionality del guard, adesso ci manca vedere se riesco ad adattare il video con quello che sto facendo io, visto che il video e outdated. Infatti per passare i dati del service all routing functional guard ho dovuto iniettare in una variabili i dati di sevice
il mio authGuard:
```typescript
export const AuthGuard : CanActivateFn = (route, state) => {
	const auth = inject(AuthService);
	const router = inject(Router)
	if (auth.isLoggedIn)
	{
		return true;
	}
	router.navigate(['home'])
	return false;
};

```
La vera differenza negli authGuard è anche che la classe può averli tutti in uno, e deve gestirli tutti, invece la functional li gestisce una funzione alla volta.
è possibile gestire anche i figli di un componente con magari una sicurezza più severa.
Quindi per farlo nel file di authGuard aggiungiamo pure functional guard per il controllo dei figli
```typescript
export const AuthGuardChild: CanActivateChildFn = (route, state) =>{
	const auth = inject(AuthService);
	const router = inject(Router)
	if (auth.isSuperUser())
		return true;
	return false;
}
```
In questo caso controllerà se il figlio è superUser prima di vedere i dettagli specifici di un contatto, invece nel caso fosse solo loggato, vedrebbe solamente la lista dei contatti.
E nulla avendo i servizi e questi controlli possiamo manipolare l'accesso a determinate pagine con i routing guard