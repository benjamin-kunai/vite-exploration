import { Endpoint,  EntityType } from "./types";

const BASE_URL = 'https://swapi.dev/api';

export class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string = BASE_URL) {
        this.baseUrl = baseUrl;
    }
    private async search<T extends Endpoint>(endpoint: Endpoint, query: string): Promise<EntityType[T][]> {
        const params = new URLSearchParams({
            search: query
        })
        const response = await fetch(`${this.baseUrl}/${endpoint}?${params}`);
        const data = await response.json();
        console.log(data.results);
        return data.results;
    }

    public async searchPeople(query: string): Promise<EntityType['people'][]> {
        const data = await this.search<'people'>('people', query);
        return data;
    }

    public async searchPlanets(query: string): Promise<EntityType['planets'][]> {
        const data = await this.search<'planets'>('planets', query);
        return data;
    }

    public async searchVehicles(query: string): Promise<EntityType['vehicles'][]> {
        const data = await this.search<'vehicles'>('vehicles', query);
        return data;
    }

    public async searchStarships(query: string): Promise<EntityType['starships'][]> {
        const data = await this.search<'starships'>('starships', query);
        return data;
    }

    public async searchFilms(query: string): Promise<EntityType['films'][]> {
        const data = await this.search<'films'>('films', query);
        return data;
    }

    public async searchSpecies(query: string): Promise<EntityType['species'][]> {
        const data = await this.search<'species'>('species', query);
        return data;
    }
}