import { Component, computed } from '@angular/core';
import { fromEvent, map, startWith } from 'rxjs';
import { DeckManagementService } from '../shared/services/deck-management.service';

@Component({
  selector: 'app-karten',
  templateUrl: './karten.component.html',
  styleUrls: ['./karten.component.css']
})
export class KartenComponent {
  card?: number;

  constructor(public deckService: DeckManagementService) {
    console.log('deck', deckService.cDeck());
  }

  readonly windowWidth = fromEvent(window, 'resize').pipe(
    map(event => (event?.target as Window).innerWidth),
    startWith(window.innerWidth)
  );
}
