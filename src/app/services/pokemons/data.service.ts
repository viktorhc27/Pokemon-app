import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getpokemons() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }

  getMoreData(number: number) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+number+'/');
  }
}
