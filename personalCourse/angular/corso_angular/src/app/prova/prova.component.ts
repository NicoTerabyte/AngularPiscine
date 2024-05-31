import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit, OnChanges{

  @Input() data: any;

  constructor()
  {
    console.log("costruttore")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes");
  }
  ngOnInit(): void
  {
    console.log(this.data)
  }

}


//questo è stato utilizzato in lezioni precedenti
// cani = [
//   {nome: 'roger',
//   razza: 'golden retriever',
//   descrizione: `The Golden Retriever, an exuberant Scottish gundog of great beauty,
//   stands among America's most popular dog breeds.
//   They are serious workers at hunting and field work, as guides for the blind,
//   and in search-and-rescue, enjoy obedience and other competitive events,
//   and have an endearing love of life when not at work.
//   The Golden Retriever is a sturdy, muscular dog of medium size,
//   famous for the dense, lustrous coat of gold that gives the breed its name.
//   The broad head, with its friendly and intelligent eyes, short ears,
//   and straight muzzle, is a breed hallmark. In motion, Goldens move with a smooth,
//   powerful gait, and the feathery tail is carried,
//   as breed fanciers say, with a 'merry action.'`}
// ]
//  ngAfterContentChecked(): void {
//   console.log("ngAfterContentChecked")
// }
// ngAfterContentInit(): void {
//   console.log("ngAfterContentInit")
// }
// ngAfterViewChecked(): void {
//   console.log("ngAfterViewChecked")
// }
// ngAfterViewInit(): void {
//   console.log("ngAfterViewInit")
// }
// ngDoCheck(): void {
//   console.log("ngDoCheck")
// }
// ngOnDestroy(): void {
//   console.log("ngOnDestroy")
// }
// ngOnInit(): void {
//   console.log("ngOnInit")
// }
