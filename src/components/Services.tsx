import { motion } from 'motion/react';
import { 
  BarChart3, 
  Settings, 
  RefreshCcw, 
  ShieldAlert, 
  ArrowUpRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: BarChart3,
    title: 'Cash Flow Recovery System',
    description: 'Automated invoice follow-ups, payment reminders, overdue tracking, and cash flow forecasting.',
    outcome: 'Recover payments faster and improve cash predictability.',
    color: 'finance-primary',
    href: '/services/cashflow-recovery'
  },
  {
    icon: Settings,
    title: 'Finance Automation Setup',
    description: 'Automate repetitive finance admin using AI tools and workflows.',
    outcome: 'Reduce manual work and save operational hours every month.',
    color: 'finance-secondary',
    href: '/services/finance-automation'
  },
  {
    icon: RefreshCcw,
    title: 'Month-End Close Accelerator',
    description: 'Automate reconciliation, reporting, expense categorization, and management dashboards.',
    outcome: 'Cut reporting time and gain faster financial visibility.',
    color: 'white',
    href: '/services/monthend-close'
  },
  {
    icon: ShieldAlert,
    title: 'AI Finance Workflow Cleanup',
    description: 'Fix broken automations, disconnected tools, and messy finance systems.',
    outcome: 'Simplify operations and eliminate workflow chaos.',
    color: 'finance-primary',
    href: '/services/workflow-cleanup'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-finance-primary font-bold uppercase tracking-[0.2em] text-xs mb-4"
          >
            Specialized Solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl"
          >
            Not Just Accounting. <br /> <span className="text-white/40 italic">Business Optimization.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass-dark p-8 rounded-[2rem] border border-white/5 hover:border-finance-primary/30 transition-all duration-300 relative overflow-hidden h-full flex flex-col"
              >
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-finance-primary/5 blur-3xl group-hover:bg-finance-primary/10 transition-colors" />
                
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 group-hover:bg-finance-primary/10 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="text-white group-hover:text-finance-primary transition-colors" size={24} />
                </div>

                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-finance-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-white/40 mb-2">Outcome</p>
                    <p className="text-xs text-white leading-relaxed font-medium">
                      {service.outcome}
                    </p>
                  </div>
                </div>

                <motion.div 
                  className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="text-finance-primary" size={20} />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
