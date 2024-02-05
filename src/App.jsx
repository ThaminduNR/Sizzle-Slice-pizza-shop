import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PizzaModal from "./components/PizzaModal";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
    </>
  );
}

export default App;
