import "./App.css";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import GlobalStyle from "./style/globalStyle";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      {click ? (
        isLoggedIn ? (
          <Dashboard setIsLoggedIn={setIsLoggedIn} setClick={setClick} />
        ) : (
          <LoadingSpinner setIsLoggedIn={setIsLoggedIn} />
        )
      ) : (
        <Home setClick={setClick} />
      )}
    </div>
  );
};

export default App;
