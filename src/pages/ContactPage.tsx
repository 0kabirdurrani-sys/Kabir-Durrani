import { motion } from 'motion/react';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-7xl mb-6 grad-text">Let's Connect.</h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Ready to reclaim your time and fix your finance operations? I'm just a message away.
          </p>
        </motion.div>
        
        <Contact />

        <div className="mt-20 text-center">
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold mb-8">Prefer direct booking?</p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-finance-primary text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform"
          >
            Schedule a 15min Discovery Call
          </a>
        </div>
      </div>
    </div>
  );
}
