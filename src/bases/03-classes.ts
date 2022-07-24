// export class Pokemon {
//   public id: number;
//   public name: string;

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

  constructor(public readonly id: number, public name: string) {}

  public scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  public speak() {
    console.log(`${this.name},${this.name}...`);
  }
}

export const mew = new Pokemon(151, "Mew");

console.log(mew);

mew.scream();
mew.speak();

// mew.name = "Mew";s
