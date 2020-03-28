fetch("https://api.github.com/users/FrostMegaByte/repos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (const repo of data) {
      const repoInformation = [repo.name, repo.description, repo.created_at];
      console.log(repoInformation.toString());
    }
  });
