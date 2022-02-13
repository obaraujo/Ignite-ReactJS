import { Container } from "./styles";
import iconIncome from "../../assets/income.svg";
import iconOutcome from "../../assets/outcome.svg";
import iconTotal from "../../assets/total.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={iconIncome} alt="Icon de entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={iconOutcome} alt="Icon de Saídas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={iconTotal} alt="Icon de Total" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
    </Container>
  );
}
