import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Star } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
          <span className="inline-block px-6 py-2 mb-6 text-lg font-black rounded-full bg-primary/20 text-primary border-2 border-primary/20 shadow-lg shadow-primary/20">
            <HoverCard>
              <HoverCardTrigger className="hover:text-primary/80 transition-colors">
                UNLIMITED POWER
              </HoverCardTrigger>
              <HoverCardContent className="glass-card">
                <h4 className="font-bold mb-2">Unlimited Power</h4>
                <p>Experience true unlimited power with our platform. No throttling, no limits on your API calls or processing capabilities.</p>
              </HoverCardContent>
            </HoverCard>
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            <HoverCard>
              <HoverCardTrigger className="hover:text-primary/80 transition-colors">
                Unlimited RPC Calls
              </HoverCardTrigger>
              <HoverCardContent className="glass-card">
                <h4 className="font-bold mb-2">Remote Procedure Calls</h4>
                <p>Make as many remote procedure calls as you need. Our infrastructure is built to handle massive scale without compromising on performance.</p>
              </HoverCardContent>
            </HoverCard>
          </h1>
          <p className="text-xl md:text-2xl font-extrabold text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Scale your applications with{" "}
            <HoverCard>
              <HoverCardTrigger className="text-primary hover:text-primary/80 transition-colors">
                unlimited remote procedure calls
              </HoverCardTrigger>
              <HoverCardContent className="glass-card">
                <h4 className="font-bold mb-2">Scalability</h4>
                <p>Our platform automatically scales with your needs. Whether you're handling hundreds or millions of calls, we've got you covered.</p>
              </HoverCardContent>
            </HoverCard>
            .{" "}
            <span className="text-primary">
              <HoverCard>
                <HoverCardTrigger className="hover:text-primary/80 transition-colors">
                  No throttling, no limits
                </HoverCardTrigger>
                <HoverCardContent className="glass-card">
                  <h4 className="font-bold mb-2">No Restrictions</h4>
                  <p>Unlike other platforms, we don't impose artificial limits on your usage. Your applications can grow freely without worrying about hitting caps or paying overage fees.</p>
                </HoverCardContent>
              </HoverCard>
            </span>
          </p>
          <div className="flex items-center justify-center gap-6">
            <Button className="px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full font-black text-lg shadow-xl shadow-primary/20 transform hover:scale-105 transition-all">
              Start Building
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
            <Button variant="outline" className="px-8 py-6 rounded-full font-black text-lg border-2 hover:bg-primary/5 text-white border-white/20">
              View Documentation
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block px-6 py-2 mb-6 text-lg font-black rounded-full bg-primary/20 text-primary">
              FEATURES
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Unlimited Possibilities
            </h2>
            <p className="text-xl font-extrabold text-white/90 max-w-3xl mx-auto leading-relaxed">
              Experience the freedom of unlimited RPC calls with our robust infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 hover-scale shadow-2xl"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white">{feature.title}</h3>
                <p className="text-lg font-bold text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Start Building Today
            </h2>
            <Button className="px-12 py-8 bg-primary hover:bg-primary/90 text-white rounded-full font-black text-xl shadow-2xl shadow-primary/20 transform hover:scale-105 transition-all">
              Get API Access
              <ArrowRight className="ml-3 h-6 w-6" />
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
    icon: <Star className="w-8 h-8 text-primary" />,
  },
  {
    title: "Global Infrastructure",
    description: "Low-latency RPC calls powered by our worldwide distributed network.",
    icon: <Star className="w-8 h-8 text-primary" />,
  },
  {
    title: "Real-time Performance",
    description: "Lightning-fast response times for all your RPC requests.",
    icon: <Star className="w-8 h-8 text-primary" />,
  },
];

export default Index;
