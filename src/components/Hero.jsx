import { motion } from "framer-motion";
import { Mail, Code2 } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-text-muted uppercase tracking-widest text-sm font-semibold mb-4">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-text-deep mb-4 leading-tight">
              Nasimudheen T.
            </h1>
            <h2 className="text-2xl md:text-3xl text-text-muted mb-6 font-light">
              MERN Stack Developer
            </h2>
            <p className="text-text-muted text-lg max-w-lg mb-10 leading-relaxed">
              Building clean, scalable web apps from Kerala, India. I specialize in modern Javascript ecosystems and minimal design. Ready to work and available for freelance projects.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-accent-gold text-white font-medium hover:bg-[#b8955c] transition-colors shadow-sm"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full border-2 border-border-soft text-text-deep font-medium hover:border-accent-gold transition-colors"
              >
                Download CV
              </a>
            </div>

            <div className="flex gap-6 text-text-muted">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-accent-gold transition-colors">
                <Github size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-accent-gold transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="mailto:nasimudheent22@gmail.com" className="hover:text-accent-gold transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Image & Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative justify-self-center md:justify-self-end w-full max-w-md"
          >
            {/* Image Frame */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-cream-alt shadow-xl shadow-black/5 bg-cream-alt">
              <img 
                src="/src/assets/images/Nasim.jpg" 
                alt="Nasimudheen T" 
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 bg-accent-gold/5 mix-blend-overlay"></div>
            </div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-cream-alt p-5 rounded-2xl shadow-lg border border-border-soft flex items-center gap-4"
            >
              <div className="p-3 bg-cream-bg rounded-full text-accent-gold">
                <Code2 size={24} />
              </div>
              <div>
                <p className="font-serif font-bold text-xl text-text-deep">1+ Year</p>
                <p className="text-sm text-text-muted font-medium">Experience</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
