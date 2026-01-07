import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 px-10 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-500">
        Sujal
      </h1>

      <div className="flex gap-6 text-gray-300">
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="/projects" className="hover:text-white">Projects</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
      </div>
    </nav>
  );
}
