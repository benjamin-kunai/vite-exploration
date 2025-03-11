import './style.css'
import { setUpListeners } from './api';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite/TypeScript App</h1>
    <input type="text"/>
    <div class="card">
      <button  type="button">Fetch Some Data</button>
    </div>
    <p class="read-the-docs">
    </p>
  </div>
`
setUpListeners();