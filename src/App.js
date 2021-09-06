import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import ChitFund from "./components/chitFund";
import Footer from "./components/footer";
import AquaProducts from "./components/aquaProducts";
import RealEstateAndBuilder from "./components/realEstateAndBuilder";

function App() {
  const [mode, onChangeMode] = useState("h");
  function display(val) {
    switch (val) {
      case "h":
        return <Home onChangeMode={onChangeMode} />;
      case "a":
        return <About />;
      case "c":
        return <Contact />;
      case "cs":
        return <ChitFund />;
      case "ap":
        return <AquaProducts />;
      case "rb":
        return <RealEstateAndBuilder />;
      default:
        break;
    }
  }
  return (
    <div className="app">
      <Navbar onChangeMode={onChangeMode} />
      {display(mode)}
      <Footer />
    </div>
  );
}

export default App;
