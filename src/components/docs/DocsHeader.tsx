import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, ChevronLeft } from "lucide-react";

export const DocsHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <Link to="/">
          <Button variant="ghost" className="text-white hover:text-white/80">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 rounded-xl mb-8"
      >
        <h1 className="text-4xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Unlimited RPC Endpoints Documentation
        </h1>
      </motion.div>
    </>
  );
};