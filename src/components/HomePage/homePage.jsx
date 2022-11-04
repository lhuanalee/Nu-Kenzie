import Logo from "../../assets/Nu Kenzie 2.svg";
import Background from "../../assets/Background.svg";
import "../../styles/globalStyles.css";
import "../HomePage/homePage.css";

const HomePage = ({ isLogin, setIsLogin }) => {
    return (
        <main className="main__home__page">
            <div class="logo-Text">
                <img src={Logo} alt="" />
                <p class="text-Centralize">
                    Centralize o controle das suas finanças
                </p>
                <p class="text-Legend">de forma rápida e segura</p>
                <button onClick={() => setIsLogin(!isLogin)}>Iniciar</button>
            </div>

            <div>
                <img src={Background} alt="Fundo" />
            </div>
        </main>
    );
};

export default HomePage;
