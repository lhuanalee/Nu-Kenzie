import { ButtonStyle } from "./ButtonStyle";

const Button = ({ props, children }) => {
  return <ButtonStyle onClick={props}>{children}</ButtonStyle>;
};

export default Button;
