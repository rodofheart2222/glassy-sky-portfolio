import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, ArrowRight, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-extrabold rounded-full bg-primary/10 text-primary">
            Unlimited Power
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Unlimited RPC Calls
          </h1>
          <p className="text-lg md:text-xl font-bold text-gray-600 mb-8 max-w-2xl mx-auto">
            Scale your applications with unlimited remote procedure calls. No throttling, no limits.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-bold">
              Start Building
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="px-6 py-3 rounded-full font-bold">
              View Documentation
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-extrabold rounded-full bg-secondary text-primary">
              Features
            </span>
            <h2 className="text-4xl font-black mb-4">Unlimited Possibilities</h2>
            <p className="text-gray-600 font-bold max-w-2xl mx-auto">
              Experience the freedom of unlimited RPC calls with our robust infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 hover-scale"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-extrabold mb-2">{feature.title}</h3>
                <p className="text-gray-600 font-bold">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-black mb-8">Start Building Today</h2>
            <Button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold">
              Get API Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Unlimited Calls",
    description: "Make as many RPC calls as you need without any restrictions or throttling.",
    icon: <Star className="w-6 h-6 text-primary" />,
  },
  {
    title: "Global Infrastructure",
    description: "Low-latency RPC calls powered by our worldwide distributed network.",
    icon: <Star className="w-6 h-6 text-primary" />,
  },
  {
    title: "Real-time Performance",
    description: "Lightning-fast response times for all your RPC requests.",
    icon: <Star className="w-6 h-6 text-primary" />,
  },
];

export default Index;