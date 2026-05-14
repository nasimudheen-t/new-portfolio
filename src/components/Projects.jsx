import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";
import { Github } from "./Icons";

const projects = [
  {
    title: "Client Dashboard",
    description: "A comprehensive client management dashboard focusing on real-time data visualization and performance metrics.",
    tech: ["Next.js", "TanStack Query", "shadcn/ui"],
    github: "#",
    live: "#"
  },
  {
    title: "EZZone",
    description: "An event booking platform featuring secure user authentication and seamless reservation workflows.",
    tech: ["MERN", "JWT", "Event Booking"],
    github: "#",
    live: "#"
  },
  {
    title: "BugTracker",
    description: "An issue tracking system to manage, assign, and resolve software bugs efficiently across teams.",
    tech: ["Express", "MySQL", "React"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Collaboration Portal",
    description: "A centralized portal for team task management featuring strict role-based access control and RESTful integration.",
    tech: ["RBAC", "MySQL", "REST API"],
    github: "#",
    live: "#"
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-32 border-t border-border-soft bg-cream-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-deep tracking-tight mb-4">
            Selected Works.
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            A collection of recent projects focusing on full-stack development and robust architectures.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-cream-bg border border-border-soft rounded-2xl p-10 flex flex-col h-full transition-shadow hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex justify-between items-center mb-8">
                <Folder className="text-accent-gold" size={40} strokeWidth={1} />
                <div className="flex gap-4 text-text-muted">
                  <a href={project.github} className="hover:text-accent-gold transition-colors">
                    <Github size={22} />
                  </a>
                  <a href={project.live} className="hover:text-accent-gold transition-colors">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-text-deep mb-4 group-hover:text-accent-gold transition-colors">
                <a href={project.live}>{project.title}</a>
              </h3>
              
              <p className="text-text-muted text-lg leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech, i) => (
                  <li key={i} className="px-4 py-1.5 bg-cream-alt border border-border-soft rounded-full text-sm font-medium text-text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
