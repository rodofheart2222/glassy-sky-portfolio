import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export const RpcComparison = () => {
  const [data, setData] = useState<Array<{time: number, profit: number, opportunities: number}>>([]);
  
  useEffect(() => {
    // Initialize with some data points
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: i,
      profit: Math.floor(Math.random() * 0.5 * 100) / 100, // Random profit between 0-0.5 ETH
      opportunities: Math.floor(Math.random() * 5) + 1, // Random opportunities between 1-5
    }));
    setData(initialData);

    // Update data every second
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData.slice(1), {
          time: prevData[prevData.length - 1].time + 1,
          profit: Math.floor(Math.random() * 0.5 * 100) / 100,
          opportunities: Math.floor(Math.random() * 5) + 1,
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
              <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="opportunitiesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F97316" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
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
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="opportunities"
              stroke="#F97316"
              fill="url(#opportunitiesGradient)"
              name="MEV Opportunities"
            />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke="#22C55E"
              fill="url(#profitGradient)"
              name="Profit (ETH)"
            />
          </AreaChart>
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
          <div className="text-[#22C55E] font-bold">Profit Tracking</div>
          <div className="text-white/80 text-sm">Real-time profit monitoring</div>
          <div className="text-white/80 text-sm">Average 0.25 ETH per trade</div>
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
          <div className="text-[#F97316] font-bold">MEV Opportunities</div>
          <div className="text-white/80 text-sm">Live opportunity detection</div>
          <div className="text-white/80 text-sm">~3 opportunities per minute</div>
        </motion.div>
      </div>
    </div>
  );
};