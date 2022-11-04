import Logo from "../../assets/Nu Kenzie.svg";
import "../../styles/globalStyles.css";
import "../Header/header.css";

const Header = ({ setIsLogin }) => {
  return (
    <header>
      <div>
        <img src={Logo} alt="Logo" />
        <button onClick={() => setIsLogin(false)} className="button__inicio">
          Início
        </button>
      </div>
    </header>
  );
};

export default Header;
