import { motion } from 'motion/react';
import { Settings, ArrowRight, Zap, Target, Layers, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinanceAutomationPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-finance-secondary/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-finance-secondary font-bold text-sm mb-12 hover:translate-x-[-4px] transition-transform">
            <ArrowRight className="rotate-180" size={16} /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex p-4 rounded-2xl bg-finance-secondary/10 mb-6">
                <Settings className="text-finance-secondary" size={32} />
              </div>
              <h1 className="text-4xl lg:text-6xl mb-8 leading-tight">
                Finance <br /> <span className="grad-text">Automation Setup</span>
              </h1>
              <p className="text-white/70 text-xl leading-relaxed mb-10">
                Eliminate the repetitive admin that kills your Sunday. I connect your bank, accounting software, and CRMs into a seamless, hands-free engine.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: Target, title: 'Zero Error Rate', text: 'Humans make mistakes. My automations don’t.' },
                  { icon: Layers, title: 'Deep Stack', text: 'Integration with QuickBooks, Xero, Stripe & more.' }
                ].map((item) => (
                  <div key={item.title} className="glass-dark p-6 rounded-2xl border-white/10">
                    <item.icon className="text-finance-secondary mb-3" size={24} />
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-white/40 text-xs">{item.text}</p>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-finance-secondary text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                Automate My Operations
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative">
               <div className="glass-dark p-10 rounded-[3rem] border-white/10 flex flex-col items-center gap-8">
                  <div className="relative w-48 h-48">
                     <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-dashed border-finance-secondary/20 rounded-full"
                     />
                     <div className="absolute inset-4 border-2 border-finance-secondary/40 rounded-full flex items-center justify-center">
                        <Cpu className="text-finance-secondary animate-pulse" size={64} />
                     </div>
                  </div>
                  <div className="text-center">
                     <p className="text-2xl font-bold text-white mb-2">120+ Active Workflows</p>
                     <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Synchronizing Data Globally</p>
                  </div>
                  <div className="w-full flex justify-around opacity-50">
                     <Zap size={24} />
                     <Zap size={24} className="text-finance-secondary" />
                     <Zap size={24} />
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
