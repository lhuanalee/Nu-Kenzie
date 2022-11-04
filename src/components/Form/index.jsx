import "../../styles/globalStyles.css";
import "../../styles/buttons.css";
import "../Form/form.css";
import { useState } from "react";

const Form = ({ setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [valor, setValor] = useState("");
  const [select, setSelect] = useState("Entrada");

  const transition = (event) => {
    event.preventDefault();

    setListTransactions((preventList) => [
      ...preventList,
      {
        description: description,
        value: select === "Entrada" ? valor : -valor,
        select: select,
      },
    ]);

    setDescription("");
    setValor("");
    setSelect("Entrada");
  };

  return (
    <form onSubmit={transition}>
      <div className="description">
        <label htmlFor="Descrição">Descrição</label>
        <input
          id="Descrição"
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <span>Ex: Compra de roupas</span>
      </div>

      <div className="valores">
        <div className="form__valor">
          <label htmlFor="Valor">Valor</label>
          <input
            id="Valor"
            type="number"
            placeholder="1"
            onChange={(event) => setValor(+event.target.value)}
            value={valor}
          />
        </div>

        <div className="form__valor">
          <label htmlFor="Valores">Tipo de valor</label>
          <select
            name="Valores"
            id="Valores"
            onChange={(event) => setSelect(event.target.value)}
            value={select}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn__text--default">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
