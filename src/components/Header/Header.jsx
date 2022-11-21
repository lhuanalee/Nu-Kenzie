import Logo from "../../assets/Nu Kenzie.svg";
import Button from "../Button/Button";
import { HeaderStyle } from "./HeaderStyle";

const Header = ({ setIsLoggedIn }) => {
  return (
    <HeaderStyle>
      <div>
        <img src={Logo} alt="Logo" />
        <Button onClick={() => setIsLoggedIn(false)}>Sair</Button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
