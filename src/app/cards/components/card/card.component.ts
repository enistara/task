import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  @Input("showActions")
  public showActions: boolean = true;

  @Input("card")
  public card: Card;

  @Output("removeCard")
  public removeCardEmitter: EventEmitter<Card> = new EventEmitter<Card>();

  public removeCard(card: Card) {
   this.removeCardEmitter.emit(card);
  }
  
}
