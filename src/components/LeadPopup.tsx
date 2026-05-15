import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: "Get Your Free Workflow Audit",
    desc: "Discover how much time you can save with AI automation. Reclaim 10+ hours/month."
  });

  useEffect(() => {
    const hasSeenTimePopup = sessionStorage.getItem('hasSeenTimePopup');
    const hasSeenScrollPopup = sessionStorage.getItem('hasSeenScrollPopup');
    const hasSeenExitPopup = sessionStorage.getItem('hasSeenExitPopup');

    // 1. 9 Second Timer
    const timer = setTimeout(() => {
      if (!hasSeenTimePopup && !isOpen) {
        setPopupContent({
          title: "Waiting is Costing You Cash.",
          desc: "You've been here for 9 seconds. In that time, another manual invoice could have been automated. Let's fix that."
        });
        setIsOpen(true);
        sessionStorage.setItem('hasSeenTimePopup', 'true');
      }
    }, 9000);

    // 2. Scroll Trigger (2nd section ~800px)
    const handleScroll = () => {
      if (!hasSeenScrollPopup && !isOpen && window.scrollY > 800) {
        setPopupContent({
          title: "Deep Dive into Efficiency.",
          desc: "You're clearly looking for better workflows. I can audit your current finance stack for free."
        });
        setIsOpen(true);
        sessionStorage.setItem('hasSeenScrollPopup', 'true');
      }
    };

    // 3. Exit Intent
    const handleExitIntent = (e: MouseEvent) => {
      if (!hasSeenExitPopup && !isOpen && e.clientY <= 0) {
        setPopupContent({
          title: "Wait! Don't Leave Chaos Behind.",
          desc: "Before you go, grab my '5 AI Wins for Finance' guide and start automating today."
        });
        setIsOpen(true);
        sessionStorage.setItem('hasSeenExitPopup', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleExitIntent);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="relative glass-dark p-8 lg:p-12 rounded-[3.5rem] border border-finance-primary/40 max-w-lg w-full shadow-2xl"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="mb-6 inline-flex p-4 rounded-2xl bg-finance-primary/10">
              <Sparkles className="text-finance-primary" size={32} />
            </div>

            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 leading-tight">
              {popupContent.title}
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed text-lg">
              {popupContent.desc}
            </p>

            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Work Email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-finance-primary focus:outline-none text-white font-medium"
              />
              <button className="w-full bg-finance-primary text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform text-lg">
                Secure Free Audit
                <ArrowRight size={20} />
              </button>
            </form>
            
            <div className="mt-10 flex items-center justify-center gap-2">
               <div className="w-2 h-2 rounded-full bg-finance-primary animate-pulse" />
               <p className="text-[10px] text-white/30 uppercase font-black tracking-[0.2em]">
                 Live Strategy Slots Available
               </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
