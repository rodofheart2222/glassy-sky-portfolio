import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";

export const RpcComparison = () => {
  const [data, setData] = useState<Array<{
    timestamp: number,
    profitEth: number,
    opportunities: number
  }>>([]);
  
  useEffect(() => {
    // Initialize with some data points
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      timestamp: i,
      profitEth: Number((Math.random() * 0.5).toFixed(3)),
      opportunities: Math.floor(Math.random() * 10)
    }));
    setData(initialData);

    // Update data every second
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData.slice(1), {
          timestamp: prevData[prevData.length - 1].timestamp + 1,
          profitEth: Number((Math.random() * 0.5).toFixed(3)),
          opportunities: Math.floor(Math.random() * 10)
        }];
        return newData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-96 w-full">
      {/* Live MEV Performance Graph */}
      <div className="absolute inset-0 px-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="timestamp" 
              stroke="#FFFFFF40"
              tick={{ fill: '#FFFFFF40' }}
            />
            <YAxis 
              yAxisId="left"
              stroke="#FFFFFF40"
              tick={{ fill: '#FFFFFF40' }}
              label={{ 
                value: 'Profit (ETH)', 
                angle: -90, 
                position: 'insideLeft',
                fill: '#FFFFFF40'
              }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              stroke="#FFFFFF40"
              tick={{ fill: '#FFFFFF40' }}
              label={{ 
                value: 'Opportunities', 
                angle: 90, 
                position: 'insideRight',
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
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profitEth"
              stroke="#F97316"
              name="Profit (ETH)"
              dot={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="opportunities"
              stroke="#FFFFFF"
              name="MEV Opportunities"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Performance Metrics - Top Right */}
      <div className="absolute right-4 top-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4"
        >
          <div className="text-white/60 font-bold">Last 24h Stats</div>
          <div className="text-white/60 text-sm">Total Profit: 2.5 ETH</div>
          <div className="text-white/60 text-sm">Success Rate: 85%</div>
        </motion.div>
      </div>

      {/* Performance Metrics - Bottom Right */}
      <div className="absolute right-4 bottom-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4"
        >
          <div className="text-[#F97316] font-bold">Real-time Metrics</div>
          <div className="text-white/80 text-sm">Active Opportunities: 8</div>
          <div className="text-white/80 text-sm">Gas Price: 25 Gwei</div>
        </motion.div>
      </div>
    </div>
  );
};