import { computed, Injectable, signal } from '@angular/core';

Injectable();
export class DeckManagementService {
  private sDeck = signal([1, 2, 3,2,1,2,1]);
  public cDeck = computed(() => {
    console.log('updated deck', this.sDeck());
    return this.sDeck();
  });

  drawCard() {
    const topCard = this.sDeck()[0];
    this.sDeck.update(sDeck => {
      sDeck.shift();
      return sDeck;
    });
    return topCard;
  }
}
