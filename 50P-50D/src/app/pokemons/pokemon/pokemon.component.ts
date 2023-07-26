import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonResponseItem } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  // @Input() pokemon!: Pokemon;
  @Input() pokemonResponseItem!: PokemonResponseItem;

  errorMessage = '';
  pokemon!: Pokemon;

  constructor(private pokemonService: PokemonService) {  }

  ngOnInit() {
    // console.log('ngOnInit(PokemonComponent)');
    //console.log(this.pokemonResponseItem);
    // this.pokemon =
    this.getPokemonData(this.pokemonResponseItem);
    console.log(this.pokemon);
  }


//  : Observable<Pokemon>
  getPokemonData(pokemonResponseItem: PokemonResponseItem)  {

    let specialCharLastPosition: number;
    let id: string = pokemonResponseItem.url;
    let pokemonType: string = this.getPokemonType(pokemonResponseItem.url);
    id = id.substring(0, id.length -1 );

    specialCharLastPosition = id.lastIndexOf('/');
    id = id.substring(specialCharLastPosition + 1);

    let img: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`


    this.pokemon = new Pokemon(+id, pokemonResponseItem.name, pokemonType, img ) ;

  }

  getPokemonType(url: string ) {
    //this.pokemonService.getPokemon(id).subscribe();

    //this.pokemonService.getPokemon(url);

    this.pokemonService.getPokemon(url).subscribe(
        PokemonResponseItem => {
          // this.pokemonList = PokemonResponseItem.results;
          // console.log(PokemonResponseItem.types[0].type.name);
          // this.pokemon.type = PokemonResponseItem.types[0].type.name;
          // console.log(PokemonResponseItem.types[0].type.name);
          return PokemonResponseItem.types[0].type.name;
        },
      error => this.errorMessage = <any>error
    );

    return '';

  }

}
