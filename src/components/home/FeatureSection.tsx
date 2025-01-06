import { motion } from "framer-motion";
import { Server, Zap, Clock } from "lucide-react";
import { GlassCard } from "./GlassCard";

const features = [
  {
    icon: <Server className="w-12 h-12 text-[#F97316]" />,
    title: "High-Performance",
    description: [
      "Enterprise-grade servers with 99.99% uptime guarantee.",
      "Global distribution for minimal latency."
    ],
  },
  {
    icon: <Zap className="w-12 h-12 text-[#F97316]" />,
    title: "Lightning Fast Response",
    description: [
      "Average response time of 20ms.",
      "Ensuring your applications run smoothly and efficiently."
    ],
  },
  {
    icon: <Clock className="w-12 h-12 text-[#F97316]" />,
    title: "24/7 Availability",
    description: [
      "24/7 monitoring.",
      "Always online, always reliable."
    ],
  }
];

export const FeatureSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12"
        >
          <h2 className="text-4xl font-black mb-12 text-center text-white">
            Why Choose Our RPC Service?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <div className="space-y-2">
                    {feature.description.map((sentence, idx) => (
                      <GlassCard key={idx}>
                        <p className="text-white/80">{sentence}</p>
                      </GlassCard>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};