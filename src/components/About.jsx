import React, { memo } from "react";
import { motion } from "framer-motion";

const About = memo(() => {
  const stats = [
    { value: "10+", label: "Projects" },
    { value: "1+", label: "Years Exp" },
    { value: "BCA", label: "Graduate" },
    { value: "Open", label: "To Work" }
  ];

  return (
    <section id="about" className="py-32 border-t border-border-soft">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start transform-gpu will-change-transform"
        >
          {/* Left Side: Photo */}
          <div className="relative w-full max-w-sm mx-auto md:mx-0">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-cream-alt border border-border-soft">
              <img 
                src="/images/about.jpg" 
                alt="Working" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 border border-accent-gold/20 rounded-3xl -z-10"></div>
          </div>

          {/* Right Side: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-deep mb-8 tracking-tight">
              About Me.
            </h2>
            
            <div className="text-text-muted text-lg leading-relaxed mb-12 space-y-6">
              <p>
                I am a passionate and detail-oriented MERN Stack Developer with a strong foundation in building dynamic and responsive web applications. I thrive on creating clean, efficient, and scalable code that solves real-world problems.
              </p>
              <p>
                My expertise spans the entire development lifecycle, from conceptualizing modern user interfaces to architecting robust database schemas and APIs.
              </p>
              <p>
                When I'm not writing code, I enjoy exploring new technologies, refining my design sense, and studying the latest trends in web architecture to ensure I'm always delivering state-of-the-art solutions.
              </p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-cream-alt p-6 rounded-xl border border-border-soft flex flex-col items-center text-center">
                  <span className="text-3xl font-serif font-bold text-accent-gold mb-2">{stat.value}</span>
                  <span className="text-sm font-medium text-text-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;
