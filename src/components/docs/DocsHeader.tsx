import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export const DocsHeader = () => {
  return (
    <>
      <Link to="/">
        <Button variant="ghost" className="mb-8 text-white hover:text-white/80">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 rounded-xl mb-8"
      >
        <h1 className="text-4xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Unlimited RPC Endpoints Documentation
        </h1>
        <p className="text-lg text-white/90 leading-relaxed">
          Welcome to the comprehensive documentation for our Unlimited RPC Endpoints. This guide provides an in-depth understanding of how to effectively utilize our RPC endpoints without any rate limits.
        </p>
      </motion.div>
    </>
  );
};