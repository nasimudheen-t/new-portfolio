import { motion } from "framer-motion";

export default function Experience() {
 const zakyResponsibilities = [
  "Implemented secure authentication and authorization using JWT and OAuth.",
  "Integrated TanStack Query, resulting in a 30% performance boost for data fetching and state management.",
  "Developed robust SSR/SSG applications utilizing Next.js for improved SEO and initial load times.",
  "Designed and enforced Role-Based Access Control (RBAC) across applications.",
  "Architected and deployed scalable RESTful APIs with Node.js and Express.",
  "Built highly responsive and accessible user interfaces using React and Tailwind CSS."
];

const luminarResponsibilities = [
  "Developed responsive frontend interfaces using React.js, Tailwind CSS, and Bootstrap from Figma designs.",
  "Built and integrated RESTful APIs using Node.js and Express.js for dynamic web applications.",
  "Worked with TypeScript across frontend and backend modules to improve code quality and maintainability.",
  "Assisted in deploying web applications and resolving server and hosting issues.",
  "Collaborated in Agile sprints, participated in code reviews, and integrated third-party APIs and services."
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="experience" className="relative py-32 overflow-hidden border-t bg-[#1A1A1A] border-white/5">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[50%] right-[10%] w-[600px] h-[600px] bg-brand-accent/5 blur-[150px] rounded-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 mx-auto md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="flex flex-col items-center mb-20 text-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-brand-accent" />
              <p className="font-grotesk uppercase tracking-[0.2em] text-xs text-brand-accent font-semibold text-glow">
                CAREER PATH
              </p>
              <span className="w-10 h-[1px] bg-brand-accent" />
            </div>
            
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl font-sora">
              Experience.
            </h2>
            <p className="max-w-xl text-base font-light font-inter text-brand-text-secondary md:text-lg">
              My professional journey in building scalable web applications.
            </p>
          </div>

          {/* Timeline Item */}
      <div className="space-y-20">
  {/* ================= Zaky Soft ================= */}
  <div className="relative pb-8 pl-10 ml-4 border-l border-white/20 md:ml-6 group">
    <div className="absolute w-4 h-4 bg-brand-bg border-2 border-brand-accent rounded-full -left-[9px] top-2 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:bg-brand-accent transition-all duration-300"></div>

    <div className="absolute left-[-1px] top-2 w-[2px] h-0 bg-brand-accent/50 group-hover:h-full transition-all duration-700 pointer-events-none" />

    <div className="flex flex-col mb-8">
      <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-300 md:text-3xl font-sora group-hover:text-brand-accent">
        MERN Stack Developer
      </h3>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xl font-medium text-brand-accent">
          Zaky Soft
        </span>

        <span className="text-sm text-brand-text-secondary">
          • March 2025 – Present
        </span>
      </div>
    </div>

    <motion.ul
      className="space-y-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {zakyResponsibilities.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className="flex items-start glass-panel p-5 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-colors"
        >
          <span className="mt-1 mr-4 text-sm text-brand-accent">◆</span>
          <span className="text-base leading-relaxed font-inter text-brand-text-secondary md:text-lg">
            {item}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  </div>

  {/* ================= Luminar Technolab ================= */}
  <div className="relative pb-8 pl-10 ml-4 border-l border-white/20 md:ml-6 group">
    <div className="absolute w-4 h-4 bg-brand-bg border-2 border-brand-accent rounded-full -left-[9px] top-2 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:bg-brand-accent transition-all duration-300"></div>

    <div className="absolute left-[-1px] top-2 w-[2px] h-0 bg-brand-accent/50 group-hover:h-full transition-all duration-700 pointer-events-none" />

    <div className="flex flex-col mb-8">
      <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-300 md:text-3xl font-sora group-hover:text-brand-accent">
        Full Stack Developer Intern
      </h3>

      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xl font-medium text-brand-accent">
          Luminar Technolab
        </span>

        <span className="text-sm text-brand-text-secondary">
          • June 2024 – February 2025
        </span>
      </div>
    </div>

    <motion.ul
      className="space-y-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {luminarResponsibilities.map((item, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          className="flex items-start glass-panel p-5 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.03] transition-colors"
        >
          <span className="mt-1 mr-4 text-sm text-brand-accent">◆</span>
          <span className="text-base leading-relaxed font-inter text-brand-text-secondary md:text-lg">
            {item}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
}
