import { Component, OnInit } from '@angular/core';
import { ServiceProvaService } from '../../services/service-prova.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit{
  persone: any
  constructor(private servizioProva: ServiceProvaService){}

  ngOnInit(): void {
    // this.persone = this.servizioProva.getPersone()
    // this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true
    this.persone = this.servizioProva.getPersone()

  }

}
