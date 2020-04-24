import { Injectable, Inject } from '@angular/core';
import { Jelo } from '../deljeno/jelo';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { baseURL } from '../deljeno/baseurl';

@Injectable({
  providedIn: 'root'
})
export class JeloService {

  
  constructor(private http: HttpClient) { }

  // onCreatePost(postData: {title: string, content: string}) {
  //   this.http.post('C:\Users\aaa\json-server\db.json', postData).subscribe(responseData => { console.log(responseData);
  //   });
  // }

  getJela(): Observable<Jelo[]> {
    return this.http.get<Jelo[]>(baseURL + 'jela');
  }

  getJelo(id: string): Observable<Jelo> {
    return this.http.get<Jelo>(baseURL + 'jela/' + id);
  }

  getIzabranoJelo(): Observable<Jelo> {
    return this.http.get<Jelo[]>(baseURL + 'jela?izabran=true').pipe(map(jela => jela[0]));
  }

  getIdsJela(): Observable<string[] | any> {
      return this.getJela().pipe(map(jela => jela.map(jelo => jelo.id)));
  }
}
