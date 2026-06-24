import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", core: true },
      { name: "Next.js", core: true },
      { name: "TypeScript / ES6+", core: true },
      { name: "State Management", core: false },
      { name: "Performance Optimization", core: false },
      { name: "Tailwind CSS", core: true },
      { name: "Responsive Architecture", core: false }
    ]
  },
  {
    title: "Backend Engineering",
    skills: [
      { name: "Node.js", core: true },
      { name: "Express.js", core: true },
      { name: "REST API Design", core: false },
      { name: "Authentication / JWT", core: false },
      { name: "Microservices Concept", core: false }
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB", core: true },
      { name: "MySQL", core: false },
      { name: "Data Modeling", core: false },
      { name: "Query Optimization", core: false }
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Git & Version Control", core: true },
      { name: "CI/CD Pipelines", core: false },
      { name: "AWS Fundamentals", core: false },
      { name: "Deployment Strategies", core: false },
      { name: "Vercel / Netlify", core: false }
    ]
  },
  {
    title: "System Architecture",
    skills: [
      { name: "MVC Pattern", core: true },
      { name: "RBAC Security", core: false },
      { name: "API Integration", core: false },
      { name: "Caching Strategies", core: false }
    ]
  },
  {
    title: "Ecosystem Tools",
    skills: [
      { name: "TanStack Query", core: true },
      { name: "shadcn/ui", core: false },
      { name: "Postman", core: false },
      { name: "Agile / Scrum", core: false }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-brand-bg border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/10 blur-[150px] rounded-[100%] opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-brand-accent" />
              <p className="font-grotesk uppercase tracking-[0.2em] text-xs text-brand-accent font-semibold text-glow">
                TECHNICAL ARSENAL
              </p>
              <span className="w-10 h-[1px] bg-brand-accent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-white tracking-tight mb-6">
              Core Competencies.
            </h2>
            <p className="font-inter text-brand-text-secondary text-base md:text-lg max-w-2xl font-light">
              A comprehensive toolkit tailored for building robust, scalable, and visually stunning web applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {skillCategories.map((category, idx) => (
              <div 
                key={idx} 
                className="p-8 glass-panel rounded-3xl border border-white/5 hover:border-brand-accent/20 transition-colors duration-500 group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-2 h-2 rounded-full bg-brand-accent group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-shadow duration-300" />
                  <h3 className="text-xl font-sora font-semibold text-white tracking-wide">{category.title}</h3>
                </div>
                
                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-5 py-2.5 rounded-full font-inter text-xs tracking-wide font-medium border backdrop-blur-md transition-all duration-300 cursor-default ${
                        skill.core
                          ? "bg-brand-accent/10 text-brand-accent border-brand-accent/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-brand-accent/20 hover:border-brand-accent/50"
                          : "bg-white/5 text-brand-text-secondary border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
