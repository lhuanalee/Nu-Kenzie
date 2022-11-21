import Card from "../Card/Card";
import CardTransaction from "../CardTransaction/CardTransaction";
import FinancialSummary from "../FinancialSummary/FinancialSummary";
import { ListStyle } from "./ListStyle";

const List = ({ filtered, setFiltered, transaction, setTransaction }) => {
  return (
    <ListStyle>
      <FinancialSummary
        setFiltered={setFiltered}
        filtered={filtered}
        transaction={transaction}
        setTransaction={setTransaction}
      />

      {filtered.length > 0 ? (
        <CardTransaction
          transaction={transaction}
          setTransaction={setTransaction}
          filtered={filtered}
          setFiltered={setFiltered}
        />
      ) : (
        <Card />
      )}
    </ListStyle>
  );
};

export default List;
