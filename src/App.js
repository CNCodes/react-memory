import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Match from "./pages/Match";

const App = () => (
    <Router>
      <div>
        <Hero />
        <Match />
        <Footer />
      </div>
    </Router>
  );
  
  export default App;