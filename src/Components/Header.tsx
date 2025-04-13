import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="p-4 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-lg font-bold text-gray-800">Rishi's Portfolio</h1>
      <div className="flex gap-6">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
        <Link to="/skills" className="text-blue-500 hover:underline">Skills</Link>
        <Link to="/projects" className="text-blue-500 hover:underline">Projects</Link>
        <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
        
      </div>
    </nav>
  );
}

export default Header;
