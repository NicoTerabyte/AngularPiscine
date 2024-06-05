import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceProvaService } from '../../services/service-prova.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  persona: any
  id: number

  constructor(private route: ActivatedRoute, private servizioProva: ServiceProvaService){}

  ngOnInit(): void {
      this.route.paramMap.subscribe((params: ParamMap)=>{
        this.id = +params.get('id')!
        this.persona = this.servizioProva.getPersona(this.id)
      })
  }
}
