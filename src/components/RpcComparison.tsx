import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', traditional: 400, unlimited: 240 },
  { name: 'Feb', traditional: 300, unlimited: 139 },
  { name: 'Mar', traditional: 200, unlimited: 980 },
  { name: 'Apr', traditional: 278, unlimited: 390 },
  { name: 'May', traditional: 189, unlimited: 480 },
  { name: 'Jun', traditional: 239, unlimited: 380 },
  { name: 'Jul', traditional: 349, unlimited: 430 },
];

const RpcComparison: React.FC = () => {
  return (
    <div className="w-full h-[400px] glass-card p-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis 
            dataKey="name" 
            stroke="#fff" 
            tick={{ fill: '#fff' }}
            axisLine={{ stroke: 'rgba(255,255,255,0.3)' }}
          />
          <YAxis 
            stroke="#fff"
            tick={{ fill: '#fff' }}
            axisLine={{ stroke: 'rgba(255,255,255,0.3)' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0,0,0,0.8)', 
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#fff'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="traditional" 
            stroke="#FF3B30" 
            strokeWidth={2}
            dot={{ fill: '#FF3B30' }}
          />
          <Line 
            type="monotone" 
            dataKey="unlimited" 
            stroke="#4ADE80" 
            strokeWidth={2}
            dot={{ fill: '#4ADE80' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RpcComparison;