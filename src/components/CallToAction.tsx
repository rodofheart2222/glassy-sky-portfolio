import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CallToActionProps {
  wrapWordsWithHoverCard: (text: string, definitions: Record<string, string>) => React.ReactNode;
  definitions: Record<string, string>;
}

const CallToAction = ({ wrapWordsWithHoverCard, definitions }: CallToActionProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            {wrapWordsWithHoverCard("Start Building Today", definitions)}
          </motion.h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="group px-12 py-8 bg-primary hover:bg-primary/90 text-white rounded-full font-black text-xl shadow-2xl shadow-primary/20 transform transition-all">
              {wrapWordsWithHoverCard("Get API Access", definitions)}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="ml-3 h-6 w-6" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;