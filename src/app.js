import "./main.scss";

const repositoriesTable = document.getElementById("repositories");

fetch("https://api.github.com/users/FrostMegaByte/repos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let repositoriesData = `<tr>
      <th>Name</th>
      <th>Description</th>
      <th>Created</th>
    </tr>`;

    for (const repo of data) {
      const repoInformation = `<tr>
        <td>${repo.name}</td>
        <td>${repo.description}</td>
        <td>${repo.created_at}</td>
      </tr>`;
      repositoriesData += repoInformation;
    }
    repositoriesTable.innerHTML = repositoriesData;
  });
