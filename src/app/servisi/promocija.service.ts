import { PROMOCIJE } from './../deljeno/promocije';
import { Promocija } from './../deljeno/promocija';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromocijaService {

  constructor() { }

  getPromocije(): Observable<Promocija[]> {
    return of(PROMOCIJE).pipe(delay(2000));
  }

  getPromocija(id: string): Observable<Promocija> {
    return of(PROMOCIJE.filter((promocija) => (promocija.id === id))[0]).pipe(delay(2000));
  }

  getIzabranaPromocija(): Observable<Promocija> {
    return of(PROMOCIJE.filter((promocija) => promocija.izabran)[0]).pipe(delay(2000));
  }
}
