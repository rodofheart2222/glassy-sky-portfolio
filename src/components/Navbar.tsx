import { Link } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

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
            <Link to="/docs">
              <Button
                variant="ghost"
                className="text-white hover:text-primary hover:bg-white/10"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Docs
              </Button>
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
                to="/docs" 
                className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                Docs
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};