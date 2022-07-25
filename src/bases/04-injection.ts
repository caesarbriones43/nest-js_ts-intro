// export class Pokemon {
//   public id: number;
//   public name: string;

// import axios from "axios";
import { PokeApiAdapter, PokeApiFetchAdapter, HttpAdapter } from '../api/pokeApi.adapter';
import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//     console.log("asdasdasd");
//   }
// }

// export const mew = new Pokemon(151, "mew");

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter
  ) {
    //TODO: injection dependecies
  }

  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  public speak() {
    console.log(`${this.name},${this.name}...`);
  }

  async getMoves(): Promise<Move[]> {
    // const { data } = await axios.get<PokeapiResponse>(
    //   "https://pokeapi.co/api/v2/pokemon/4"
    // );
    const data = await this.http.get<PokeapiResponse>("https://pokeapi.co/api/v2/pokemon/4");
    console.log(data.moves);
    return data.moves;
  }
}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const mew = new Pokemon(151, "Mew", pokeApiAxios);

console.log(mew);

mew.scream();
mew.speak();

// mew.name = "Mew";s

mew.getMoves();
