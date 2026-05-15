import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', cash: 4000 },
  { name: 'Feb', cash: 3000 },
  { name: 'Mar', cash: 5000 },
  { name: 'Apr', cash: 4500 },
  { name: 'May', cash: 7000 },
  { name: 'Jun', cash: 8500 },
];

export default function DashboardMockup() {
  return (
    <div className="w-full h-full p-6 bg-finance-card glass-dark rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-white font-display font-bold text-lg">Cash Flow Recovery</h3>
          <p className="text-white/40 text-xs">AI-Optimized Workflows</p>
        </div>
        <div className="bg-finance-primary/10 px-3 py-1 rounded-full border border-finance-primary/20">
          <span className="text-finance-primary text-xs font-bold">+24.5% efficiency</span>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00FF94" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00FF94" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 10}}
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{backgroundColor: '#0A0F14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px'}}
              itemStyle={{color: '#00FF94'}}
            />
            <Area 
              type="monotone" 
              dataKey="cash" 
              stroke="#00FF94" 
              fillOpacity={1} 
              fill="url(#colorCash)" 
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
          <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold">Unpaid Invoices</p>
          <p className="text-white font-display font-medium text-xl">-65%</p>
        </div>
        <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
          <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold">Manual Hours</p>
          <p className="text-white font-display font-medium text-xl">12h saved</p>
        </div>
      </div>
    </div>
  );
}
