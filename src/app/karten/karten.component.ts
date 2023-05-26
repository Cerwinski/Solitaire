import {Component, ElementRef, ViewChild} from '@angular/core';
import { fromEvent, map, startWith } from 'rxjs';
import { DeckManagementService } from '../shared/services/deck-management.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-karten',
  templateUrl: './karten.component.html',
  styleUrls: ['./karten.component.css']
})
export class KartenComponent {
  card?: number;
  @ViewChild('cardelement') element? : ElementRef;


  readonly mousePosition$ = fromEvent<MouseEvent>(document, 'mousemove').pipe(
    map(event => ({x: event.clientX, y: event.clientY}))
  );
  readonly cMousePosition = toSignal(this.mousePosition$);

  constructor(public deckService: DeckManagementService) {
    console.log('deck', deckService.cDeck());
    this.mousePosition$.subscribe(e =>{
      if(this.element?.nativeElement){
        console.log("Element ist da", this.element.nativeElement);
        this.element.nativeElement.style.left = e.x + 'px' ;
        this.element.nativeElement.style.top = e.y + 'px';
      }
      else{
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      }
    })
  }

  readonly windowWidth$ = fromEvent(window, 'resize').pipe(
    map(event => (event?.target as Window).innerWidth),
    startWith(window.innerWidth)
  );


}
