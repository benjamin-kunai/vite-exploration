const BASE_URL = 'https://swapi.dev/api/people';


const search = async (query: string): Promise<Response> => {
const params = new URLSearchParams({
    search: query
})
const results = await fetch(`${BASE_URL}?${params}`);
const data = await results.json();
console.log(data);
return results;
};

export const setUpListeners = () => {
    const button = document.querySelector<HTMLButtonElement>('button');
    button?.addEventListener('click', async () => {
        await search('Luke');
    });
}