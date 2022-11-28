import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import {
  age,
  description,
  name,
  bulbasaur,
  pokemonIds
} from './bases'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <h2>${name} - ${age}</h2>
    <p class="read-the-docs">${description}</p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div>${pokemonIds}</div>
    <div>${bulbasaur.name}</div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
