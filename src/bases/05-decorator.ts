import { Deprecated } from "../core/decorators";

export class PokemonDecorator {
    /**
     * Constructor de la clase
     * @param id del pokemon
     * @param name nombre dle pokemon
     */
     constructor(
        public readonly id: number, 
        public name: string,
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
    @Deprecated('Vencido')
    speak() {
        return `${ this.name }, ${ this.name }`
    }
    speak2() {
        return `${ this.name }, ${ this.name }`
    }
}

export const Mankey = new PokemonDecorator( 56, 'Mankey' );