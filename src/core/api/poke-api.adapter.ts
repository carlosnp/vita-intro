import axios from "axios";

const POKEAPI = 'https://pokeapi.co/api/v2/pokemon/';
const POKEAPI_IMG = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';

/**
 * construir el id
 * @param id 
 */
const ConstructId = (id: number) => {
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
const GetImage = (id: number): string => {
    const newId = ConstructId(id);
    return POKEAPI_IMG + newId + '.png';
}
/**
 * Interface para adaptar metodos de consulta
 */
export interface HttpAdapter {
    getPokemon<T>(name: string): Promise<T>;
    getPokeImage(id: number): string;
}
/**
 * Adaptador de vanilla
 */
export class PokeApiFetchAdapter implements HttpAdapter{
    async getPokemon<T>(name: string): Promise<T> {
        const resp = await fetch(POKEAPI + name.toLocaleLowerCase());
        const data: T = await resp.json();
        return data;
    }
    /**
     * Obtiene la imagen de un pokemon
     * @param id 
     */
    getPokeImage(id: number): string {
        return GetImage(id);
    }
}
/**
 * Adaptador de AXIOS
 */
export class PokeApiAdapter implements HttpAdapter{
    constructor(
        private readonly axiosService = axios
    ) {}
    /**
     * Obtener datos de un pokemon
     * @param name Nombre del pokemon
     */
    async getPokemon<T>(name: string): Promise<T> {
        const { data } = await this.axiosService.get<T>( POKEAPI + name.toLocaleLowerCase() );
        return data;
    }
    /**
     * Obtiene la imagen de un pokemon
     * @param id 
     */
    getPokeImage(id: number): string {
        return GetImage(id);
    }
    async post(url: string) { return;}
    async path(url: string) { return;}
    async delete(url: string) { return;}
}