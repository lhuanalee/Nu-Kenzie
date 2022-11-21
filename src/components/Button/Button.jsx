import { ButtonStyle } from "./ButtonStyle";

const Button = ({ className, type, onClick, children }) => {
  return (
    <ButtonStyle className={className} type={type} onClick={onClick}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
