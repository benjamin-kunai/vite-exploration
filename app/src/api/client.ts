import { Endpoint,  EntityType } from "../types";

const BASE_URL = 'https://swapi.dev/api';

export class ApiClient {
    private baseUrl: string;

    constructor(baseUrl: string = BASE_URL) {
        this.baseUrl = baseUrl;
    }
    private async search<T extends Endpoint>(endpoint: Endpoint, query: string): Promise<EntityType[T]> {
        const params = new URLSearchParams({
            search: query
        })
        const response = await fetch(`${this.baseUrl}/${endpoint}?${params}`);
        const data = await response.json();
        return data.results;
    }

    public async searchPeople(query: Endpoint): Promise<EntityType['people']> {
        const data = await this.search<'people'>('people', query);
        return data;
    }

    public async searchPlanets(query: Endpoint): Promise<EntityType['planets']> {
        const data = await this.search<'planets'>('planets', query);
        return data;
    }

    public async searchVehicles(query: Endpoint): Promise<EntityType['vehicles']> {
        const data = await this.search<'vehicles'>('vehicles', query);
        return data;
    }

    public async searchStarships(query: Endpoint): Promise<EntityType['starships']> {
        const data = await this.search<'starships'>('starships', query);
        return data;
    }

    public async searchFilms(query: Endpoint): Promise<EntityType['films']> {
        const data = await this.search<'films'>('films', query);
        return data;
    }

    public async searchSpecies(query: Endpoint): Promise<EntityType['species']> {
        const data = await this.search<'species'>('species', query);
        return data;
    }
    
    public attachEventListeners() {
        const input = document.querySelector<HTMLInputElement>('input');
        const button = document.querySelector<HTMLButtonElement>('button');
        button?.addEventListener('click', async () => {

        })
    }
    
}