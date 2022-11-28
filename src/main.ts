import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import {
  age,
  description,
  name,
  bulbasaur,
  pokemonIds,
  pokemons,
  pikachu
} from './bases'
import { Squirtle } from './bases/04-injection'
import { Mankey } from './bases/05-decorator'


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
    <div>
      <a href="${bulbasaur.imageUrl}" target="_blank">${bulbasaur.name}: ${bulbasaur.speak()}</a>
    <div>
      <a href="${pikachu.imageUrl}" target="_blank">${pikachu.name}: ${pikachu.scream()}</a>
    </div>
    <div>
      <a href="${Squirtle.imageUrl}" target="_blank">${Squirtle.name}: ${Squirtle.speak()}</a>
    </div>
    <div>${Mankey.name}: ${Mankey.speak()}</div>
    <div>${pokemons}</div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
