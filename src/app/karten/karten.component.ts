import { Component } from '@angular/core';
import { fromEvent, map, startWith } from 'rxjs';

@Component({
  selector: 'app-karten',
  templateUrl: './karten.component.html',
  styleUrls: ['./karten.component.css']
})
export class KartenComponent {
  columns = [];

  readonly windowWidth = fromEvent(window, 'resize').pipe(
    map(event => (event?.target as Window).innerWidth),
    startWith(window.innerWidth)
  );
}
