import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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

























