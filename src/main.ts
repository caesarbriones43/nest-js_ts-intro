import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";
import { name, age } from "./bases/01-types";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Hello ${name} i'm ${age} years old</h1>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
