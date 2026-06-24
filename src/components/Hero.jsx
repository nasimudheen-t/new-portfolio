import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Code,
  Layers,
  Cpu,
} from "lucide-react";
import { Github, Linkedin, Instagram } from "./Icons";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden bg-[#1A1A1A]"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] blue-glow rounded-full opacity-30" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] blue-glow-subtle rounded-full opacity-20" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-80px)]">
        {/* LEFT SIDE: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center order-2 lg:col-span-5 lg:order-1"
        >
          {/* Greeting Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 mb-5"
          >
            <span className="w-10 h-[2px] bg-brand-accent/60" />
            <span className="font-grotesk text-xs uppercase tracking-[0.25em] text-brand-accent font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-sora text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white"
          >
            NASIMUDHEEN T
          </motion.h1>

          {/* Role */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mt-3"
          >
            <span className="px-4 py-1.5 text-xs font-medium tracking-wider uppercase border rounded-full font-grotesk border-brand-accent/30 bg-brand-accent/10 text-brand-accent">
              MERN Stack Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-lg mt-5 text-sm font-light leading-relaxed md:text-base text-brand-text-secondary"
          >
            I build scalable, high-performance web applications with modern
            JavaScript technologies, creating intuitive user experiences backed
            by robust backend architectures.
          </motion.p>

          {/* Tech Stack Tags */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mt-4"
          >
            {["React", "Next.js", "Node.js", "MongoDB", "TypeScript"].map(
              (tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[10px] font-medium tracking-wide uppercase rounded-full font-grotesk text-white/60 border border-white/5 bg-white/5"
                >
                  {tech}
                </span>
              ),
            )}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mt-7"
          >
            <motion.a
              whileHover={{
                y: -3,
                boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              href="/cv/Nasimudheen_T.pdf"
              download="Nasimudheen_T.pdf"
              className="flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-wider uppercase transition-all bg-white rounded-full font-sora text-brand-bg"
            >
              Download CV
              <ArrowRight size={14} />
            </motion.a>

            <motion.a
              whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.06)" }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-6 py-3 text-xs font-bold tracking-wider text-white uppercase transition-all border rounded-full font-sora border-white/10 bg-white/5 backdrop-blur-sm"
            >
              Let's Talk
            </motion.a>
          </motion.div>

          {/* Location & Availability */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mt-6"
          >
            <div className="flex items-center gap-1.5 text-xs text-white/40">
              <MapPin size={12} />
              <span>Kerala, India</span>
            </div>
            <span className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-1.5 text-xs text-green-400/70">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 bg-green-400 rounded-full" />
              </span>
              <span>Available for work</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mt-6"
          >
            {[
              { icon: Github, href: "https://github.com/nasimudheen-t" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/nasimudheen-t/",
              },
              { icon: Instagram, href: "https://www.instagram.com/nasym_._/" },
              {
                icon: Mail,
                href: "https://mail.google.com/mail/?view=cm&to=nasimudheent22@gmail.com",
              },
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -3,
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    color: "#3B82F6",
                  }}
                  whileTap={{ scale: 0.93 }}
                  className="flex items-center justify-center transition-colors border rounded-full text-brand-muted w-9 h-9 border-white/5 bg-brand-secondary/30 backdrop-blur-sm"
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* CENTER: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative flex items-center justify-center order-1 lg:col-span-4 lg:order-2"
        >
          {/* Outer decorative rings */}
          <div className="absolute w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute w-[140%] h-[140%] border border-white/[0.02] border-dashed rounded-full pointer-events-none animate-[spin_80s_linear_infinite]" />

          {/* Glow behind image */}
          <div className="absolute w-64 h-64 bg-brand-accent/15 blur-[100px] rounded-full z-0" />

          {/* Image Frame */}
          <div className="relative z-10 w-full max-w-[340px] aspect-square group">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 rounded-full bg-brand-accent/20 blur-[60px] opacity-40 group-hover:opacity-70 transition-opacity duration-700" />

            {/* Image container - pure circle, no border, no card */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-brand-secondary shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-brand-bg/30" />

              {/* Replace src with your image */}
              <img
                src="/images/new-1.png"
                alt="Nasimudheen T"
                className="object-cover w-full h-full transition-transform duration-700 select-none group-hover:scale-105"
              />
            </div>

            {/* Floating badge - top right */}
            <div className="absolute top-2 right-2 z-20 px-2.5 py-1 text-[8px] font-bold tracking-wider uppercase rounded-full bg-white/10 backdrop-blur-md text-white border border-white/10">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Active
              </span>
            </div>

            {/* Floating badge - bottom left */}
            <div className="absolute bottom-2 left-2 z-20 flex items-center gap-1.5 px-2.5 py-1 text-[8px] font-medium tracking-wide rounded-full bg-black/40 backdrop-blur-md text-white/80 border border-white/5">
              <Code size={11} className="text-brand-accent" />
              <span>2+ yrs exp</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Stats / Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col order-3 gap-4 ml-8 lg:col-span-3"
        >
          {/* Stat 1 */}
          <motion.div
            whileHover={{ y: -3, borderColor: "rgba(59, 130, 246, 0.3)" }}
            className="p-4 transition-all border rounded-xl bg-white/5 border-white/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-accent/10">
                <Layers size={18} className="text-brand-accent" />
              </div>
              <div>
                <p className="text-xl font-bold text-white font-sora">2+</p>
                <p className="text-[10px] font-medium tracking-wider uppercase text-white/40 font-grotesk">
                  Years Experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            whileHover={{ y: -3, borderColor: "rgba(59, 130, 246, 0.3)" }}
            className="p-4 transition-all border rounded-xl bg-white/5 border-white/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-brand-accent/10">
                <Code size={18} className="text-brand-accent" />
              </div>
              <div>
                <p className="text-xl font-bold text-white font-sora">10+</p>
                <p className="text-[10px] font-medium tracking-wider uppercase text-white/40 font-grot">
                  Projects Completed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            whileHover={{ y: -3, borderColor: "rgba(59, 130, 246, 0.3)" }}
            className="p-4 transition-all border rounded-xl bg-white/5 border-white/5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/10">
                <Cpu size={18} className="text-green-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-white font-sora">99%</p>
                <p className="text-[10px] font-medium tracking-wider uppercase text-white/40 font-grot">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Badge */}
          <motion.div
            whileHover={{ borderColor: "rgba(59, 130, 246, 0.4)" }}
            className="p-4 mt-1 text-center transition-all border cursor-pointer rounded-xl border-white/10 bg-gradient-to-r from-brand-accent/5 to-transparent"
          >
            <p className="text-xs font-medium text-white/60 font-grotesk">
              <span className="text-brand-accent">✦</span> Available for
              freelance projects & full-time opportunities
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute z-20 flex flex-col items-center gap-1.5 transition-opacity -translate-x-1/2 cursor-pointer bottom-6 left-1/2 hover:opacity-100"
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-grotesk text-[8px] uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
