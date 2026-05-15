import { motion } from 'motion/react';
import { ShieldAlert, ArrowRight, Activity, Zap, Search, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WorkflowCleanupPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[150px] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/50 font-bold text-sm mb-12 hover:text-white transition-colors">
            <ArrowRight className="rotate-180" size={16} /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex p-4 rounded-2xl bg-white/5 mb-6">
                <ShieldAlert className="text-finance-primary" size={32} />
              </div>
              <h1 className="text-4xl lg:text-6xl mb-8 leading-tight">
                AI Finance <br /> <span className="grad-text">Workflow Cleanup</span>
              </h1>
              <p className="text-white/70 text-xl leading-relaxed mb-10">
                Disconnected tools? Manual data export/imports? Broken Zapier links? I audit your current mess and rebuild the "single source of truth" your business needs.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Search, title: 'Deep Audit', text: 'Locate every leak and broken link in your stack.' },
                  { icon: LifeBuoy, title: 'Recovery', text: 'Restore missing data and fix integration errors.' }
                ].map((item) => (
                  <div key={item.title} className="glass-dark p-6 rounded-2xl border-white/10">
                    <item.icon className="text-finance-primary mb-3" size={24} />
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-white/40 text-xs">{item.text}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                Audit My System
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative">
               <div className="glass-dark p-12 rounded-[3.5rem] border-red-500/20 flex flex-col items-center">
                  <Activity className="text-red-500 mb-8 animate-pulse" size={80} />
                  <div className="text-center">
                     <p className="text-3xl font-display font-medium text-white mb-2 italic">"From Chaos to Clarity."</p>
                     <p className="text-white/30 uppercase tracking-[0.2em] font-bold text-[10px]">Fixing Broken Operations Since 2018</p>
                  </div>
                  <div className="mt-12 space-y-4 w-full">
                     {[
                       { label: 'Disconnected APIs', value: 'Found & Fixed' },
                       { label: 'Manual Entry Loops', value: 'Eliminated' },
                       { label: 'Ghost Licenses', value: 'Terminated' }
                     ].map((stat, i) => (
                       <div key={i} className="flex items-center justify-between p-4 glass rounded-xl border-white/5">
                          <span className="text-white/60 text-xs font-bold">{stat.label}</span>
                          <span className="text-finance-primary text-xs font-black">{stat.value}</span>
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
