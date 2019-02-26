import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public cards: Card[];

  constructor(private _cardService: CardService) { }

  ngOnInit() {
    this._cardService.getCards().subscribe(response => this.cards = response);
  }
}
