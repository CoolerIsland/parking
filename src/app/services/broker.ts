import { Injectable } from '@angular/core';
import { Envitoment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class Broker {
  url: string = Envitoment.url;
  headers: HttpHeaders = new HttpHeaders({
    'content-type': 'application/json',
  });
}
