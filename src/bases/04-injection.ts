import { PokeApiAdapter } from '../core/api/poke-api.adapter';
import { Move } from '../models';


export class PokemonInjection {

    get imageUrl(): string {
        return this.pokeapi.getImage(this.id);
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        private pokeapi: PokeApiAdapter

    ) {}

    scream() {
        return `${ this.name.toUpperCase() }!!!`
    }

    speak() {
        return `${ this.name }, ${ this.name }`
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.pokeapi.getPokemon(this.name);
        console.log(this.name, data.moves );
        return data.moves;
    }

}
const pokeapi = new PokeApiAdapter();
export const Squirtle = new PokemonInjection( 7, 'Squirtle', pokeapi );

Squirtle.getMoves();