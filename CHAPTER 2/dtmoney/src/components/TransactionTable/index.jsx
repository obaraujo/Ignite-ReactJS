import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <tr>
            <td>Venda na ST</td>
            <td className="deposit">R$160,00</td>
            <td>Seabra Tem</td>
            <td>14/11/2022</td>
          </tr>
          <tr>
            <td>Venda na ST</td>
            <td className="withdraw">R$160,00</td>
            <td>Seabra Tem</td>
            <td>14/11/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
