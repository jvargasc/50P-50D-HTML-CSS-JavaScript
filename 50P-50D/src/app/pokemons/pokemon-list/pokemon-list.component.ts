import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon, PokemonResponseItem } from '../pokemon.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokemonService]
})

export class PokemonsListComponent implements OnInit, OnDestroy {

  pokemonList: Pokemon[] = [];
  subscription: Subscription = new Subscription;
  pokemon_count = 15;
  colors =  [
  {
    tipo: 'fire', color: '#FDDFDF'
  },
  {
    tipo:'grass', color: '#DEFDE0'
  },
  {
    tipo:'electric', color: '#FCF7DE'
  },
  {
    tipo:'water', color: '#DEF3FD'
  },
  {
    tipo:'ground', color: '#f4e7da'
  },
  {
    tipo:'rock', color: '#d5d5d4'
  },
  {
    tipo:'fairy', color: '#fceaff'
  },
  {
    tipo:'poison', color: '#98d7a5'
  },
  {
    tipo:'bug', color: '#f8d5a3'
  },
  {
    tipo:'dragon', color: '#97b3e6'
  },
  {
    tipo:'psychic', color: '#eaeda1'
  },
  {
    tipo:'flying', color: '#F5F5F5'
  },
  {
    tipo:'fighting', color: '#E6E0D4'
  },
  {
    tipo:'normal', color: '#F5F5F5'
  }
  ];
  urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  errorMessage = '';

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.fetchPokemons();
  }

  ngOnDestroy()  {
    this.subscription.unsubscribe();
  }

  fetchPokemons() {
    for (let i = 1; i <= this.pokemon_count; i++) {
        this.getPokemon(i);
    }
  }

  getPokemon(id: number) {

    this.pokemonService.getPokemon(id.toString()).subscribe(
      pokemonResponse => {

          let pokemonType = pokemonResponse.types[0].type.name;
          // this.pokemonColor = this.colors.find(a=> a.tipo==this.pokemonType)?.color || "#DEFDE0";
          let tmpPokemon = new Pokemon(id,
                    pokemonResponse.name,
                    pokemonType,
                    this.colors.find(a=> a.tipo == pokemonType)?.color || '',
                    this.urlImg + `${id}.png` ) ;

          // console.log(tmpPokemon);
          this.pokemonList.push(tmpPokemon);
        },
      error => this.errorMessage = <any>error
    );

  }

}


