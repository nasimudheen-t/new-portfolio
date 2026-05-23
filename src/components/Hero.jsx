import { motion } from "framer-motion";
import { Mail, ArrowRight, ChevronDown } from "lucide-react";
import { Github, Linkedin, Instagram } from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden bg-black"
    >
      {/* ================= FULL BACKGROUND ================= */}

      {/* Main Background Image */}
      <div className="absolute inset-0 ">
        <img
          src="/images/nasim-1.png"
          alt="Nasimudheen"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-[center_top]
            scale-[1.02]
          "
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      {/* Left Gradient */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

      {/* Extra Glow */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute left-[20%] top-[40%] w-[700px] h-[700px] bg-red-500/5 blur-[150px] rounded-full" />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-20 max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 h-full flex flex-col">

        {/* ================= NAVBAR ================= */}

        <nav className="flex items-center justify-between py-8">
          {/* Logo */}
          <h2 className="text-3xl font-black tracking-tight text-white">
            NT<span className="text-red-500">.</span>
          </h2>

          {/* Menu */}
          <div className="items-center hidden gap-10 lg:flex">
            {['About', 'Skills', 'Projects'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-medium transition-all duration-300 text-white/80 hover:text-white group"
              >
                {item}
                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    w-0
                    h-[2px]
                    bg-red-500
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            ))}

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="py-3 text-sm font-bold text-black bg-white rounded-full shadow-xl px-7"
            >
              Contact
            </motion.a>
          </div>
        </nav>

        {/* ================= HERO CONTENT ================= */}

        <div className="flex items-center flex-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mt-10 lg:-ml-8"
          >
            {/* Intro */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-red-500" />
              <p className="uppercase tracking-[5px] text-sm text-red-400 font-semibold">
                FULL STACK DEVELOPER
              </p>
            </div>

            {/* Name */}
            <h1
              className="
                text-[4rem]
                sm:text-[5rem]
                md:text-[6rem]
                lg:text-[7rem]
                xl:text-[8rem]
                font-black
                tracking-[-5px]
                leading-[0.9]
                text-white
              "
            >
              NASIMUDHEEN
            </h1>

            {/* Role */}
            <h2 className="mt-5 text-xl font-medium sm:text-2xl text-white/90">
              Software Engineer /{" "}
              <span className="text-red-500">Full Stack Architect</span>
            </h2>

            {/* Description */}
            <p className="max-w-xl mt-8 text-base leading-relaxed sm:text-lg text-white/70">
              Building scalable, performance-driven, enterprise-grade modern web
              applications using MERN stack technologies and modern frontend
              architectures.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="/cv/Nasimudheen_T.pdf"
                download="Nasimudheen_T.pdf"
                className="flex items-center gap-2 px-8 py-4 text-sm font-semibold text-black bg-white rounded-full shadow-xl"
              >
                View CV
                <ArrowRight size={17} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="px-8 py-4 text-sm font-semibold text-white border rounded-full border-white/20 bg-white/10 backdrop-blur-md"
              >
                Contact Me
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-14">
              {[
                { icon: Github, href: "https://github.com/nasimudheen-t" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/nasimudheen-t/" },
                { icon: Instagram, href: "https://www.instagram.com/nasym_._/" },
                { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=nasimudheent22@gmail.com" },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -6, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center text-white transition-all duration-300 border w-14 h-14 rounded-2xl border-white/10 bg-white/10 backdrop-blur-md hover:bg-red-500"
                  >
                    <Icon size={22} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ================= SCROLL ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute flex-col items-center hidden gap-2 bottom-10 right-10 lg:flex text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[4px] rotate-90 mb-7">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}