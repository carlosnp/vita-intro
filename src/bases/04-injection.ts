import { HttpAdapter, PokeApiAdapter } from '../core/api/poke-api.adapter';
import { Move, PokeAPIResponse } from '../models';


export class PokemonInjection {

    get imageUrl(): string {
        return this.pokeapi.getPokeImage(this.id);
    }
    /**
     * Constructor de la clase
     * @param id del pokemon
     * @param name nombre dle pokemon
     * @param pokeapi Adaptador
     */
    constructor(
        public readonly id: number, 
        public name: string,
        private pokeapi: HttpAdapter

    ) {}
    /**
     * Gritar
     */
    scream() {
        return `${ this.name.toUpperCase() }!!!`
    }
    /**
     * Hablar
     */
    speak() {
        return `${ this.name }, ${ this.name }`
    }
    /**
     * Obtener movimientos
     */
    async getMoves(): Promise<Move[]> {
        const data = await this.pokeapi.getPokemon<PokeAPIResponse>(this.name);
        console.log(this.name, data.moves );
        return data.moves;
    }

}
const pokeapi = new PokeApiAdapter();
export const Squirtle = new PokemonInjection( 7, 'Squirtle', pokeapi );

Squirtle.getMoves();