import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Recovery System', href: '/services/cashflow-recovery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 group-hover:scale-110 transition-transform">
            <img 
              src="/input_file_0.png" 
              alt="Avatar" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter">Kabir Durrani</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors duration-200 ${
                isActive(link.href) ? 'text-finance-primary' : 'text-white/70 hover:text-finance-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-xl text-sm font-bold hover:bg-finance-primary transition-all duration-300"
          >
            Book Audit
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 glass p-6 rounded-2xl flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-lg font-bold uppercase tracking-widest ${
                isActive(link.href) ? 'text-finance-primary' : 'text-white/70'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-finance-primary text-black px-5 py-3 rounded-xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            Book Audit
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
