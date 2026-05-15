import { motion } from 'motion/react';
import { BarChart3, ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CashFlowRecoveryPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-finance-primary/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-finance-primary font-bold text-sm mb-12 hover:translate-x-[-4px] transition-transform">
            <ArrowRight className="rotate-180" size={16} /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex p-4 rounded-2xl bg-finance-primary/10 mb-6">
                <BarChart3 className="text-finance-primary" size={32} />
              </div>
              <h1 className="text-4xl lg:text-6xl mb-8 leading-tight">
                Cash Flow <br /> <span className="grad-text">Recovery System</span>
              </h1>
              <p className="text-white/70 text-xl leading-relaxed mb-10">
                Stop chasing invoices manually. My AI-powered system automates your receivables, predicts gaps, and ensures you get paid on time, every time.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: TrendingUp, title: 'DSO Reduction', text: 'Reduce Days Sales Outstanding by up to 40%.' },
                  { icon: Zap, title: 'Live Tracking', text: 'Real-time visibility into every overdue dollar.' }
                ].map((item) => (
                  <div key={item.title} className="glass-dark p-6 rounded-2xl border-white/10">
                    <item.icon className="text-finance-primary mb-3" size={24} />
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-white/40 text-xs">{item.text}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-finance-primary text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                Implement This System
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass p-2 rounded-[3rem] border-white/20 aspect-video lg:aspect-square flex items-center justify-center overflow-hidden"
            >
               <div className="bg-black/60 w-full h-full rounded-[2.5rem] flex flex-col p-10">
                  <div className="flex items-center justify-between mb-8">
                     <span className="text-finance-primary font-mono text-xs">RECOVERY_ENGINE_V2.0</span>
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                     </div>
                  </div>
                  <div className="flex-1 space-y-6">
                     {[85, 62, 94].map((progress, i) => (
                       <div key={i} className="space-y-2">
                          <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-white/40">
                             <span>Pipeline {i+1}</span>
                             <span>{progress}% Recovered</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               animate={{ width: `${progress}%` }}
                               transition={{ delay: 1 + (i*0.2), duration: 2 }}
                               className="h-full bg-finance-primary shadow-[0_0_15px_rgba(0,255,148,0.5)]" 
                             />
                          </div>
                       </div>
                     ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                     <div>
                        <p className="text-white font-bold text-2xl">$42,900</p>
                        <p className="text-white/20 text-[10px] uppercase font-bold">In-Flight Recovery</p>
                     </div>
                     <ShieldCheck className="text-finance-primary opacity-50" size={32} />
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-finance-dark/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What’s Included?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Omnichannel Payment Reminders (Email/SMS/WhatsApp)',
              'AI-Driven Customer Risk Scoring',
              'Automated Late Fee Application',
              'Direct-to-Owner Escalation Workflows',
              'Cash Flow Impact Dashboard',
              'Dispute Management Hub'
            ].map((item) => (
              <div key={item} className="flex gap-4 items-start p-6 glass-dark rounded-2xl border-white/5 hover:border-finance-primary/20 transition-colors">
                <CheckCircle2 className="text-finance-primary shrink-0" size={24} />
                <span className="text-white/80 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
