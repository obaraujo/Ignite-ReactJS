import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "Baraujo",
  description: "O Baraujo é demais",
  link: "https://github.com",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  );
}
