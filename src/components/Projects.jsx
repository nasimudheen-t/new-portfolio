import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";

const projects = [
  {
    title: "Enterprise Client Analytics Dashboard",
    image: "/images/dashboard.png",
    description: (
      <div className="space-y-4 font-inter text-sm md:text-base text-brand-text-secondary font-light">
        <div>
          <strong className="text-white font-medium">Problem:</strong> Legacy systems lacked real-time visibility into client performance metrics, leading to fragmented decision-making.
        </div>
        <div>
          <strong className="text-white font-medium">Solution:</strong> Architected a scalable dashboard for real-time data visualization. Engineered the frontend with Next.js and utilized TanStack Query for optimal server-state management.
        </div>
      </div>
    ),
    tech: ["Next.js", "TanStack Query", "System Design", "RBAC"],
    github: "#",
    live: "#"
  },
  {
    title: "EZZone - High-Concurrency Booking Platform",
    image: "/images/ezzone.png",
    description: (
      <div className="space-y-4 font-inter text-sm md:text-base text-brand-text-secondary font-light">
        <div>
          <strong className="text-white font-medium">Problem:</strong> Existing booking solutions suffered from race conditions and poor user experiences during high-traffic events.
        </div>
        <div>
          <strong className="text-white font-medium">Solution:</strong> Developed a secure reservation platform addressing concurrency. Implemented scalable RESTful APIs with Node.js and MongoDB.
        </div>
      </div>
    ),
    tech: ["MERN Stack", "API Design", "Security", "MongoDB"],
    github: "#",
    live: "#"
  },
  {
    title: "BugTracker - Production Issue Management",
    image: "/images/bugtracker.png",
    description: (
      <div className="space-y-4 font-inter text-sm md:text-base text-brand-text-secondary font-light">
        <div>
          <strong className="text-white font-medium">Problem:</strong> Cross-functional teams lacked a unified, structured workflow for tracking and resolving software defects efficiently.
        </div>
        <div>
          <strong className="text-white font-medium">Solution:</strong> Built a production-grade issue tracking system. Engineered a responsive React UI with real-time state synchronization and a robust Express/MySQL backend.
        </div>
      </div>
    ),
    tech: ["Express", "MySQL", "React", "State Management"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Collaboration Portal",
    image: "/images/collab_portal.png",
    description: (
      <div className="space-y-4 font-inter text-sm md:text-base text-brand-text-secondary font-light">
        <div>
          <strong className="text-white font-medium">Problem:</strong> Decentralized task management resulted in poor auditability and unauthorized access to sensitive project data.
        </div>
        <div>
          <strong className="text-white font-medium">Solution:</strong> Designed a centralized workflow portal with a strict Role-Based Access Control (RBAC) architecture.
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
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-brand-bg border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-accent/5 blur-[150px] rounded-full opacity-60" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-accent/5 blur-[150px] rounded-full opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-brand-accent" />
            <p className="font-grotesk uppercase tracking-[0.2em] text-xs text-brand-accent font-semibold text-glow">
              PORTFOLIO
            </p>
            <span className="w-10 h-[1px] bg-brand-accent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-white tracking-tight mb-6">
            Selected Works.
          </h2>
          <p className="font-inter text-brand-text-secondary text-base md:text-lg max-w-2xl font-light">
            A collection of recent projects focusing on full-stack development, scalable architectures, and premium user experiences.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass-panel rounded-3xl overflow-hidden flex flex-col border border-white/5 hover:border-brand-accent/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-secondary border-b border-white/5">
                <div className="absolute inset-0 bg-brand-accent/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Links Overlay */}
                <div className="absolute inset-0 bg-brand-bg/80 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 z-20 flex items-center justify-center gap-6">
                  <a 
                    href={project.github} 
                    className="p-4 rounded-full bg-white/10 hover:bg-brand-accent hover:text-white text-white/80 transition-colors duration-300"
                    target="_blank" rel="noreferrer"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href={project.live} 
                    className="p-4 rounded-full bg-white/10 hover:bg-brand-accent hover:text-white text-white/80 transition-colors duration-300"
                    target="_blank" rel="noreferrer"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-sora font-bold text-white mb-6 group-hover:text-brand-accent transition-colors duration-300">
                  <a href={project.live}>{project.title}</a>
                </h3>
                
                <div className="mb-8 flex-grow">
                  {project.description}
                </div>
                
                <ul className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-md text-xs font-inter font-medium text-brand-text-secondary uppercase tracking-wide">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
