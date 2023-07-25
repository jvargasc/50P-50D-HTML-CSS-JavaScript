export class Pokemon {

  public id: number;
  public name: string;
  public type: string;
  public img: string;

   constructor(id: number, name: string, type: string, img: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.img = img;
  }

}

export interface PokemonResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonResponseItem[];
}

export interface PokemonResponseItem {
    name: string;
    url:  string;
}

