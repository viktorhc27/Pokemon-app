import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }


  getinfo(number: number) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + number + '/')
  }

  getinfo_nombre(nombre: string) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + nombre + '/')
  }
}

