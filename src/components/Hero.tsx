import { motion } from 'motion/react';
import { ArrowRight, Zap, Clock, ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardMockup from './DashboardMockup';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-finance-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-finance-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-finance-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-finance-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-finance-primary">AI-Powered Finance Operations</span>
          </div>

          <h1 className="text-5xl lg:text-7xl mb-6 leading-[1.1]">
            Recover Cash <span className="grad-text">Faster.</span> <br />
            Automate Operations.
          </h1>
          
          <p className="text-white/60 text-lg lg:text-xl mb-10 max-w-lg leading-relaxed">
            I help businesses automate finance admin, recover overdue cash, and save <span className="text-white font-bold">15–25 hours per month</span> using AI-powered finance workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-finance-primary text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              Book Free Workflow Audit
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center gap-2 glass px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              About Kabir
            </Link>
          </div>

          <div className="flex items-center gap-8 text-white/40">
            <div className="flex flex-col">
              <span className="text-white text-2xl font-display font-bold">30 Days</span>
              <span className="text-xs uppercase tracking-tighter">Onboarding</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-white text-2xl font-display font-bold">100%</span>
              <span className="text-xs uppercase tracking-tighter">Result-Based</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative group"
        >
          {/* Main User Photo with Glass Frame */}
          <div className="relative aspect-[4/5] max-w-md mx-auto mb-10">
            <div className="absolute inset-0 bg-finance-primary/20 blur-[100px] -z-10 group-hover:bg-finance-primary/30 transition-colors duration-500" />
            <motion.div 
              whileHover={{ y: -10 }}
              className="w-full h-full glass-dark rounded-[3rem] p-3 border-white/20 overflow-hidden shadow-2xl relative"
            >
              <img 
                src="/input_file_0.png" 
                alt="Kabir Durrani" 
                className="w-full h-full object-cover rounded-[2.2rem] brightness-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#05070A]/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-10 left-10 right-10 glass p-5 rounded-2xl border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-display font-bold text-lg leading-tight">Kabir Durrani</p>
                    <p className="text-[10px] text-finance-primary uppercase font-bold tracking-[0.2em]">Finance Operations Specialist</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-finance-primary/10 flex items-center justify-center">
                    <ShieldCheck className="text-finance-primary" size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating UI Elements Around Photo */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-12 glass p-5 rounded-2xl shadow-2xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-finance-primary/20 flex items-center justify-center">
                <TrendingUp className="text-finance-primary" size={24} />
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest leading-tight">DSO Reduced</p>
                <p className="text-xl font-bold text-white">40% Less</p>
              </div>
            </div>
          </motion.div>

          {/* Hidden Dashboard Button */}
          <div className="mt-8">
            <DashboardMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
