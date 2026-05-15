import { motion } from 'motion/react';
import { RefreshCcw, ArrowRight, Clock, ShieldCheck, Database, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MonthEndClosePage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 font-bold text-sm mb-12 hover:text-white transition-colors">
            <ArrowRight className="rotate-180" size={16} /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex p-4 rounded-2xl bg-white/5 mb-6">
                <RefreshCcw className="text-white" size={32} />
              </div>
              <h1 className="text-4xl lg:text-6xl mb-8 leading-tight">
                Month-End <br /> <span className="grad-text">Close Accelerator</span>
              </h1>
              <p className="text-white/70 text-xl leading-relaxed mb-10">
                Transform your month-end from a 10-day nightmare into a 4-hour review. I automate reconciliations, expense categorization, and report generation.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Clock, title: '90% Time Saved', text: 'Drastic reduction in manual data entry and checking.' },
                  { icon: Database, title: 'Data Integrity', text: 'Error-free reconciliations across all accounts.' }
                ].map((item) => (
                  <div key={item.title} className="glass-dark p-6 rounded-2xl border-white/10">
                    <item.icon className="text-white mb-3" size={24} />
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-white/40 text-xs">{item.text}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                Fast-Track My Reporting
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="relative">
               <div className="glass-dark p-12 rounded-[3.5rem] border-white/5 flex flex-col items-center">
                  <Calendar className="text-finance-primary mb-6" size={80} />
                  <div className="text-center">
                     <p className="text-5xl font-display font-black text-white mb-4">4 Hours</p>
                     <p className="text-white/40 uppercase tracking-[0.2em] font-bold text-sm">Average Close Time After Setup</p>
                  </div>
                  <div className="mt-10 flex gap-2">
                     {[1,2,3,4,5].map(i => (
                       <div key={i} className="w-8 h-2 rounded-full bg-finance-primary/20 overflow-hidden">
                          <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                            className="h-full w-full bg-finance-primary"
                          />
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
