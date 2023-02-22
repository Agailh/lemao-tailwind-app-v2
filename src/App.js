import About from "./component/About";
import FunFact from "./component/FunFact";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Galery from "./component/Galery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <FunFact />
      <Galery />
    </div>
  );
}

export default App;
