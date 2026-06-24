import { motion } from "framer-motion";
import { Code2, Zap, Layout, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description: "I build maintainable, modular, and loosely coupled systems following SOLID principles and modern design patterns."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Focus on Core Web Vitals, server-side rendering, efficient database queries, and caching to ensure lightning-fast experiences."
  },
  {
    icon: Layout,
    title: "Responsive UI",
    description: "Crafting pixel-perfect, accessible, and fluid interfaces that look stunning across all devices and screen sizes."
  },
  {
    icon: ShieldCheck,
    title: "Secure Backend",
    description: "Implementing robust authentication, RBAC, input validation, and protecting against common vulnerabilities like XSS and CSRF."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="relative py-32 bg-brand-secondary border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-accent/5 blur-[120px] rounded-[100%] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-brand-accent" />
              <p className="font-grotesk uppercase tracking-[0.2em] text-xs text-brand-accent font-semibold text-glow">
                VALUE PROPOSITION
              </p>
              <span className="w-10 h-[1px] bg-brand-accent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-white tracking-tight mb-6">
              Why Hire Me.
            </h2>
            <p className="font-inter text-brand-text-secondary text-base md:text-lg max-w-2xl font-light">
              I don't just write code; I engineer solutions that are scalable, secure, and delightful to use.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-brand-accent/30 transition-all duration-500 group flex flex-col items-center text-center hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-brand-accent/10 group-hover:border-brand-accent/30 transition-colors duration-500">
                    <Icon size={28} className="text-brand-text-secondary group-hover:text-brand-accent transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-sora font-semibold text-white mb-4 tracking-wide group-hover:text-brand-accent transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="font-inter text-brand-text-secondary font-light text-sm md:text-base leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
