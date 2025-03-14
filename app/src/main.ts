import "./style.css";
import { ApiClient } from "./api/client";
import { updateUI } from "./api/utils";
import { Endpoint } from "./api/types";
const apiClient = new ApiClient();

const attachEventListeners = () => {
  const form = document.querySelector<HTMLFormElement>('#form');
  
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const searchTerm = formData.get('search') as string;
    const searchType = formData.get('group1') as string;
    if(searchTerm || searchType) {
    let results: Record<string, any>[] = await apiClient.search(searchType as Endpoint, searchTerm);
    if (results.length > 0) {
      updateUI(results);
    } else {
      alert('No results found');
    }
  }
  });
  };

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Vite/TypeScript App</h1>
    <form id="form" class="container card">
     <h2 class="header">Filter By</h2>
    <div class="radio-container">
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
    </div>
    <div class="input-container">
      <input name="search" id="search" type="text"/>
       <input  type="submit" value="Submit">
    </div>
    </form>
    <div id="results"></div>
  </div>
`;

attachEventListeners();
