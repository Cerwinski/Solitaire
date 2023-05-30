import {Component, ElementRef, ViewChild} from '@angular/core';
import {fromEvent, map, startWith} from 'rxjs';
import {DeckManagementService} from '../shared/services/deck-management.service';
import {toSignal} from '@angular/core/rxjs-interop';

export type stapelNames = 'stapel1'|'stapel2'|'stapel3'|'stapel4'|'stapel5'|'stapel6'|'stapel7';
@Component({
  selector: 'app-karten',
  templateUrl: './karten.component.html',
  styleUrls: ['./karten.component.css']
})
export class KartenComponent {


  card?: number;

  @ViewChild('cardelement') element?: ElementRef;
  stapel = {
    stapel1: 1,
    stapel2: 3,
    stapel3: 2,
    stapel4: 2,
    stapel5: 3,
    stapel6: 1,
    stapel7: 3
  }
  test = [];

  readonly mousePosition$ = fromEvent<MouseEvent>(document, 'mousemove').pipe(
    map(event => ({x: event.clientX, y: event.clientY}))
  );
  readonly cMousePosition = toSignal(this.mousePosition$);

  constructor(public deckService: DeckManagementService) {
    console.log('deck', deckService.cDeck());
    this.mousePosition$.subscribe(e => {
      if (this.element?.nativeElement) {

        this.element.nativeElement.style.left = e.x + 'px';
        this.element.nativeElement.style.top = e.y + 'px';
      }
    })
  }

  readonly windowWidth$ = fromEvent(window, 'resize').pipe(
    map(event => (event?.target as Window).innerWidth),
    startWith(window.innerWidth)
  );

  dropCard(card : number | undefined, stapel : string){
    if (card){
      const typedStapel = stapel as stapelNames;
      this.card = undefined;
      this.stapel[typedStapel] = card;

    }
  }
}
