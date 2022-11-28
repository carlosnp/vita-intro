import axios from "axios";
import { PokeAPIResponse } from "../../models";

const POKEAPI = 'https://pokeapi.co/api/v2/pokemon/';
const POKEAPI_IMG = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

export class PokeApiAdapter {
    constructor(
        private readonly axiosService = axios
    ) {}
    /**
     * Obtener datos de un pokemon
     * @param name Nombre del pokemon
     */
    async getPokemon(name: string): Promise<PokeAPIResponse> {
        const { data } = await this.axiosService.get<PokeAPIResponse>( POKEAPI + name.toLocaleLowerCase() );
        return data;
    }
    /**
     * Obtiene la imagen de un pokemon
     * @param id 
     */
    getPokeImage(id: string) {
        return POKEAPI_IMG + id + '.png';
    }
    /**
     * Obtiene la imagen de un pokemon
     * @param id 
     */
    getImage(id: number) {
        const newId = this.constructId(id);
        return POKEAPI_IMG + newId + '.png';
    }
    async post(url: string) { return;}
    async path(url: string) { return;}
    async delete(url: string) { return;}
    /**
     * construir el id
     * @param id 
     */
    public constructId(id: number) {
        const newId = id.toString();
        if(newId.length === 1 ){
            return '00'+newId;
        }
        if(newId.length === 2 ){
            return '0'+newId;
        }
        if(newId.length === 3 ){
            return newId;
        }
        return newId;
    }
}