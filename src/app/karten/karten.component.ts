import { Component } from '@angular/core';
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

  readonly mousePosition$ = fromEvent<MouseEvent>(document, 'mousemove').pipe(
    map(event => ({x: event.clientX, y: event.clientY}))
  );
  readonly cMousePosition = toSignal(this.mousePosition$);

  constructor(public deckService: DeckManagementService) {
    console.log('deck', deckService.cDeck());
  }

  readonly windowWidth$ = fromEvent(window, 'resize').pipe(
    map(event => (event?.target as Window).innerWidth),
    startWith(window.innerWidth)
  );
}
