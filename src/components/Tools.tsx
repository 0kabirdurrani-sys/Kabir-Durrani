import { motion } from 'motion/react';
import { 
  Zap, 
  Database, 
  Layers, 
  Workflow, 
  Layout, 
  Table, 
  CreditCard 
} from 'lucide-react';

const tools = [
  { name: 'QuickBooks', icon: CreditCard, color: 'text-green-400' },
  { name: 'Xero', icon: Layers, color: 'text-blue-400' },
  { name: 'Zapier', icon: Zap, color: 'text-orange-400' },
  { name: 'Make', icon: Workflow, color: 'text-indigo-400' },
  { name: 'Airtable', icon: Database, color: 'text-pink-400' },
  { name: 'Notion', icon: Layout, color: 'text-white' },
  { name: 'Stripe', icon: CreditCard, color: 'text-blue-500' }
];

export default function Tools() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <span className="text-white/30 text-xs font-bold uppercase tracking-[0.3em] mb-4">Simple Stack. Massive Operational Impact.</span>
          <div className="h-[1px] w-20 bg-finance-primary/30" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, color: '#00FF94' }}
              className="group flex flex-col items-center gap-3 cursor-default"
            >
              <div className="p-4 rounded-2xl glass border-white/5 group-hover:border-finance-primary/30 transition-all duration-300">
                <tool.icon className={`w-8 h-8 ${tool.color} group-hover:text-finance-primary transition-colors`} />
              </div>
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
