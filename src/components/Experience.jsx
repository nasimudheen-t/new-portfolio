import { motion } from "framer-motion";

export default function Experience() {
  const responsibilities = [
    "Implemented secure authentication and authorization using JWT and OAuth.",
    "Integrated TanStack Query, resulting in a 30% performance boost for data fetching and state management.",
    "Developed robust SSR/SSG applications utilizing Next.js for improved SEO and initial load times.",
    "Designed and enforced Role-Based Access Control (RBAC) across applications.",
    "Architected and deployed scalable RESTful APIs with Node.js and Express.",
    "Built highly responsive and accessible user interfaces using React and Tailwind CSS."
  ];

  return (
    <section id="experience" className="py-32 border-t border-border-soft">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-deep tracking-tight mb-4">
              Experience.
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              My professional journey in building scalable web applications.
            </p>
          </div>

          <div className="relative border-l-2 border-border-soft ml-4 md:ml-6 pl-8 pb-8">
            <div className="absolute w-5 h-5 bg-cream-bg border-[3px] border-accent-gold rounded-full -left-[11px] top-1"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
              <div>
                <h3 className="text-2xl font-serif font-bold text-text-deep mb-1">MERN Stack Developer</h3>
                <h4 className="text-xl text-accent-gold font-medium">Zaky Soft</h4>
              </div>
              <div className="text-sm font-medium text-text-muted mt-2 md:mt-0 uppercase tracking-wider">
                March 2025 — Present
              </div>
            </div>

            <ul className="space-y-4">
              {responsibilities.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent-gold mr-4 mt-1.5 opacity-60 text-xs">◆</span>
                  <span className="text-text-muted leading-relaxed text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
