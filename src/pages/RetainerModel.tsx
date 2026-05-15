import { motion } from 'motion/react';
import { Calendar, ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RetainerModelPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-finance-primary/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-finance-primary font-bold text-sm mb-12 hover:translate-x-[-4px] transition-transform">
            <ArrowRight className="rotate-180" size={16} /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex p-4 rounded-2xl bg-finance-primary/10 mb-6">
                <Calendar className="text-finance-primary" size={32} />
              </div>
              <h1 className="text-4xl lg:text-6xl mb-8 leading-tight">
                Fractional <br /> <span className="grad-text">Retainer Model</span>
              </h1>
              <p className="text-white/70 text-xl leading-relaxed mb-10">
                Your dedicated AI-Finance partner on speed dial. Perfect for growing businesses that need continuous optimization and strategic oversight without the cost of a full-time CFO.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: ShieldCheck, title: 'Total Security', text: 'Peace of mind knowing your ops are monitored 24/7.' },
                  { icon: Zap, title: 'Instant Support', text: 'Priority access to Kabir for all finance tech issues.' }
                ].map((item) => (
                  <div key={item.title} className="glass-dark p-6 rounded-2xl border-white/10">
                    <item.icon className="text-finance-primary mb-3" size={24} />
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-white/40 text-xs">{item.text}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-finance-primary text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                Apply for Partnership
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative bg-black/40 rounded-[3rem] p-12 border border-white/10 shadow-2xl">
               <div className="space-y-6">
                  {[
                    'Weekly Strategy Calls',
                    'Unlimited Workflow Support',
                    'Month-End Close Management',
                    'Custom AI Agent Development',
                    'Tech Stack Optimization',
                    'Strategic Financial Oversight'
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 glass-dark rounded-xl border-white/5"
                    >
                      <CheckCircle2 className="text-finance-primary" size={20} />
                      <span className="text-white font-medium">{item}</span>
                    </motion.div>
                  ))}
               </div>
               <div className="mt-10 pt-10 border-t border-white/10 text-center">
                  <p className="text-white/40 uppercase tracking-[0.2em] font-black text-xs">A True Extension of Your Team</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
