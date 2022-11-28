import { Pokemon } from "../models";
import { PokemonClass } from "./03-class";

export const pokemonIds = [1, 20, 30, 34, 66];
export const bulbasaur = new PokemonClass({
    id: 1,
    name: "bulbasaur"
})

export const charmander: Pokemon = {
    id: 2,
    name: "charmander"
}

export const pokemons: Pokemon[] = [
    bulbasaur,
    charmander
];