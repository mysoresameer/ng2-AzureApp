import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {Hero} from './hero';

@Injectable()
export class HeroService {
  constructor(private http:Http){}

  //getHeroes() { return heroesPromise; }

  getHero(id: number | string): Observable<Hero> {
    return this.getallHeroes().map(heroes => {return heroes.find(h=>h.id==id)});
  }

  getallHeroes():Observable<Hero[]>{
    return this.http.get('/assets/heroes.json').map(result=>result.json());
  }
}