import { Pokemon } from "../models";

export class PokemonClass {
    get imageUrl() {
        return 'https://www.pokemon.com/us/pokedex/'+this.name;
    }
    public id: number;
    public name: string;
    /**
     * Constructor de la clase
     * @param {Pokemon} data 
     */
    constructor(data: Pokemon) {
        this.id = data.id;
        this.name = data.name
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
}

export const pikachu = new PokemonClass({id: 25, name: 'Pikachu'})