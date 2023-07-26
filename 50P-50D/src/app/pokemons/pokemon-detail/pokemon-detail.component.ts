import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonResponseItem } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  // @Input() pokemon!: Pokemon;
  @Input() pokemonResponseItem!: PokemonResponseItem;

  errorMessage = '';
  pokemon = new Pokemon (0, '', '', '', '');
  urlImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
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

  constructor(private pokemonService: PokemonService) {  }

  ngOnInit() {

    this.setPokemonData(this.pokemonResponseItem);

  }

  setPokemonData(pokemonResponseItem: PokemonResponseItem)  {

    let specialCharLastPosition: number;
    let id: string = pokemonResponseItem.url;

    id = id.substring(0, id.length -1 );

    specialCharLastPosition = id.lastIndexOf('/');
    id = id.substring(specialCharLastPosition + 1);

    this.pokemonService.getPokemon(pokemonResponseItem.url).subscribe(
        PokemonResponseItem => {

          let pokemonType = PokemonResponseItem.types[0].type.name;
          // this.pokemonColor = this.colors.find(a=> a.tipo==this.pokemonType)?.color || "#DEFDE0";
          this.pokemon = new Pokemon(+id,
                    pokemonResponseItem.name,
                    pokemonType,
                    this.colors.find(a=> a.tipo == pokemonType)?.color || '',
                    this.urlImg + `${id}.png` ) ;

        },
      error => this.errorMessage = <any>error
    );

  }

}
