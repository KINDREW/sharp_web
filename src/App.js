import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Homepage from "./components/Homepage";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-donwudi-investments" element={<About />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
