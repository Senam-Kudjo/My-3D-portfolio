import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import { About } from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover">
          <Navbar />
          <Hero />
          <About />
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
