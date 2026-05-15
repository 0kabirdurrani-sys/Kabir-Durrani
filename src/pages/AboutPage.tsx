import { motion } from 'motion/react';
import About from '../components/About';

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-7xl mb-6 grad-text">My Story.</h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Combining accounting precision with the power of artificial intelligence to redefine finance operations.
          </p>
        </motion.div>
        
        <About />

        <div className="mt-32 grid md:grid-cols-3 gap-8">
           {[
             { title: 'The Vision', text: 'To empower 1,000+ businesses with automated financial systems that run on autopilot.' },
             { title: 'The Approach', text: 'I don\'t just fix accounting; I build operations that scale with your growth.' },
             { title: 'The Guarantee', text: 'If you don\'t see measurable time savings in 30 days, I work for free.' }
           ].map((item, i) => (
             <motion.div
               key={item.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass-dark p-10 rounded-[2.5rem] border border-white/5"
             >
               <h3 className="text-2xl font-bold mb-4 text-finance-primary">{item.title}</h3>
               <p className="text-white/60 leading-relaxed">{item.text}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
