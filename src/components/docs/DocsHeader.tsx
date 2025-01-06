import { Link } from "react-router-dom";
import { BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DocsHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b border-white/10">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold text-white">RPC Documentation</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Link to="/docs">
            <Button
              variant="ghost"
              className="glass-card hover:bg-white/5 transition-all duration-200 text-white/80 hover:text-white"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Docs
            </Button>
          </Link>
          
          <a href="https://discord.gg/u6qrhwnBs6" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              className="glass-card hover:bg-white/5 transition-all duration-200 text-white/80 hover:text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Discord
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};