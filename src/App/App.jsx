import "./App.css";
import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import TotalMoney from "../components/TotalMoney/totalMoney";
import HomePage from "../components/HomePage/homePage";
import Header from "../components/Header/header";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [filtro, setFiltro] = useState([]);

  const filtrados = (tipo) => {
    if (tipo === "Todos") {
      setFiltro([]);
    } else {
      const filtrooo = listTransactions.filter((transacao) =>
        transacao.select === tipo ? transacao : false
      );
      setFiltro(filtrooo);
    }
  };

  return (
    <div>
      {isLogin ? (
        <>
          <Header setIsLogin={setIsLogin} />
          <main>
            <section className="first__section">
              <Form setListTransactions={setListTransactions} />
              <TotalMoney listTransactions={listTransactions} />
            </section>

            <section className="second__section">
              <div className="resumo__financeiro">
                <p>Resumo financeiro</p>
                <nav className="ul__filtros">
                  <button
                    onClick={() => filtrados("Todos")}
                    className="li__filtros"
                  >
                    Todos
                  </button>
                  <button
                    onClick={() => filtrados("Entrada")}
                    className="li__filtros"
                  >
                    Entradas
                  </button>
                  <button
                    onClick={() => filtrados("Despesa")}
                    className="li__filtros"
                  >
                    Despesas
                  </button>
                </nav>
              </div>
              <List
                listTransactions={filtro.length ? filtro : listTransactions}
                setListTransactions={setListTransactions}
              />
            </section>
          </main>
        </>
      ) : (
        <HomePage isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default App;
