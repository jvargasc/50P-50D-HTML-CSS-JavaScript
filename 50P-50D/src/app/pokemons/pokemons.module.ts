import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonService } from './pokemon.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ PokemonService ],
  exports: [
    PokemonsComponent,
    PokemonComponent
  ]
})
export class PokemonsModule { }
