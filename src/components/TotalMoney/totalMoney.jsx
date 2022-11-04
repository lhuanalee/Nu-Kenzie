import "../../styles/globalStyles.css";
import "../../styles/buttons.css";
import "../TotalMoney/totalMoney.css";

const TotalMoney = ({ listTransactions }) => {
  let valorTotal = listTransactions.reduce((acc, cur) => {
    return acc + cur.value;
  }, 0);

  return (
    <div className="valor__total">
      <div className="paragrafos">
        <p className="p__valor__total">Valor total:</p>
        <p className="p__valor">R$ {valorTotal}</p>
      </div>

      <span>O valor se refere ao saldo</span>
    </div>
  );
};

export default TotalMoney;
