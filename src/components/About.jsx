import { memo } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight } from "lucide-react";

const About = memo(() => {
  const skills = [
  "React.js & Next.js",
  "Node.js & Express.js",
  "MongoDB & MySQL",
  "TypeScript & Tailwind CSS",
  "Python & ASP.NET",
  "REST APIs & JWT",
  "Git & GitHub",
  "Deployment (VPS, Nginx, Linux)",
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-32 overflow-hidden bg-brand-bg"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] blue-glow-subtle rounded-full opacity-30" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] blue-glow-subtle rounded-full opacity-20" />
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-start gap-16 lg:grid-cols-2 lg:gap-24"
        >
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col order-1 lg:order-1">
            {/* Small Heading */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-[1px] bg-brand-accent" />
              <p className="font-grotesk uppercase tracking-[0.2em] text-xs text-brand-accent font-semibold text-glow">
                About Me
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              MERN Stack <br />
              <span className="text-brand-accent text-glow">
                Developer
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div
              variants={itemVariants}
              className="mb-8 space-y-4 text-base font-light leading-relaxed md:text-lg font-inter text-brand-text-secondary"
            >
              <p>
                I'm Nasimudheen, a passionate Full Stack MERN Developer with
                hands-on experience building modern, scalable, and responsive
                web applications. I enjoy transforming ideas into real-world
                digital products with clean code and intuitive user
                experiences.
              </p>

              <p>
                I completed a 6-month MERN Stack Development internship where I
                worked with React.js, Next.js, Node.js, Express.js, MongoDB,
                MySQL, TypeScript, and Tailwind CSS. I've developed projects
                including e-commerce platforms, social media applications,
                event booking systems, and AI-powered web applications while
                continuously improving my problem-solving and development
                skills.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-3 mb-10 sm:grid-cols-2"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm font-medium text-white/80 font-inter"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  {skill}
                </div>
              ))}
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={itemVariants}
              className="p-6 space-y-4 border rounded-2xl bg-white/5 border-white/10 backdrop-blur-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-accent" />
                  <a
                    href="mailto:yourmail@gmail.com"
                    className="text-sm transition-colors text-white/80 hover:text-brand-accent font-inter"
                  >
                   nasimudheent22@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-accent" />
                  <span className="text-sm text-white/80 font-inter">
                    +918547636667
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-accent" />
                <span className="text-sm text-white/80 font-inter">
                  Available for Freelance & Full-Time Opportunities
                </span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-8">
              <motion.a
                whileHover={{
                  y: -3,
                  boxShadow:
                    "0 10px 30px -5px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold tracking-wider uppercase transition-all bg-white rounded-full font-sora text-brand-bg"
              >
                Let's Work Together
                <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center order-2 lg:justify-end lg:order-2"
          >
            <div className="absolute w-[80%] h-[80%] bg-brand-accent/20 blur-[100px] rounded-full z-0" />

            <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden glass-panel group">
              <div className="absolute inset-0 z-10 transition-colors duration-700 pointer-events-none bg-brand-accent/10 group-hover:bg-transparent" />

              <img
                src="/images/about-1.png"
                alt="Nasimudheen"
                className="object-cover object-center w-full h-full transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Card */}
              <div className="absolute z-20 bottom-6 left-6 right-6">
                <div className="p-5 border shadow-xl bg-brand-secondary/80 backdrop-blur-md border-white/10 rounded-2xl">
                  <p className="text-xs font-medium tracking-wider uppercase text-white/50 font-inter">
                    Full Stack MERN Developer
                  </p>
                  <p className="mt-1 text-base font-bold text-white font-sora">
                    Nasimudheen T
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;