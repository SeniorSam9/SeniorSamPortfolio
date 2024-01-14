import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Progress,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Progress />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}
