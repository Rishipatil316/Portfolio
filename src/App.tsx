import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { motion } from "framer-motion";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import About from './Components/About';
import Home from './Components/Home';
import Skills from "./Components/Skills";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950">
        {/* Header Component */}
        <Header />
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </motion.div>
        
        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
