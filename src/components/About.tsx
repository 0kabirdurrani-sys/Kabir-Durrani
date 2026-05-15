import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-finance-dark/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden glass relative">
            <img 
              src="/input_file_0.png" 
              alt="Kabir Durrani" 
              className="w-full h-full object-cover brightness-105 opacity-100 transition-all duration-700 hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
              }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#05070A]/80 via-transparent to-transparent" />
          </div>
          
          <div className="absolute -bottom-6 -right-6 glass p-8 rounded-3xl border-finance-primary/20 max-w-xs shadow-2xl">
            <p className="text-finance-primary font-bold text-3xl mb-1">8+</p>
            <p className="text-white/40 text-xs uppercase tracking-widest leading-relaxed">Years of Accounting & Automation Mastery</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:pl-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-finance-primary/10 border border-finance-primary/20 mb-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-finance-primary">8+ Years Senior Accounting Experience</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl mb-10 leading-tight">
            I simplify the <br /> <span className="grad-text italic">Financial Chaos.</span>
          </h2>
          
          <div className="space-y-8 text-white/80 text-xl leading-relaxed">
            <p>
              I’m <span className="text-white font-bold border-b-2 border-finance-primary/40">Kabir Durrani</span>. With over <span className="text-finance-primary font-black italic">8 years of hands-on experience</span> in the accounting field, I know exactly where business owners lose money and time.
            </p>
            <p className="bg-white/5 p-6 rounded-3xl border border-white/10 italic text-white/90">
              "My mission: Eliminate the manual accounting chaos that drains 15-25 hours of productive time from every business owner’s month."
            </p>
            <p>
              I don't just 'do books'—I build automated high-performance finance ecosystems that run without you.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
             <div className="flex -space-x-3 mb-4 sm:mb-0">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-12 h-12 rounded-full border-2 border-[#05070A] bg-zinc-800 overflow-hidden shrink-0">
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" className="w-full h-full object-cover grayscale" />
                 </div>
               ))}
               <div className="w-12 h-12 rounded-full border-2 border-[#05070A] bg-finance-primary text-black flex items-center justify-center text-xs font-bold font-display">+50</div>
             </div>
             <div>
                <p className="text-white/40 text-[11px] uppercase font-bold tracking-widest">Trusted by 50+ Modern Founders</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder, E-com Brand',
    text: 'Kabir recovered $45k in overdue invoices within 60 days. Our month-end close now happens in 4 hours instead of 4 days.'
  },
  {
    name: 'Marcus Thorne',
    role: 'Agency Owner',
    text: 'I used to spend every Sunday reconciled accounts. Now, my entire finance stack is automated. Kabir is a game-changer.'
  },
  {
    name: 'Elena Rodriguez',
    role: 'SMB Operator',
    text: 'The visibility we have now into our cash flow is incredible. We finally feel in control of our financial operations.'
  }
];

export function SocialProof() {
  return (
    <section id="testimonials" className="py-32 px-6">
       <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl lg:text-5xl mb-6">Social Proof.</h2>
             <p className="text-white/50">Trusted by modern founders and operators.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-8 rounded-[2.5rem] border border-white/5 relative"
              >
                <Quote className="text-finance-primary/20 absolute top-8 right-8" size={40} />
                <p className="text-white/80 italic mb-8 relative z-10 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-finance-primary to-finance-secondary opacity-50 shrink-0" />
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
}
