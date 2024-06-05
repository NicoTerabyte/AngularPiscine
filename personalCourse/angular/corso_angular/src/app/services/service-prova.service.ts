import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvaService {
  persone = [
    {nome: "Luca", cognome: "Rossi", isOnline: true, descrizione: `none`},
    {nome: "Maria", cognome: "Verdi", isOnline: false, descrizione: `none`},
    {nome: "Lorenzo", cognome: "Nicotera", isOnline: true, descrizione: `none`},
    {nome: "Giuseppe", cognome: "Nicotera", isOnline: false, descrizione: `none`},
    {nome: "Carlo", cognome: "Pierangeli", isOnline: true, descrizione: `none`},
    {nome: 'Luca', cognome: 'Chizzo',isOnline: true, descrizione: `Un ragazzo biondo di aymaville
    sembra sid il bradipo dell'omonimo film di animazione "L'era glaciale"`}
  ]
  constructor() { }
  //qui puoi anche sviluppare dei metodi
  getPersone()
  {
    return this.persone
  }
  getPersona(index: number)
  {
    return this.persone[index]
  }
}
