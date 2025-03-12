export const appendResults = (data: Record<string, any>[]) => {
  const resultsHeader = document.querySelector("#results-header tr");
  const resultsBody = document.getElementById("results-body");

  if (!resultsHeader || !resultsBody) return;

  resultsHeader.innerHTML = "";
  resultsBody.innerHTML = "";

  Object.keys(data[0]).forEach((key) => {
    resultsHeader.innerHTML += `<th>${key}</th>`;
  });

  data.forEach((item) => {
    const row = document.createElement("tr");
    Object.keys(item).forEach((key) => {
      row.innerHTML += `<td>${item[key]}</td>`;
    });
    resultsBody.appendChild(row);
  });
};
