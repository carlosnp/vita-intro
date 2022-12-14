import axios from "axios";
import { Move, PokeAPIResponse, Pokemon } from "../models";

export class PokemonClass {
    /**
     * Obtiene la url
     *
     * @readonly
     * @memberof PokemonClass
     */
    get imageUrl() {
        return 'https://www.pokemon.com/us/pokedex/'+this.name;
    }
    /**
     * Id del pokemon
     * @type {number}
     * @memberof PokemonClass
     */
    public id: number;
    /**
     * Nombre del pokemon
     *
     * @type {string}
     * @memberof PokemonClass
     */
    public name: string;
    /**
     * Constructor de la clase
     * @param {Pokemon} data 
     */
    constructor(data: Pokemon) {
        this.id = data.id;
        this.name = data.name
        this.getMoves();
    }
    /**
     * Gritar
     */
    scream() {
        return `${this.name.toLocaleUpperCase()}!!!`;
    }
    /**
     * Hablar
     */
    speak() {
        return `${this.name.slice(0,4)}, ${this.name}`;
    }
    /**
     * Obtener movimientos
     */
    async getMoves(): Promise<Move[]>{
        const name = this.name.toLocaleLowerCase();
        const { data } = await axios.get<PokeAPIResponse>('https://pokeapi.co/api/v2/pokemon/'+name);
        if (!data) {
            return [];
        }
        console.log(name, data.moves);
        return data.moves;
    }
}

export const pikachu = new PokemonClass({id: 25, name: 'Pikachu'})