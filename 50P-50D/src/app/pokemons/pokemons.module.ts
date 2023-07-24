import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PokemonsComponent,
    PokemonComponent
  ]
})
export class PokemonsModule { }
