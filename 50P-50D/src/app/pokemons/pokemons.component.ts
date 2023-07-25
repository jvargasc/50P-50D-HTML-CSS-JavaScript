import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon, PokemonResponseItem } from './pokemon.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  providers: [PokemonService]
})

export class PokemonsComponent implements OnInit, OnDestroy {

  pokemons: Pokemon[] = [];
  pokemonList: PokemonResponseItem[] = [];
  subscription: Subscription = new Subscription;
  errorMessage = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
/*
    this.subscription = this.pokemonService.getPokemons()
    .subscribe(
      ({results}) => {
      console.log(results);
      return results;
      });
*/

    this.pokemonService.getPokemons().subscribe(
        PokemonResponseItem => {
          this.pokemonList = PokemonResponseItem.results;
          // console.log(this.pokemonList);
        },
      error => this.errorMessage = <any>error
    );

  }

  ngOnDestroy()  {
    this.subscription.unsubscribe();
  }

//  : Observable<Pokemon>
  getPokemonData(pokemonResponseItem: PokemonResponseItem)  {

    let specialCharLastPosition: number;
    let id: string = pokemonResponseItem.url;

    id = id.substring(0, id.length -1 );

    specialCharLastPosition = id.lastIndexOf('/');
    id = id.substring(specialCharLastPosition + 1);

    this.getPokemonInfo(id);

    let pokemon = new Pokemon(+id, pokemonResponseItem.name, '', '' ) ;

    // console.log(id);
    // console.log(id.lastIndexOf('/'));
    // console.log(id);
    // console.log(pokemon);

    return pokemonResponseItem;
  }

  getPokemonInfo(id: string ) {
    //this.pokemonService.getPokemon(id).subscribe();

    console.log('getPokemonInfo()');

    this.pokemonService.getPokemon(id).subscribe(
        response => {
          // this.pokemonList = PokemonResponseItem.results;
          console.log(response);
        },
      error => this.errorMessage = <any>error
    );

  }

}
