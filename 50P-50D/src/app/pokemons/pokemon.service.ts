import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { Observable, map } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient ) { }
//: Observable<Pokemon[]>
  getPokemons()  {
     this.http.get<Pokemon[]>(
      'https://pokeapi.co/api/v2/pokemon'
    ).subscribe(results => {
        console.log(results);
      });
      //console.log(results);
    ;
  }
}
