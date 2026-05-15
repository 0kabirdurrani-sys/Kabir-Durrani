import { motion } from 'motion/react';
import { Target, ArrowRight, TrendingUp, Zap, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PerformanceModelPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-finance-secondary/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-finance-secondary font-bold text-sm mb-12 hover:translate-x-[-4px] transition-transform">
            <ArrowRight className="rotate-180" size={16} /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex p-4 rounded-2xl bg-finance-secondary/10 mb-6">
                <Target className="text-finance-secondary" size={32} />
              </div>
              <h1 className="text-4xl lg:text-6xl mb-8 leading-tight">
                Project-Based <br /> <span className="grad-text">Performance Model</span>
              </h1>
              <p className="text-white/70 text-xl leading-relaxed mb-10">
                Low risk, high reward. We agree on a specific financial outcome (e.g. recovering $50k in bad debt), and I get paid a percentage of the value I unlock.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: TrendingUp, title: 'ROI Focused', text: 'You only pay when you see real cash in the bank.' },
                  { icon: Zap, title: 'Rapid Execution', text: 'Focused sprints to solve specific bottlenecks fast.' }
                ].map((item) => (
                  <div key={item.title} className="glass-dark p-6 rounded-2xl border-white/10">
                    <item.icon className="text-finance-secondary mb-3" size={24} />
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-white/40 text-xs">{item.text}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-finance-secondary text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                Start a Sprint
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="relative">
               <div className="glass-dark p-12 rounded-[3.5rem] border-finance-secondary/20 flex flex-col items-center">
                  <Award className="text-finance-secondary mb-8 scale-[2] origin-center" size={40} />
                  <div className="text-center mt-6">
                     <p className="text-2xl font-bold text-white mb-2">Skin In The Game</p>
                     <p className="text-white/40 text-sm italic">"I win only when you win."</p>
                  </div>
                  <div className="mt-12 w-full space-y-4">
                     {[
                       'Zero upfront fee options',
                       'Percentage of recovered cash',
                       'Milestone-based incentives',
                       'Defined success metrics'
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 glass rounded-xl border-white/5">
                           <CheckCircle2 className="text-finance-secondary" size={20} />
                           <span className="text-white/80 font-medium text-sm">{item}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
