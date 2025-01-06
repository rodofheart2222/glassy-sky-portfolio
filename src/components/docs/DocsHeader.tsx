import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export const DocsHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <Link to="/">
        <Button variant="ghost" className="text-white hover:text-white/80">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
};