import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout, Server, Smartphone, CheckCircle2, Zap, Activity, ExternalLink } from "lucide-react";

const services = [
  {
    icon: <Layout className="text-accent-gold" size={28} />,
    title: "Web Development",
    description: "Building responsive, beautiful, and performant web applications using modern web technologies."
  },
  {
    icon: <Server className="text-accent-gold" size={28} />,
    title: "Backend Solutions",
    description: "Creating robust APIs and secure server-side applications to power your digital products."
  },
  {
    icon: <Smartphone className="text-accent-gold" size={28} />,
    title: "Responsive Design",
    description: "Ensuring your website looks flawless on all devices, from large desktop monitors to mobile screens."
  },
  {
    icon: <CheckCircle2 className="text-accent-gold" size={28} />,
    title: "SEO Optimization",
    description: "Optimizing websites for better Google rankings, faster loading speed, improved discoverability, and stronger online visibility."
  },
  {
    icon: <Zap className="text-accent-gold" size={28} />,
    title: "Performance Optimization",
    description: "Improving page load times and overall application performance to provide the best user experience."
  },
  {
    icon: <Activity className="text-accent-gold" size={28} />,
    title: "UI/UX Development",
    description: "Crafting intuitive and engaging user experiences with clean code and modern design principles."
  }
];

const projects = [
  {
    title: "Pelmet",
    category: "Plastic Manufacturing",
    description: "A modern corporate website developed for a Kerala-based plastic manufacturing company with responsive design, business-focused UI, and performance optimization.",
    url: "https://www.pelmet.in/",
    image: "/images/freelance/pelmet.png",
    tags: ["React", "Tailwind CSS", "Corporate UI"]
  },
  {
    title: "Clinic Website",
    category: "Healthcare / Clinic",
    description: "A clean and professional clinic website designed for better patient engagement, mobile responsiveness, and appointment-focused user experience.",
    url: "https://clinic-website-zeta-peach.vercel.app/",
    image: "/images/freelance/clinic.png",
    tags: ["Healthcare", "Responsive", "UI/UX"]
  },
  {
    title: "Interior Design Website",
    category: "Interior Design",
    description: "A premium interior design website with elegant layouts, smooth visuals, and modern UI sections crafted to showcase design portfolios beautifully.",
    url: "https://interior-web-psi.vercel.app/",
    image: "/images/freelance/interior.png",
    tags: ["Premium UI", "Animations", "Portfolio"]
  },
  {
    title: "Real Estate Website",
    category: "Real Estate",
    description: "A modern real estate platform featuring property showcase sections, responsive layouts, and visually appealing business presentation.",
    url: "https://real-estate-ten-steel.vercel.app/",
    image: "/images/freelance/real_estate.png",
    tags: ["Real Estate", "Modern", "Gallery"]
  },
  {
    title: "Wedding Website",
    category: "Wedding & Events",
    description: "A stylish and visually rich wedding website designed with elegant animations and premium event presentation sections.",
    url: "https://enchanted-wedding-effects.vercel.app/",
    image: "/images/freelance/wedding.png",
    tags: ["Events", "Elegant", "Cinematic"]
  },
  {
    title: "Restaurant Website",
    category: "Restaurant",
    description: "A modern restaurant website with attractive food presentation, responsive layouts, and engaging customer-focused UI.",
    url: "https://restaurant-website-beryl-two.vercel.app/",
    image: "/images/freelance/restaurant.png",
    tags: ["Food Business", "Gourmet", "Interactive"]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("What I Do");

  return (
    <section id="services" className="py-32 bg-cream-bg relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-accent-gold"></span>
            <span className="text-accent-gold uppercase tracking-widest text-sm font-bold">From Idea to Production.</span>
            <span className="h-[1px] w-12 bg-accent-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text-deep tracking-tight mb-6">
            Websites Built For Businesses.
          </h2>
        </motion.div>

        {/* Movable Tab Navigation */}
        <div className="sticky top-24 z-30 mb-16 mx-auto w-full max-w-fit">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 p-1.5 bg-cream-alt/80 backdrop-blur-xl rounded-full border border-border-soft shadow-xl shadow-black/20">
            {["What I Do", "My Works"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap outline-none ${
                  activeTab === tab ? "text-white" : "text-text-muted hover:text-text-deep"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent-gold/20 border border-accent-gold/50 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === "What I Do" && (
              <motion.div
                key="what-i-do"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group p-8 rounded-[2rem] bg-cream-alt/40 backdrop-blur-sm border border-border-soft hover:border-accent-gold/40 hover:bg-cream-alt transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-[0_0_30px_rgba(239,68,68,0.05)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    <div className="p-4 bg-cream-bg rounded-2xl border border-border-soft w-max mb-6 group-hover:scale-110 group-hover:border-accent-gold/30 transition-all duration-300 shadow-inner">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold font-serif text-text-deep mb-4 group-hover:text-accent-gold transition-colors relative z-10">
                      {service.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed relative z-10">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "My Works" && (
              <motion.div
                key="my-works"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group rounded-[2rem] overflow-hidden bg-cream-alt/40 backdrop-blur-sm border border-border-soft hover:border-accent-gold/40 transition-all duration-500 flex flex-col shadow-lg hover:shadow-[0_0_40px_rgba(239,68,68,0.08)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-border-soft/50">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cream-bg via-cream-bg/20 to-transparent opacity-90" />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-1.5 rounded-full bg-cream-alt/80 backdrop-blur-md border border-border-soft text-xs font-bold text-text-deep uppercase tracking-wider shadow-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 flex flex-col flex-grow relative bg-gradient-to-b from-cream-bg/50 to-transparent">
                      <h3 className="text-3xl font-bold font-serif text-text-deep mb-4 group-hover:text-accent-gold transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed mb-8 flex-grow text-lg">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs font-bold text-text-muted bg-cream-bg px-4 py-1.5 rounded-full border border-border-soft">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a 
                        href={project.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-cream-bg border border-border-soft text-text-deep font-bold hover:bg-accent-gold hover:border-accent-gold hover:text-white transition-all duration-300 group/btn shadow-sm"
                      >
                        Live Preview 
                        <ExternalLink size={18} className="group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
