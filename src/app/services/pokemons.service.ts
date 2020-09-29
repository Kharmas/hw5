import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemon} from "./pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  getPokemon(limit, offset): Observable<Pokemon>{
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    return this.http.get<Pokemon>(url);
  }

  getPokemonDetails(url){
    return this.http.get<Pokemon>(url);

  }


}
