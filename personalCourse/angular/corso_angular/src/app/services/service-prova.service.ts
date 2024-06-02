import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProvaService {
  persone = [
    {nome: "Luca", cognome: "Rossi", isOnline: true},
    {nome: "Maria", cognome: "Verdi", isOnline: false},
    {nome: "Lorenzo", cognome: "Nicotera", isOnline: true},
    {nome: "Giuseppe", cognome: "Nicotera", isOnline: false},
    {nome: "Carlo", cognome: "Pierangeli", isOnline: true},
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
