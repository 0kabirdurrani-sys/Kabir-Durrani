import { motion } from 'motion/react';
import { Mail, Linkedin, Send, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-dark rounded-[3.5rem] border border-white/5 overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 lg:p-20 bg-linear-to-br from-finance-primary/10 to-transparent flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-6xl mb-6">
                Let’s Fix Your <br /> <span className="grad-text">Workflow.</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-sm">
                Ready to recover cash and automate the chaos? Book a strategy call or send a direct message.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:kabir@example.com" className="flex items-center gap-4 text-white/80 hover:text-finance-primary transition-colors group">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-finance-primary/10 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="font-medium text-lg">kabir@financeops.ai</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/kabir-durrani-8b8834250/?skipRedirect=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-finance-primary transition-colors group"
              >
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-finance-primary/10 transition-colors">
                  <Linkedin size={20} />
                </div>
                <span className="font-medium text-lg">LinkedIn / kabirdurrani</span>
              </a>
              <a 
                href="https://wa.me/923349066560" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-finance-primary transition-colors group"
              >
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-finance-primary/10 transition-colors">
                  <MessageSquare size={20} />
                </div>
                <span className="font-medium text-lg">WhatsApp / +92 334 9066560</span>
              </a>
            </div>
          </div>

          <div className="p-12 lg:p-20 bg-black/40">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-finance-primary focus:outline-none transition-colors text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-finance-primary focus:outline-none transition-colors text-white" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Industry</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-finance-primary focus:outline-none transition-colors text-white appearance-none cursor-pointer">
                  <option className="bg-[#0A0F14] text-white">E-commerce</option>
                  <option className="bg-[#0A0F14] text-white">Agency</option>
                  <option className="bg-[#0A0F14] text-white">SaaS / Startup</option>
                  <option className="bg-[#0A0F14] text-white">SMB / Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-1">Current Challenge</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your financial chaos..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-finance-primary focus:outline-none transition-colors text-white" 
                ></textarea>
              </div>

              <button className="w-full bg-white text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-finance-primary transition-all duration-300">
                Submit Strategy Request
                <Send size={18} />
              </button>
              
              <div className="flex items-center justify-center gap-4 py-4 opacity-30">
                 <div className="h-[1px] flex-1 bg-white" />
                 <span className="text-[10px] uppercase font-bold">OR</span>
                 <div className="h-[1px] flex-1 bg-white" />
              </div>

              <button type="button" className="w-full glass py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors">
                Open Calendly Link
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-linear-to-br from-finance-primary to-finance-secondary" />
          <span className="font-display font-bold text-lg">KD</span>
        </Link>
        
        <div className="flex gap-8">
           <Link to="/" className="text-white/40 hover:text-finance-primary transition-colors text-xs uppercase font-bold tracking-widest">Home</Link>
           <Link to="/about" className="text-white/40 hover:text-finance-primary transition-colors text-xs uppercase font-bold tracking-widest">About</Link>
           <Link to="/contact" className="text-white/40 hover:text-finance-primary transition-colors text-xs uppercase font-bold tracking-widest">Contact</Link>
        </div>

        <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
          © 2026 Kabir Durrani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
