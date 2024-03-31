import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";



const App = () => {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlight/>
    </main>
  );
};

export default App;
