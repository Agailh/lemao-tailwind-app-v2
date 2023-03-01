import About from "./component/About";
import FunFact from "./component/FunFact";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Galery from "./component/Galery";
import Merch from "./component/Merch";
import VideoList from "./component/VideoList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <FunFact />
      <Galery />
      <Merch />
      <VideoList />
    </div>
  );
}

export default App;
