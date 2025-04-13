import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // using lucide for icons

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-lg font-bold text-gray-800">Rishi's Portfolio</h1>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/about" className="text-blue-500 hover:underline">About</Link>
          <Link to="/skills" className="text-blue-500 hover:underline">Skills</Link>
          <Link to="/projects" className="text-blue-500 hover:underline">Projects</Link>
          <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4">
          <Link to="/" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/skills" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/projects" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
