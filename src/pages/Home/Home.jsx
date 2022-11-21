import Logo from "../../assets/Nu Kenzie Home.svg";
import Background from "../../assets/Background.svg";
import Button from "../../components/Button/Button";
import { HomeStyle } from "./HomeStyle";

const Home = ({ setClick, setIsLoggedIn }) => {
  return (
    <HomeStyle>
      <div className="description">
        <img src={Logo} alt="Logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <Button onClick={() => setClick(setIsLoggedIn(true))}>Iniciar</Button>
      </div>
      <img className="background" src={Background} alt="Background" />
    </HomeStyle>
  );
};

export default Home;
