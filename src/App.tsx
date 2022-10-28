import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import { Header } from "./components/header/index";
import { Home } from "./components/home";
import { Section } from "./components/section2";
import { FormSection } from "./components/section3";
import { Footer } from "./components/section-footer";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Home />
      <Section />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;
