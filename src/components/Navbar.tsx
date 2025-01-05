import { Link } from "react-router-dom";
import { Menu, X, BookOpen, Github, MessageCircle } from "lucide-react";
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/40" : "bg-transparent"
    } backdrop-blur-xl border-b border-white/10`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-white text-xl font-bold hover:text-primary transition-colors duration-200">
              RPC Documentation
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Link to="/docs">
              <Button
                variant="ghost"
                className="text-white hover:text-primary hover:bg-white/10"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Docs
              </Button>
            </Link>
            
            <a href="https://discord.gg/u6qrhwnBs6" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                className="text-white hover:text-primary hover:bg-white/10"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Discord
              </Button>
            </a>

            <a href="https://github.com/example/rpc-docs" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                className="text-white hover:text-primary hover:bg-white/10"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary hover:bg-white/10"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
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
                  className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BookOpen className="h-4 w-4" />
                  Docs
                </Link>
                
                <a 
                  href="https://discord.gg/u6qrhwnBs6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" />
                  Discord
                </a>

                <a 
                  href="https://github.com/example/rpc-docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};