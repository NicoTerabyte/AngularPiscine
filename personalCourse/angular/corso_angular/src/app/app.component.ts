import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
  //decoratore per templates
  @ViewChild('inputSaluti') valoreInput!: ElementRef<HTMLInputElement>

  title = 'corso_angular';
  persone = [
    {nome: "Luca", cognome: "Rossi", isOnline: true},
    {nome: "Maria", cognome: "Verdi", isOnline: false},
    {nome: "Lorenzo", cognome: "Nicotera", isOnline: true},
    {nome: "Giuseppe", cognome: "Nicotera", isOnline: false},
    {nome: "Carlo", cognome: "Pierangeli", isOnline: true},
  ]

  onClick()
  {
    this.persone = [
      {nome: "Carlo", cognome: "1000111100101", isOnline: true},
      {nome: "Spelargo", cognome: "gianpieri", isOnline: false},
      {nome: "Gabriel", cognome: "Nicotera", isOnline: true},
      {nome: "Brian", cognome: "Nicotera", isOnline: false},
      {nome: "Daniel", cognome: "Ricchione", isOnline: true},
    ]
  }
  riceviDatiEvento(value: string)
  {
    console.log(value)
  }
  ngOnInit(): void
  {
    console.log(this.valoreInput)
  }
  //ci serve per poter utilizzare il template
  //perché di sopra è stato solamente inizializzato
  ngAfterViewInit(): void
  {
    console.log(this.valoreInput)
  }
  onClickTemp(): void
  {
    //questo solo per stampare il valore effettivo del template
    //anche perché la struttura sarebbe così:
    //ElementRef->NativeElement->Value Quindi il valore non lo prendi così
    console.log(this.valoreInput.nativeElement.value);
  }
}


















//attributi extra della classe usata per le lezioni precedenti
//da inserire per spiegare la lezione ngClass
// //questo metodo si collegherà a app.component.html
// onInput(event: Event)
// {
//   //quello tra <> è un casting visto che stiamo usando
//   //un evento HTML
//   console.log((<HTMLInputElement>event.target).value)
//   this.title = (<HTMLInputElement>event.target).value
//   if ((<HTMLInputElement>event.target).value == `pizza`)
//   {
//     (<HTMLInputElement>event.target).value = `ricchione`
//   }
// }
// onClick(event: Event)
// {
//   this.title = 'Ho cliccato il bottone'
//   if (this.isVisible)
//     this.isVisible = false
//   else
//     this.isVisible = true
// }

// getColor()
// {
//   return 'green'
// }

























