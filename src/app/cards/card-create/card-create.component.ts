import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {

  cardForm = new FormGroup({
    title: new FormControl('')
  });

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    console.log(this.cardForm.value);
  }

}
