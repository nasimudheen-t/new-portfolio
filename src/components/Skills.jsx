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
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 border-t border-border-soft">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-deep tracking-tight mb-4">
              Skills.
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>

          <div className="space-y-12">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                <h3 className="text-xl font-serif font-bold text-text-deep md:w-48 pt-1">{category.title}</h3>
                <motion.div
                  className="flex flex-wrap gap-3 flex-1"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium border ${
                        skill.core
                          ? "bg-accent-gold text-white border-accent-gold shadow-sm"
                          : "bg-cream-alt text-text-muted border-border-soft"
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
