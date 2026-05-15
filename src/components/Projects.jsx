import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";
import { Github } from "./Icons";

const projects = [
  {
    title: "Enterprise Client Analytics Dashboard",
    description: (
      <div className="space-y-4 text-base">
        <div>
          <strong className="text-text-deep font-semibold">Problem:</strong> Legacy systems lacked real-time visibility into client performance metrics, leading to fragmented decision-making.
        </div>
        <div>
          <strong className="text-text-deep font-semibold">Solution:</strong> Architected a scalable dashboard for real-time data visualization. Engineered the frontend with Next.js and utilized TanStack Query for optimal server-state management.
        </div>
        <div>
          <strong className="text-text-deep font-semibold">Challenges & Impact:</strong> Overcame client-side rendering bottlenecks via advanced memoization, reducing initial load times by 40%. Implemented secure role-based access control (RBAC).
        </div>
      </div>
    ),
    tech: ["Next.js", "TanStack Query", "System Design", "RBAC"],
    github: "#",
    live: "#"
  },
  {
    title: "EZZone - High-Concurrency Booking Platform",
    description: (
      <div className="space-y-4 text-base">
        <div>
          <strong className="text-text-deep font-semibold">Problem:</strong> Existing booking solutions suffered from race conditions and poor user experiences during high-traffic events.
        </div>
        <div>
          <strong className="text-text-deep font-semibold">Solution:</strong> Developed a secure reservation platform addressing concurrency. Implemented scalable RESTful APIs with Node.js and MongoDB, ensuring ACID-like transaction handling.
        </div>
        <div>
          <strong className="text-text-deep font-semibold">Challenges & Impact:</strong> Optimized database indexing to support fast geospatial queries. Integrated robust JWT-based session management, significantly improving authentication security.
        </div>
      </div>
    ),
    tech: ["MERN Stack", "API Design", "Security", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "BugTracker - Production Issue Management",
    description: (
      <div className="space-y-4 text-base">
        <div>
          <strong className="text-text-deep font-semibold">Problem:</strong> Cross-functional teams lacked a unified, structured workflow for tracking and resolving software defects efficiently.
        </div>
        <div>
          <strong className="text-text-deep font-semibold">Solution:</strong> Built a production-grade issue tracking system. Engineered a responsive React UI with real-time state synchronization and a robust Express/MySQL backend.
        </div>
        <div>
          <strong className="text-text-deep font-semibold">Challenges & Impact:</strong> Solved complex relational data modeling challenges to maintain strict data integrity across issues, assignments, and historical logs.
        </div>
      </div>
    ),
    tech: ["Express", "MySQL", "React", "State Management"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Collaboration & Access Portal",
    description: (
      <div className="space-y-4 text-base">
        <div>
          <strong className="text-text-deep font-semibold">Problem:</strong> Decentralized task management resulted in poor auditability and unauthorized access to sensitive project data.
        </div>
        <div>
          <strong className="text-text-deep font-semibold">Solution:</strong> Designed a centralized workflow portal with a strict Role-Based Access Control (RBAC) architecture.
        </div>
        <div>
          <strong className="text-text-deep font-semibold">Challenges & Impact:</strong> Established a clean MVC architecture on the backend, creating modular and testable endpoints. Mitigated security risks by enforcing strict authorization middleware.
        </div>
      </div>
    ),
    tech: ["Node.js", "RBAC Architecture", "MVC Pattern", "REST"],
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
              
              <div className="text-text-muted text-lg leading-relaxed mb-8 flex-grow">
                {project.description}
              </div>
              
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
