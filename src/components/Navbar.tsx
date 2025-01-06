import { Link } from "react-router-dom";
import { Menu, X, BookOpen, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? "glass-card" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Navigation Title Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link 
              to="/" 
              className="glass-card px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <span className="text-white text-xl font-bold">RPC Documentation</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation Cards */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Link to="/docs">
              <div className="glass-card p-2 rounded-lg transition-colors duration-300">
                <Button
                  variant="ghost"
                  className="text-white hover:text-primary hover:bg-transparent"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Docs
                </Button>
              </div>
            </Link>
            
            <a href="https://discord.gg/u6qrhwnBs6" target="_blank" rel="noopener noreferrer">
              <div className="glass-card p-2 rounded-lg transition-colors duration-300">
                <Button
                  variant="ghost"
                  className="text-white hover:text-primary hover:bg-transparent"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Discord
                </Button>
              </div>
            </a>
          </motion.div>

          {/* Mobile Menu Button Card */}
          <div className="md:hidden">
            <div className="glass-card p-2 rounded-lg transition-colors duration-300">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-primary hover:bg-transparent"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden py-4"
            >
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/docs" 
                  className="glass-card p-4 rounded-lg transition-colors duration-300 flex items-center gap-2 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BookOpen className="h-4 w-4" />
                  Docs
                </Link>
                
                <a 
                  href="https://discord.gg/u6qrhwnBs6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-lg transition-colors duration-300 flex items-center gap-2 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" />
                  Discord
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};