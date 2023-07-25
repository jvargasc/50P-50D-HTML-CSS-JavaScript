import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonResponseItem } from '../pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon!: Pokemon;
  @Input() pokemonResponseItem!: PokemonResponseItem;
  constructor() {  }

  ngOnInit() {
    console.log(this.pokemonResponseItem);
  }

}
