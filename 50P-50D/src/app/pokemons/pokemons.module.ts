import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonService } from './pokemon.service';
// import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonDetailComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ PokemonService ],
  exports: [
    PokemonsListComponent,
    PokemonDetailComponent
  ]
})
export class PokemonsModule { }
