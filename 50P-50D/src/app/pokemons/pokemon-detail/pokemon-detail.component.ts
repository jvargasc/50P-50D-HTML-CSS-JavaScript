import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonResponseItem } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon!: Pokemon;
  // @Input() pokemonResponseItem!: PokemonResponseItem;

  errorMessage = '';
  // pokemon = new Pokemon (0, '', '', '', '');

  constructor(private pokemonService: PokemonService) {  }

  ngOnInit() {

  }

}
