export const pokemonIds = [1, 2, 3, 4, 5];

// pokemonIds.push(+"6");

// console.log(pokemonIds);

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
};

export const charmander: Pokemon = {
  id: 2,
  name: "Charmander",
  age: 15,
};

export const pikachu: Pokemon = {
  id: 15,
  name: "Pikachu",
};

// console.log(bulbasaur);

export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasaur, pikachu);

console.log(pokemons);
