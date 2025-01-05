import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export const RpcComparison = () => {
  const [data, setData] = useState<Array<{time: number, our: number, other: number}>>([]);
  
  useEffect(() => {
    // Initialize with some data points
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: i,
      our: Math.floor(Math.random() * 50) + 100, // Random between 100-150ms
      other: 20, // Other's consistent 20ms
    }));
    setData(initialData);

    // Update data every second
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData.slice(1), {
          time: prevData[prevData.length - 1].time + 1,
          our: Math.floor(Math.random() * 50) + 100,
          other: 20,
        }];
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 w-full">
      {/* Live Performance Graph */}
      <div className="absolute inset-0 px-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="ourGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F97316" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="otherGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              stroke="#FFFFFF40"
              tick={{ fill: '#FFFFFF40' }}
            />
            <YAxis 
              stroke="#FFFFFF40"
              tick={{ fill: '#FFFFFF40' }}
              label={{ 
                value: 'Response Time (ms)', 
                angle: -90, 
                position: 'insideLeft',
                fill: '#FFFFFF40'
              }}
            />
            <Tooltip 
              contentStyle={{ 
                background: 'rgba(0,0,0,0.8)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px'
              }}
              labelStyle={{ color: '#FFFFFF80' }}
            />
            <Area
              type="monotone"
              dataKey="other"
              stroke="#FFFFFF60"
              fill="url(#otherGradient)"
              name="Other Provider"
            />
            <Area
              type="monotone"
              dataKey="our"
              stroke="#F97316"
              fill="url(#ourGradient)"
              name="Our RPC"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Metrics - Top Right (Other Provider) */}
      <div className="absolute right-4 top-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4"
        >
          <div className="text-white/60 font-bold">Other Provider</div>
          <div className="text-white/60 text-sm">20ms Response Time</div>
          <div className="text-white/60 text-sm">Limited to 100 req/sec</div>
        </motion.div>
      </div>

      {/* Performance Metrics - Bottom Right (Our RPC) */}
      <div className="absolute right-4 bottom-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4"
        >
          <div className="text-[#F97316] font-bold">Our RPC</div>
          <div className="text-white/80 text-sm">100ms+ Response Time</div>
          <div className="text-white/80 text-sm">Unlimited Requests/sec</div>
        </motion.div>
      </div>
    </div>
  );
};