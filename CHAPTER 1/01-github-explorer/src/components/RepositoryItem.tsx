interface RepositoryItem {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItem) {
  return (
    <li>
      <strong>{props.repository.name ?? "Default"}</strong>
      <p>{props.repository.description ?? "Default"}</p>
      <a href={props.repository.html_url}>Acesse</a>
    </li>
  );
}
