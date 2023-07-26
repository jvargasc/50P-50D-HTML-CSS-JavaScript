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

}
