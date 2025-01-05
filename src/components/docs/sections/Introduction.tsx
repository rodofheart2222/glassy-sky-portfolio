import { motion } from "framer-motion";

export const Introduction = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="introduction"
      className="glass-card p-8 rounded-xl mb-8"
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Introduction</h2>
      <div className="space-y-6 text-white/90">
        <div>
          <h3 className="text-2xl font-bold mb-4">Welcome</h3>
          <p className="leading-relaxed">
            Welcome to the Unlimited RPC Endpoints documentation. This guide is meticulously crafted to guide you through every aspect of utilizing our RPC services effectively. Whether you're a seasoned developer or just starting, you'll find valuable insights and instructions to help you integrate our RPC endpoints seamlessly into your projects.
          </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Purpose of This Documentation</h3>
          <p className="leading-relaxed mb-4">
            The primary goal of this documentation is to provide a thorough understanding of:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Accessing and authenticating</strong> with our RPC endpoints.</li>
            <li><strong>Making effective RPC requests</strong> using various methods.</li>
            <li><strong>Optimizing performance</strong> and ensuring security.</li>
            <li><strong>Troubleshooting common issues</strong> and understanding error codes.</li>
            <li><strong>Leveraging advanced features</strong> for complex use cases.</li>
          </ul>
          <p className="leading-relaxed mt-4">
            By the end of this guide, you'll be equipped with the knowledge to harness the full potential of our Unlimited RPC Endpoints without the constraints of rate limits.
          </p>
        </div>
      </div>
    </motion.section>
  );
};