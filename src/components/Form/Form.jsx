import Button from "../Button/Button";
import Select from "../Select/Select";
import Total from "../Total/Total";
import { FormStyle } from "./FormStyle";

const Form = ({
  transaction,
  setTransaction,
  description,
  setDescription,
  value,
  setValue,
  type,
  setType,
  setFiltered,
  setBackgroundColor,
}) => {
  const addCard = (event) => {
    event.preventDefault();
    setTransaction([
      ...transaction,
      {
        description: description,
        value: type === "Entrada" ? value : -value,
        type: type,
      },
    ]);
    setFiltered([
      ...transaction,
      {
        description: description,
        value: type === "Entrada" ? value : -value,
        type: type,
      },
    ]);
    setDescription("");
    setValue("");
    setType("Entrada");
    setBackgroundColor("Todos");
  };

  return (
    <FormStyle onSubmit={addCard}>
      <div className="container">
        <div className="form">
          <label htmlFor="description">Descrição</label>
          <input
            className="description"
            id="description"
            type="text"
            placeholder="Digite aqui sua descrição"
            required
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
          <p>Ex: Compra de roupas</p>

          <section>
            <div>
              <label htmlFor="value">Valor</label>
              <div className="input">
                <input
                  className="value"
                  id="value"
                  type="number"
                  placeholder="1"
                  required
                  onChange={(event) => setValue(event.target.value)}
                  value={value}
                />
                <p>R$</p>
              </div>
            </div>
            <div>
              <label>Tipo de valor</label>
              <Select
                onChange={(event) => setType(event.target.value)}
                value={type}
              />
            </div>
          </section>
        </div>

        <Button type={"submit"}>Inserir valor</Button>
      </div>
      {transaction.length > 0 && <Total transaction={transaction} />}
    </FormStyle>
  );
};

export default Form;
