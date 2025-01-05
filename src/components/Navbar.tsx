import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div>
            <Link to="/" className="text-white text-xl font-bold hover:text-primary transition-colors duration-200">
              RPC Documentation
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex space-x-8">
            <Link to="/" className="text-white/80 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link to="/introduction" className="text-white/80 hover:text-white transition-colors duration-200">
              Introduction
            </Link>
            <Link to="/api-reference" className="text-white/80 hover:text-white transition-colors duration-200">
              API Reference
            </Link>
            <Link to="/faq" className="text-white/80 hover:text-white transition-colors duration-200">
              FAQ
            </Link>
            <Link to="/support" className="text-white/80 hover:text-white transition-colors duration-200">
              Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary transition-colors duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white/80 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/introduction" 
                className="text-white/80 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Introduction
              </Link>
              <Link 
                to="/api-reference" 
                className="text-white/80 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                API Reference
              </Link>
              <Link 
                to="/faq" 
                className="text-white/80 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/support" 
                className="text-white/80 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};