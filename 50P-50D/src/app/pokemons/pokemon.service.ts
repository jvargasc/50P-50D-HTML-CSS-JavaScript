import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonResponseItem, PokemonResponse } from './pokemon.model';
import { Observable, map, pipe, switchMap } from 'rxjs';

@Injectable()
export class PokemonService {

  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  // : Observable<PokemonItem[]>

  getPokemons() : Observable<PokemonResponse> {
    /*
    return this.http.get<PokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon'
    ).subscribe(
      ({results}) => {
      console.log(results);
      return results;
      });
    ;
      */
    return this.http.get<PokemonResponse>(this.pokemonUrl);
  }

  //: Observable<PokemonResponse>

  getPokemon(id: string) : Observable<any> {
    console.log(this.pokemonUrl + id);
    return this.http.get(this.pokemonUrl + id);
  }

}
