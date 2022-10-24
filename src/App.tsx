import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import { Header } from "./components/header/index";
import { Home } from "./components/home";
import { Section } from "./components/section2";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Home />
      <Section />
    </div>
  );
}

export default App;
