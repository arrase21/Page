import "./App.css";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programns/Programs";
import Reasons from "./components/Reasons/Reasons";
// import Oferta from "./components/Oferta/Oferta";
import Contact from "./components/Contact/Contact";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimoniasl/Testimonials";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";
// import { useEffect } from "react";
import Usetitle from "./components/UseTitles/Usetitle";

function App() {
  // Usetitle({ description: "" });
  Usetitle({ title: "Entrenador Personal", description: `Detail of ` });

  return (
    <div className="App">
      <Hero />
      <Programs />
      {/*       <Oferta />*/}
      <Reasons />
      <Join />
      <Testimonials />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
