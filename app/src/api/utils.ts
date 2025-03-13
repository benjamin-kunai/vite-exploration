export const updateUI = (data: Record<string, any>[]) => {

  const results = document.getElementById("results");
  if (!results) return;

  const tableWrapper = document.createElement("div");
  tableWrapper.classList.add("table-wrapper", "card");

  results.appendChild(tableWrapper);

  const table = document.createElement("table");
  table.id = "results";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const tbody = document.createElement("tbody");

  tableWrapper.appendChild(table);
  table.appendChild(thead);
  thead.appendChild(headerRow);
  table.appendChild(tbody);

  Object.keys(data[0]).forEach((key) => {
    headerRow.innerHTML += `<th>${key.charAt(0).toUpperCase() + key.slice(1)}</th>`;
  });

  data.forEach((item) => {
    const row = document.createElement("tr");
    Object.keys(item).forEach((key) => {
      row.innerHTML += `<td>${item[key]}</td>`;
    });
    tbody.appendChild(row);
  });
};
