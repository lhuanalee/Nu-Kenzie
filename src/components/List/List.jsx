import Card from "../Card/Card";
import FinancialSummary from "../FinancialSummary/FinancialSummary";
import { ListStyle } from "./ListStyle";

const List = () => {
  return (
    <ListStyle>
      <FinancialSummary />
      <Card />
    </ListStyle>
  );
};

export default List;
