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
