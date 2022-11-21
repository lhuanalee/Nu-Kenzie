import { SelectStyle } from "./SelectStyle";

const Select = ({ onChange, value }) => {
  return (
    <SelectStyle onChange={onChange} value={value} name="" id="">
      <option value="Entrada">Entrada</option>
      <option value="Despesa">Despesa</option>
    </SelectStyle>
  );
};

export default Select;
