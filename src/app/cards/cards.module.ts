import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardCreateComponent } from './card-create/card-create.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    CardsComponent,
    CardDetailComponent,  
    CardCreateComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CardsModule { }
