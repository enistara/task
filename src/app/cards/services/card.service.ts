import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Card } from './../models/card';
import { URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private _http: HttpClient) { }

  public getCards(): Observable<Card[]> {
    return this._http.get<Card[]>(`${URL}/assets/data.json`);
  }
}
