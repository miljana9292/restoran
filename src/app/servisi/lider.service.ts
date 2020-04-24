import { Injectable } from '@angular/core';
import { Lider } from '../deljeno/lider';
import { LIDERI } from '../deljeno/lideri';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiderService {

  constructor() { }

  getLideri(): Observable<Lider[]> {
    return of(LIDERI).pipe(delay(2000));
  }

  getLider(id: string): Observable<Lider> {
    return of(LIDERI.filter((lider) => (lider.id === id))[0]).pipe(delay(2000));
  }

  getIzabraniLider(): Observable<Lider> {
    return of(LIDERI.filter((lider) => lider.izabran)[0]).pipe(delay(2000));
  }
}
