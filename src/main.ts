import "./style.css";
// import typescriptLogo from "./typescript.svg";
// import { setupCounter } from "./counter";

import { name, age } from "./bases/01-types";
import { pokemonIds, bulbasaur } from "./bases/02-objects";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Hello ${name} i'm ${age} years old</h1>
    <p>${pokemonIds.join(",")}</p>
    <p>${bulbasaur.name}</p>
  </div>
`;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
