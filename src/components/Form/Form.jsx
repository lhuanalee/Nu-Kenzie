import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import Total from "../Total/Total";
import { FormStyle } from "./FormStyle";

const Form = () => {
  return (
    <FormStyle>
      <div className="container">
        <div className="form">
          <label htmlFor="description">Descrição</label>
          <Input
            className="description"
            id={"description"}
            type={"text"}
            placeholder={"Digite aqui sua descrição"}
          />
          <span>Ex: Compra de roupas</span>

          <section>
            <div>
              <label htmlFor="value">Valor</label>
              <div className="input">
                <Input
                  className={"value"}
                  id={"value"}
                  type={"number"}
                  placeholder={"1"}
                />
                <p>R$</p>
              </div>
            </div>
            <div>
              <label>Tipo de valor</label>
              <Select />
            </div>
          </section>
        </div>

        <Button>Inserir valor</Button>
      </div>
      <Total />
    </FormStyle>
  );
};

export default Form;
