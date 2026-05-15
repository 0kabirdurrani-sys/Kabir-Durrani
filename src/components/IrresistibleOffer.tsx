import { motion } from 'motion/react';
import { Star, ShieldCheck, Zap, TrendingUp } from 'lucide-react';

export default function IrresistibleOffer() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-finance-primary/10 blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="glass-dark p-12 lg:p-20 rounded-[3rem] border border-finance-primary/20 relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-finance-primary text-black px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-2">
            <Star size={16} fill="currentColor" />
            The Signature Offer
            <Star size={16} fill="currentColor" />
          </div>

          <p className="text-finance-primary font-bold uppercase tracking-widest text-xs mb-6">Outcome-Based Finance Automation</p>
          
          <h2 className="text-4xl lg:text-6xl mb-8">
            I don’t sell hours. <br />
            <span className="text-white/40 italic">I sell outcomes.</span>
          </h2>

          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            I’ll help your business recover cash faster, automate finance admin, and save <span className="text-finance-primary font-bold italic underline">15–25 hours/month</span> within 30 days.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: TrendingUp, label: 'Faster Cash' },
              { icon: Zap, label: 'Full Automation' },
              { icon: ShieldCheck, label: 'System Recovery' }
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3 p-6 bg-white/5 rounded-2xl border border-white/5">
                <item.icon size={24} className="text-finance-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="bg-finance-primary/10 border border-finance-primary/20 p-8 rounded-3xl">
            <div className="flex items-center justify-center gap-2 text-finance-primary mb-2">
              <ShieldCheck size={20} />
              <span className="font-bold uppercase tracking-widest text-sm">Performance Guarantee</span>
            </div>
            <p className="text-white text-lg font-medium">
              If your workflows are not significantly improved within 30 days, optimization continues <span className="underline decoration-finance-primary decoration-2 underline-offset-4">free</span> until results are achieved.
            </p>
          </div>

          <div className="mt-12 text-white/30 text-xs italic">
            *Available for E-commerce, Agencies, and SMBs only. Limited spots per month.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
