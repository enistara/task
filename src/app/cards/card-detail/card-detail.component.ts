import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  public card: Card;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _cardService: CardService
  ) { }

  ngOnInit() {
    this._activeRoute.params.subscribe(params => {
      if (params.id) {
        this._cardService.getCards().subscribe(response => {
          response.filter(card => {
            if (card.id === params.id) {
              this.card = card;
            }
          })
        });
      }
    });
  }

}
