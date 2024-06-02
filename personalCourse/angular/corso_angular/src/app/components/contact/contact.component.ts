import { Component, OnInit } from '@angular/core';
import { ServiceProvaService } from '../../services/service-prova.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  persone: any
  isProfile = -1

  constructor(private servizio: ServiceProvaService, private route: ActivatedRoute)
  {

  }
  ngOnInit(): void
  {
    this.persone = this.servizio.getPersone()
    this.isProfile = this.route.snapshot.paramMap.get('id') ? -1 : 1
    this.route.snapshot.paramMap.get('id')
  }

}
