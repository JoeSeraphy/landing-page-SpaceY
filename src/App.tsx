import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import { Header } from "./components/header/index";
import { Home } from "./components/hero";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Home />
    </div>
  );
}

export default App;
