import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { CardCreateComponent } from './card-create/card-create.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

const routes: Routes = [
  {
    path: 'create',
    component: CardCreateComponent
  },
  {
    path: 'detail/:id',
    component: CardDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: CardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
