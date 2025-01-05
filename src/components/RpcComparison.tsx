import { motion } from "framer-motion";

export const RpcComparison = () => {
  return (
    <div className="relative h-96 w-full">
      {/* Our RPC Animation */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: [0, 300, 300, 0],
          opacity: 1
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-0"
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#F97316]" />
          <span className="text-sm font-medium text-white">Our RPC Request</span>
        </div>
      </motion.div>

      {/* Other Provider Animation */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ 
          x: [0, 150, 150, 300],
          opacity: 1
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-3/4 left-0"
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-white/60" />
          <span className="text-sm font-medium text-white/60">Other Provider Request</span>
        </div>
      </motion.div>

      {/* Performance Lines */}
      <div className="absolute inset-0 flex flex-col justify-around px-8">
        <div className="h-px bg-gradient-to-r from-[#F97316]/20 via-[#F97316] to-[#F97316]/20" />
        <div className="h-px bg-gradient-to-r from-white/10 via-white/30 to-white/10" />
      </div>

      {/* Performance Metrics */}
      <div className="absolute right-4 top-1/4 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4"
        >
          <div className="text-[#F97316] font-bold">20ms Response Time</div>
          <div className="text-white/80 text-sm">Unlimited Requests/sec</div>
        </motion.div>
      </div>

      <div className="absolute right-4 top-3/4 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4"
        >
          <div className="text-white/60 font-bold">100ms+ Response Time</div>
          <div className="text-white/60 text-sm">Limited to 100 req/sec</div>
        </motion.div>
      </div>
    </div>
  );
};
