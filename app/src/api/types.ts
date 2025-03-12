export type Person = {
  type: 'person';
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  species: string[];
  starships: string[];
  vehicles: string[];
};

export type Planet = {
  type: 'planet';
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
};

export type Starship = {
  type: 'starship';
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
};

export type Vehicle = {
  type: 'vehicle';
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
};

export type Film = {
  type: 'film';
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
};

export type Species = {
  type: 'species';
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
};


export type EntityType = {
    'people': Person,
    'planets': Planet,
    'starships': Starship,
    'vehicles': Vehicle,
    'films': Film,
    'species': Species
}

export type Endpoint = keyof EntityType;