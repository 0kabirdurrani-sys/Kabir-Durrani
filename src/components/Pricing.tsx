import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Retainer Model',
    tagline: 'Ongoing Automation & Ops',
    price: '$300–$1,500',
    unit: '/month',
    setup: '$500–$2,000 Setup Fee',
    features: [
      'Cash Flow Monitoring',
      'Automated Invoicing',
      'System Maintenance',
      'Workflow Optimization',
      'Monthly Close Support'
    ],
    cta: 'Apply for Retainer',
    popular: false,
    href: '/models/retainer'
  },
  {
    name: 'Performance Model',
    tagline: 'Risk-Free Recovery',
    price: 'Share',
    unit: '% of Recovery',
    setup: 'Milestone Based',
    features: [
      'Percentage of recovered invoices',
      'Time-saving bonuses',
      'Milestone-locked pricing',
      'Zero upfront risk',
      'Shared growth incentive'
    ],
    cta: 'Start Risk-Free',
    popular: true,
    href: '/models/performance'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl mb-6">Transparent Engagement.</h2>
          <p className="text-white/50 max-w-xl mx-auto italic">
            Low-risk engagement model designed around measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-1 rounded-[2.5rem] ${plan.popular ? 'bg-linear-to-b from-finance-primary/50 to-transparent' : 'bg-white/5'}`}
            >
              <div className="bg-[#0A0F14] rounded-[2.4rem] p-10 h-full flex flex-col">
                {plan.popular && (
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-finance-primary text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Most Impact
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/40 text-sm">{plan.tagline}</p>
                </div>

                <div className="mb-8 p-6 bg-white/5 rounded-3xl border border-white/5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-display font-bold">{plan.price}</span>
                    <span className="text-white/40 text-sm">{plan.unit}</span>
                  </div>
                  <p className="text-finance-primary text-xs font-bold mt-2 uppercase tracking-tight">{plan.setup}</p>
                </div>

                <ul className="space-y-4 mb-12 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-finance-primary/10 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-finance-primary" />
                      </div>
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to={plan.href}
                  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${plan.popular ? 'bg-finance-primary text-black hover:scale-[1.02]' : 'glass hover:bg-white/10'}`}
                >
                  {plan.cta}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
