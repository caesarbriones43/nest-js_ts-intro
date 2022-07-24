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
  constructor(public id: number, public name: string) {}
}

export const mew = new Pokemon(151, "Mew");
