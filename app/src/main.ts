import "./style.css";
import { ApiClient } from "./api/client";

const apiClient = new ApiClient();

const attachEventListeners = () => {
  const form = document.querySelector<HTMLFormElement>('#form');
  
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const searchTerm = formData.get('search') as string;
    const searchType = formData.get('group1') as string;

    switch (searchType) {
      case 'people':
        await apiClient.searchPeople(searchTerm);
        break;
      case 'planets':
        await apiClient.searchPlanets(searchTerm);
        break;
      case 'vehicles':
        await apiClient.searchVehicles(searchTerm);
        break;
      case 'starships':
        await apiClient.searchStarships(searchTerm);
        break;
      case 'films':
        await apiClient.searchFilms(searchTerm);
        break;
      case 'species':
        await apiClient.searchSpecies(searchTerm);
        break;
    }
  });
  };

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Vite/TypeScript App</h1>
    <form id="form">
    <fieldset id="group1">
          <input id="people" type="radio" value="people" name="group1" >
          <label for="people">People</label>
          <input id="planets" type="radio" value="planets" name="group1">
          <label for="planets">Planets</label>
          <input id="vehicles" type="radio" value="vehicles" name="group1">
          <label for="vehicles">Vehicles</label>
          <input id="starships" type="radio" value="starships" name="group1">
          <label for="starships">Starships</label>
          <input id="films" type="radio" value="films" name="group1">
          <label for="films">Films</label>
          <input id="species" type="radio" value="species" name="group1">
          <label for="species">Species</label>
    </fieldset>
      <input name="search" id="search" type="text"/>
    <div class="card" >
      <input  type="submit" value="Submit">
    </div>
    </form>
    <p class="read-the-docs">
    </p>
  </div>
`;

attachEventListeners();
