import "./style.css";
// import typescriptLogo from "./typescript.svg";
// import { setupCounter } from "./counter";
// import { pokemonIds, bulbasaur } from "./bases/02-objects";

import { name, age } from "./bases/01-types";
import { mew } from "./bases/03-classes";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Pokemon #${mew.id}:${mew.name}</h1>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
