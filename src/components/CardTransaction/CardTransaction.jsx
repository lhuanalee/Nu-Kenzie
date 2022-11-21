import { FaTrashAlt } from "react-icons/fa";
import Button from "../Button/Button";
import { CardTransactionStyle } from "./CardTransactionStyle";

const CardTransaction = ({
  filtered,
  setFiltered,
  transaction,
  setTransaction,
}) => {
  const removeCard = (index) => {
    const remove = transaction.filter((item, i) => i !== index);

    setTransaction(remove);
    setFiltered(remove);
  };

  return (
    <CardTransactionStyle>
      {filtered.map((item, index) => (
        <div
          key={index}
          className={
            item.type === "Entrada" ? "card entryBorder" : "card expenseBorder"
          }
        >
          <div className="list">
            <h2>{item.description}</h2>
            <div className="valueTrash">
              <p>
                {Math.abs(item.value).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <Button type={"button"} onClick={() => removeCard(index)}>
                <FaTrashAlt />
              </Button>
            </div>
          </div>
          <span>{item.type}</span>
        </div>
      ))}
    </CardTransactionStyle>
  );
};

export default CardTransaction;
