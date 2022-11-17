import Button from "../Button/Button";
import { FinancialSummaryStyle } from "./FinancialSummaryStyle";

const FinancialSummary = () => {
  return (
    <FinancialSummaryStyle>
      <div className="summary">
        <p>Resumo financeiro</p>
        <div>
          <Button>Todos</Button>
          <Button>Entradas</Button>
          <Button>Despesas</Button>
        </div>
      </div>
    </FinancialSummaryStyle>
  );
};

export default FinancialSummary;
