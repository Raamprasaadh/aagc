import { useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";
import ChitsAndSchemes from "./components/chitsAndSchemes";
import Footer from "./components/footer";

function App() {
  const [mode, onChangeMode] = useState("h");
  function display(val){
    switch (val) {
      case "h":
        return <Home onChangeMode ={onChangeMode}/>;
      case "a":
        return <About />;
      case "c":
        return <Contact />;
      case "cs":
        return <ChitsAndSchemes />;
      default:
        break;
    }
  }
  return (
    <div className="app">
      <Navbar onChangeMode ={onChangeMode}/>
    {
      display(mode)
    }
    <Footer />
    </div>
  );
}

export default App;
