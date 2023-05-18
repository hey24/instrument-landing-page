import Navbar from "./components/sections/Navbar"
import BrandVideo from "./components/sections/BrandVideo"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <BrandVideo />
      <Projects />
    </div>
  );
}

export default App;
