import { useState } from "react";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import GlobalStyle from "./style/globalStyle";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <GlobalStyle />
      {isLoggedIn ? (
        <Dashboard setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Home setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
};

export default App;
