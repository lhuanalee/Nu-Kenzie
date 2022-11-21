import { TotalStyle } from "./TotalStyle";

const Total = ({ transaction }) => {
  const valueTotal = transaction.reduce((acc, cur) => {
    return acc + +cur.value;
  }, 0);

  return (
    <TotalStyle>
      <div>
        <h2>Valor total:</h2>
        <p>
          {valueTotal > 0
            ? `${valueTotal.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}`
            : `R$ 0,00`}
        </p>
      </div>
      <span>O valor se refere ao saldo</span>
    </TotalStyle>
  );
};

export default Total;
