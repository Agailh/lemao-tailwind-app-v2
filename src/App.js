import About from "./component/About";
import FunFact from "./component/FunFact";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <FunFact />
    </div>
  );
}

export default App;
