import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar.tsx";
import Hero from "./Components/Hero.tsx";
import Experience from "./Components/Experience.tsx";
import Projects from "./Components/Projects.tsx";
import Footer from "./Components/Footer.tsx";
import Contact from "./Components/Contact.tsx";
import About from "./Components/About.tsx";
import Preloader from "./Components/Preloader.tsx";

function Home() {
  return (
    <>
      {" "}
      <Hero /> <About /> <Experience /> <Projects /> <Footer />
    </>
  );
}

function PageTransition() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-fade">
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />{" "}
      </Routes>{" "}
    </div>
  );
}

function App() {
  return (
    <div>
      {" "}
      <Preloader />
      <Navbar />
      <PageTransition />
    </div>
  );
}

export default App;
