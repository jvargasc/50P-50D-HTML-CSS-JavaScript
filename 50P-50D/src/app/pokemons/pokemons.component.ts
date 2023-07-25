import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css'],
  providers: [PokemonService]
})

export class PokemonsComponent implements OnInit {

  pokemons: Pokemon[] = [];
  results = [];
  subscription: Subscription = new Subscription;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    //console.log('this.ngOnInit();');
    this.pokemonService.getPokemons();
    // this.subscription = this.pokemonService.getPokemons()
    //   .subscribe(
    //     (results) => {
    //     console.log(results);
    //      //this.pokemons = { pokemons};
    //     }
    //   );
    //console.log(this.pokemons);
    // this.pokemons = this.subscription.;
    // this.pokemons = this.pokemonService.getPokemons().subscribe();
  }

}
