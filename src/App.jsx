import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
